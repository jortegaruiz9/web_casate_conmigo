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
 * @param userId ID de usuario de EmailJS (opcional, usa el configurado globalmente si no se proporciona)
 * @returns Promise que resuelve a la respuesta de EmailJS
 */
export const sendEmail = async (
  serviceId: string,
  templateId: string,
  templateParams: EmailTemplateParams,
  userId?: string
): Promise<{ status: number; text: string }> => {
  try {
    // Verificar que EmailJS esté disponible
    if (typeof window === 'undefined' || !window.emailjs) {
      throw new Error('EmailJS no está disponible en el cliente');
    }

    // Enviar correo electrónico
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

    // Preparar parámetros para la plantilla
    const templateParams = {
      to_email: orderData.email,
      to_name: `${orderData.nombres} ${orderData.apellidos}`,
      product_model: orderData.productModel || 'No disponible',
      product_category: orderData.productCategory || 'No disponible',
      material: orderData.material || 'No disponible',
      color: orderData.color || 'No disponible',
      size: orderData.size?.toString() || 'N/A',
      size_woman: orderData.sizeWoman?.toString() || 'N/A',
      grabado_el: orderData.grabadoEl || 'N/A',
      grabado_ella: orderData.grabadoElla || 'N/A',
      caja: orderData.cajaSeleccionada === "led" ? "Caja LED" : "Caja Gamuza",
      ciudad: orderData.ciudad || 'No disponible',
      direccion: orderData.direccion || 'No disponible',
      metodo_entrega: orderData.tipoEntrega === "envio" 
        ? "Envío Gratuito Servientrega" 
        : "Retiro en tienda Quito",
      telefono: orderData.telefono || 'No disponible',
      precio_base: orderData.precio ? `$${Number(orderData.precio).toFixed(2)}` : 'N/A',
      precio_caja: orderData.precioCaja && Number(orderData.precioCaja) > 0 
        ? `$${Number(orderData.precioCaja).toFixed(2)}` 
        : '$0.00',
      subtotal: `$${subtotal.toFixed(2)}`,
      comision: `$${impuesto.toFixed(2)}`,
      total: `$${total.toFixed(2)}`,
      transaction_id: orderData.transactionId || 'No disponible',
      authorization_code: orderData.authorizationCode || 'No disponible',
      last_digits: orderData.lastDigits || 'No disponible',
      payment_date: new Date().toLocaleString('es-EC', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    console.log('Enviando email con los siguientes parámetros:', templateParams);

    // Enviar correo de confirmación
    return await sendEmail(
      'default_service', // Usar el serviceID proporcionado por el usuario
      'template_uvsnwjl', // Usar el templateID proporcionado por el usuario
      templateParams
    );
  } catch (error) {
    console.error('Error al enviar correo de confirmación:', error);
    throw error;
  }
};

// Añadir la definición de tipos para EmailJS en Window
declare global {
  interface Window {
    emailjs: {
      init: (userId: string) => void;
      send: (
        serviceId: string,
        templateId: string,
        templateParams: Record<string, any>,
        userId?: string
      ) => Promise<{ status: number; text: string }>;
      sendForm: (
        serviceId: string,
        templateId: string,
        form: HTMLFormElement | string,
        userId?: string
      ) => Promise<{ status: number; text: string }>;
    };
  }
} 