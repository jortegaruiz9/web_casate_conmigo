import { NextResponse } from 'next/server';

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

// Función para enviar correo electrónico usando EmailJS
async function sendConfirmationEmail(orderData: OrderDetails, paymentDetails: any) {
  try {
    // URL de la API de EmailJS
    const url = 'https://api.emailjs.com/api/v1.0/email/send';
    
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
    
    // Preparar los datos para la plantilla de correo
    const templateParams = {
      to_email: orderData.email,
      to_name: `${orderData.nombres} ${orderData.apellidos}`,
      product_model: orderData.productModel || 'No disponible',
      product_category: orderData.productCategory || 'No disponible',
      material: orderData.material || 'No disponible',
      color: orderData.color || 'No disponible',
      size: orderData.size || 'N/A',
      size_woman: orderData.sizeWoman || 'N/A',
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
      transaction_id: orderData.transactionId || paymentDetails.transactionId || 'No disponible',
      authorization_code: orderData.authorizationCode || paymentDetails.authorizationCode || 'No disponible',
      last_digits: orderData.lastDigits || paymentDetails.lastDigits || 'No disponible',
      payment_date: new Date().toLocaleString('es-EC', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };
    
    // Datos para enviar a EmailJS
    const data = {
      service_id: 'default_service', // Usar el serviceID proporcionado por el usuario
      template_id: 'template_uvsnwjl', // Usar el templateID proporcionado por el usuario
      user_id: '7g9Eo75qyHjgNk4Ai', // Tu user_id de EmailJS
      template_params: templateParams
    };
    
    console.log('Intentando enviar email con los siguientes parámetros:', data);
    
    // Realizar la petición a EmailJS
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    const responseText = await response.text();
    console.log('Respuesta completa de EmailJS:', responseText);
    
    if (response.ok) {
      console.log('Email de confirmación enviado correctamente');
      return true;
    } else {
      console.error('Error al enviar email de confirmación:', responseText);
      return false;
    }
  } catch (error) {
    console.error('Error al enviar email de confirmación:', error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const { id, clientTransactionId, orderData } = await request.json();
    
    console.log("Verificando transacción:", { id, clientTransactionId });
    
    if (!id || !clientTransactionId) {
      return NextResponse.json(
        { error: 'Faltan parámetros requeridos (id, clientTransactionId)' }, 
        { status: 400 }
      );
    }
    
    // Obtener token desde variables de entorno
    const token = process.env.PAYPHONE_TOKEN || process.env.NEXT_PUBLIC_PAYPHONE_TOKEN;
    
    if (!token) {
      console.error("No se encontró el token en variables de entorno");
      return NextResponse.json(
        { error: 'Error de configuración: Token no disponible' }, 
        { status: 500 }
      );
    }
    
    console.log("Enviando solicitud a Payphone V2/Confirm...");
    
    // Exactamente como en la documentación:
    // {
    //   "id": 0,
    //   "clientTxId": "string"
    // }
    const confirmResponse = await fetch('https://pay.payphonetodoesposible.com/api/button/V2/Confirm', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: Number(id),
        clientTxId: clientTransactionId // El campo debe ser exactamente clientTxId
      })
    });
    
    // Capturar texto completo para debug
    const responseText = await confirmResponse.text();
    console.log("Respuesta completa:", responseText);
    
    try {
      // Intentar parsear como JSON
      const confirmData = JSON.parse(responseText);
      console.log('Respuesta de Payphone procesada:', confirmData);
      
      // Verificar si hay un código de error
      if (confirmData.errorCode) {
        return NextResponse.json(
          { error: confirmData.message || 'Error en la verificación', code: confirmData.errorCode }, 
          { status: 400 }
        );
      }
      
      // Si la verificación es exitosa (statusCode 3) y tenemos datos del pedido, enviar email
      if (confirmData.statusCode === 3 && orderData) {
        console.log('Pago verificado exitosamente, enviando email de confirmación...');
        
        try {
          // Enviar email usando el nuevo endpoint dedicado para emails
          const emailResponse = await fetch(`${request.headers.get('origin') || process.env.NEXT_PUBLIC_APP_URL || ''}/api/payment/confirmation-email`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
              orderData: {
                ...orderData,
                transactionId: id,                               // Asegurar que tenemos el ID de transacción
                authorizationCode: confirmData.authorizationCode || 'No disponible',  // Añadir código de autorización
                lastDigits: confirmData.cardBin ? confirmData.cardBin.substring(confirmData.cardBin.length - 4) : 'No disponible' // Últimos 4 dígitos
              } 
            })
          });
          
          const emailResult = await emailResponse.json();
          console.log('Respuesta del envío de correo:', emailResult);
          
          // Incluir información sobre el envío del email en la respuesta
          return NextResponse.json({
            ...confirmData,
            emailSent: emailResult.success || false
          });
        } catch (emailError) {
          console.error('Error al enviar email de confirmación:', emailError);
          
          // Devolver la respuesta de la transacción aunque haya fallado el email
          return NextResponse.json({
            ...confirmData,
            emailSent: false,
            emailError: String(emailError)
          });
        }
      }
      
      return NextResponse.json(confirmData);
    } catch (parseError) {
      // Si no es JSON válido, devolver el texto
      console.error("Error al parsear respuesta:", responseText);
      return NextResponse.json(
        { error: 'Respuesta no válida de Payphone', rawResponse: responseText }, 
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error al verificar pago:', error);
    return NextResponse.json(
      { error: 'Error al procesar la verificación', details: String(error) }, 
      { status: 500 }
    );
  }
} 