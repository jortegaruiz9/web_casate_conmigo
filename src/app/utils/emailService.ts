/**
 * Utilidades para enviar correos electrónicos usando EmailJS
 */

// Tipo para los parámetros de la plantilla de correo
interface EmailTemplateParams {
  [key: string]: string | number | boolean | undefined;
}

/**
 * Envía un correo electrónico utilizando EmailJS
 * @param serviceId ID del servicio configurado en EmailJS
 * @param templateId ID de la plantilla configurada en EmailJS
 * @param templateParams Parámetros para la plantilla
 * @param userId ID de usuario de EmailJS (requerido según documentación)
 * @returns Promise que resuelve a la respuesta de EmailJS
 */
export const sendEmail = async (
  serviceId: string,
  templateId: string,
  templateParams: EmailTemplateParams,
  userId: string
): Promise<{ status: number; text: string }> => {
  try {
    // Verificar que EmailJS esté disponible
    if (typeof window === 'undefined' || !window.emailjs) {
      throw new Error('EmailJS no está disponible en el cliente');
    }

    console.log('Enviando email con EmailJS - Params:', {
      serviceId,
      templateId,
      userId
    });

    // Enviar correo electrónico según documentación oficial
    const response = await window.emailjs.send(
      serviceId,
      templateId,
      templateParams,
      userId
    );

    console.log('Email enviado con éxito:', response);
    return response;
  } catch (error) {
    console.error('Error al enviar email:', error);
    throw error;
  }
};

/**
 * Verifica si EmailJS está disponible y espera a que se cargue si es necesario
 * @param maxAttempts Número máximo de intentos (por defecto 10)
 * @param delayMs Tiempo de espera entre intentos en milisegundos (por defecto 500)
 * @returns Promise<boolean> - true si EmailJS está disponible, false si no se pudo cargar
 */
export const waitForEmailJS = async (
  maxAttempts: number = 10,
  delayMs: number = 500
): Promise<boolean> => {
  let attempts = 0;
  
  while (attempts < maxAttempts) {
    if (typeof window !== "undefined" && typeof window.emailjs !== "undefined") {
      console.log("EmailJS está disponible");
      return true;
    }
    
    console.log(`Intento ${attempts + 1}: EmailJS no está disponible, esperando...`);
    await new Promise(resolve => setTimeout(resolve, delayMs));
    attempts++;
  }
  
  console.error("EmailJS no está disponible después de varios intentos");
  return false;
};

/**
 * Envía un correo electrónico utilizando EmailJS con verificación de disponibilidad
 * @param serviceId ID del servicio configurado en EmailJS
 * @param templateId ID de la plantilla configurada en EmailJS
 * @param templateParams Parámetros para la plantilla
 * @param userId ID de usuario de EmailJS (requerido según documentación)
 * @returns Promise que resuelve a la respuesta de EmailJS
 */
export const sendEmailWithRetry = async (
  serviceId: string,
  templateId: string,
  templateParams: EmailTemplateParams,
  userId: string
): Promise<{ status: number; text: string }> => {
  try {
    // Verificar que EmailJS esté disponible
    const isAvailable = await waitForEmailJS();
    
    if (!isAvailable) {
      throw new Error('EmailJS no está disponible en el cliente después de varios intentos');
    }

    console.log('Enviando email con EmailJS - Params:', {
      serviceId,
      templateId,
      userId
    });

    // Enviar correo electrónico según documentación oficial
    const response = await window.emailjs.send(
      serviceId,
      templateId,
      templateParams,
      userId
    );

    console.log('Email enviado con éxito:', response);
    return response;
  } catch (error) {
    console.error('Error al enviar email:', error);
    throw error;
  }
};

/**
 * Envía un correo electrónico con la confirmación de un pedido
 * @param orderData Datos del pedido
 * @returns Promise que resuelve a la respuesta de EmailJS
 */
export const sendOrderConfirmationEmail = async (
  orderData: any
): Promise<{ status: number; text: string }> => {
  try {
    console.log('Iniciando envío de correo de confirmación. Datos recibidos:', orderData);
    
    // Calcular totales si es necesario
    const subtotal = orderData.subtotal 
      ? Number(orderData.subtotal)
      : Number(orderData.precio || 0) + Number(orderData.precioCaja || 0);
    
    const impuesto = orderData.impuestoPayphone
      ? Number(orderData.impuestoPayphone)
      : Math.round(subtotal * 0.0605 * 100) / 100;
    
    const total = orderData.total 
      ? Number(orderData.total)
      : subtotal + impuesto;
    
    // Comprobar información del asesor
    let asesorLetra = "N/A";
    if (orderData.adviser && orderData.adviser.name) {
      asesorLetra = orderData.adviser.name.toUpperCase().charAt(0);
    }
    
    console.log('Información del asesor - Letra:', asesorLetra);

    // Preparar parámetros para la plantilla
    const templateParams = {
      name: `${orderData.nombres} ${orderData.apellidos}`,
      time: new Date().toLocaleString('es-EC', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      message: `
*DATOS DEL PEDIDO*
------------------------
*Producto:* ${orderData.productModel || "No disponible"}
*Categoría:* ${orderData.productCategory || "No disponible"}
*Material:* ${orderData.material || "No disponible"} ${orderData.color || ""}
${orderData.size ? `*Talla:* ${orderData.size}` : ""}
${orderData.sizeWoman ? `*Talla mujer:* ${orderData.sizeWoman}` : ""}
${orderData.grabadoEl ? `*Grabado él:* ${orderData.grabadoEl}` : ""}
${orderData.grabadoElla ? `*Grabado ella:* ${orderData.grabadoElla}` : ""}
*Caja:* ${orderData.cajaSeleccionada === "led" ? "Caja LED" : "Caja Gamuza"}

*DATOS DE ENTREGA*
------------------------
*Ciudad:* ${orderData.ciudad || "No disponible"}
*Dirección:* ${orderData.direccion || "No disponible"}
*Método de entrega:* ${orderData.tipoEntrega === "envio" ? "Envío Gratuito Servientrega" : "Retiro en tienda Quito"}
*Teléfono:* +593${orderData.telefono || "No disponible"}
*Email:* ${orderData.email}

*RESUMEN DE PAGO*
------------------------
${orderData.precio ? `*Precio base:* $${Number(orderData.precio).toFixed(2)}` : ""}
${orderData.precioCaja && Number(orderData.precioCaja) > 0 ? `*Caja LED:* $${Number(orderData.precioCaja).toFixed(2)}` : ""}
*Subtotal:* $${subtotal.toFixed(2)}
*Comisión Payphone (6.05%):* $${impuesto.toFixed(2)}
*Total:* $${total.toFixed(2)}

*INFORMACIÓN ADICIONAL*
------------------------
*Asesor:* ${asesorLetra}
*ID transacción:* ${orderData.transactionId || "No disponible"}
${orderData.authorizationCode ? `*Código autorización:* ${orderData.authorizationCode}` : ""}
${orderData.lastDigits ? `*Últimos dígitos:* ${orderData.lastDigits}` : ""}

¡Gracias por tu compra!
`,
      email: orderData.email,
      title: `Confirmación de Pedido - ${orderData.productModel || "Anillo"} - Asesor: ${asesorLetra}`,
    };

    console.log('Enviando email con los siguientes parámetros:', {
      recipient: templateParams.email,
      title: templateParams.title,
      messageLength: templateParams.message.length,
      asesorLetra: asesorLetra
    });

    // Enviar correo de confirmación
    const response = await sendEmail(
      'default_service', // Usar el serviceID proporcionado por el usuario
      'template_8xccjbi', // Usar el templateID proporcionado por el usuario
      templateParams,
      '7g9Eo75qyHjgNk4Ai' // Usar el userId correcto
    );
    
    console.log('Respuesta de EmailJS después de enviar:', response);
    return response;
  } catch (error) {
    console.error('Error al enviar correo de confirmación:', error);
    throw error;
  }
};

 