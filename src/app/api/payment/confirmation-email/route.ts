import { NextResponse } from 'next/server';

// Definir tipo para el pedido
interface OrderDetails {
  productModel?: string;
  productCategory?: string;
  material?: string;
  color?: string;
  size?: number;
  sizeWoman?: number;
  grabadoEl?: string;
  grabadoElla?: string;
  cajaSeleccionada?: string;
  nombres?: string;
  apellidos?: string;
  telefono?: string;
  cedula?: string;
  email?: string;
  ciudad?: string;
  direccion?: string;
  tipoEntrega?: string;
  precio?: number;
  precioCaja?: number;
  total?: number;
  subtotal?: number;
  impuestoPayphone?: number;
  transactionId?: string;
  authorizationCode?: string;
  lastDigits?: string;
}

export async function POST(request: Request) {
  console.log('API confirmation-email: Recibida petición POST');
  
  try {
    // Parsear el cuerpo de la solicitud
    const data = await request.json();
    const orderData: OrderDetails = data.orderData || {};
    
    console.log('API confirmation-email: Datos recibidos:', JSON.stringify(orderData, null, 2));
    
    // Verificar que tenemos los datos mínimos necesarios
    if (!orderData.email) {
      console.error('API confirmation-email: Falta el email en los datos');
      return NextResponse.json(
        { error: 'Falta el email del cliente en los datos del pedido' },
        { status: 400 }
      );
    }

    // Calcular valores si no están presentes
    const subtotal = orderData.subtotal 
      ? Number(orderData.subtotal)
      : Number(orderData.precio || 0) + Number(orderData.precioCaja || 0);
    
    const impuesto = orderData.impuestoPayphone
      ? Number(orderData.impuestoPayphone)
      : Math.round(subtotal * 0.0605 * 100) / 100;
    
    const total = orderData.total 
      ? Number(orderData.total)
      : subtotal + impuesto;
    
    try {
      // URL de la API de EmailJS
      const url = 'https://api.emailjs.com/api/v1.0/email/send';
      
      // Preparar datos para la plantilla en el formato esperado por EmailJS
      const emailJSData = {
        service_id: 'default_service',
        template_id: 'template_8xccjbi',
        user_id: '7g9Eo75qyHjgNk4Ai',
        template_params: {
          name: `${orderData.nombres || ""} ${orderData.apellidos || ""}`.trim(),
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

*ID transacción:* ${orderData.transactionId || "No disponible"}
${orderData.authorizationCode ? `*Código autorización:* ${orderData.authorizationCode}` : ""}
${orderData.lastDigits ? `*Últimos dígitos:* ${orderData.lastDigits}` : ""}

¡Gracias por tu compra!
`,
          email: orderData.email,
          title: `Confirmación de Pedido - ${orderData.productModel || "Anillo"}`,
          
          // Asegurar que todos los campos requeridos en la plantilla estén disponibles
          to_name: `${orderData.nombres || ""} ${orderData.apellidos || ""}`.trim(),
          to_email: orderData.email,
          product_model: orderData.productModel || 'No disponible',
          product_category: orderData.productCategory || 'No disponible',
          material: orderData.material || 'No disponible',
          color: orderData.color || '',
          size: orderData.size || 'N/A',
          size_woman: orderData.sizeWoman || 'N/A',
          telefono: orderData.telefono ? `+593${orderData.telefono}` : 'No disponible',
          transaction_id: orderData.transactionId || 'No disponible'
        }
      };
      
      console.log('API confirmation-email: Enviando solicitud a EmailJS:', JSON.stringify(emailJSData, null, 2));
      
      // Realizar la petición a EmailJS con los encabezados adecuados
      const emailResponse = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Origin': request.headers.get('origin') || 'https://casateconmigo.ec'
        },
        body: JSON.stringify(emailJSData)
      });
      
      console.log('API confirmation-email: Status de respuesta:', emailResponse.status);
      
      const responseText = await emailResponse.text();
      console.log('API confirmation-email: Texto de respuesta:', responseText);
      
      // Devolver resultado
      if (emailResponse.ok) {
        console.log('API confirmation-email: Email enviado correctamente');
        return NextResponse.json({
          success: true,
          message: 'Email de confirmación enviado correctamente',
          emailSent: true
        });
      } else {
        console.error('API confirmation-email: Error al enviar email:', responseText);
        return NextResponse.json({
          success: false,
          message: `Error al enviar email de confirmación: ${responseText}`,
          error: responseText,
          emailSent: false
        }, { status: 500 });
      }
    } catch (emailError: any) {
      console.error('API confirmation-email: Error en la petición a EmailJS:', emailError);
      return NextResponse.json({
        success: false,
        message: 'Error al enviar email de confirmación',
        error: emailError.message || String(emailError),
        emailSent: false
      }, { status: 500 });
    }
  } catch (error: any) {
    console.error('API confirmation-email: Error general al procesar la solicitud:', error);
    return NextResponse.json({
      success: false,
      message: 'Error al procesar la solicitud',
      error: error.message || String(error),
      emailSent: false
    }, { status: 500 });
  }
} 