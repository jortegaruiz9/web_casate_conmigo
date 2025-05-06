# Cásate Conmigo - Tienda Web

Aplicación web para la tienda de anillos de compromiso y matrimonio "Cásate Conmigo".

## Características

- Catálogo de anillos por categorías
- Sistema de pedidos en línea
- Integración con Payphone para procesamiento de pagos
- Panel de administración para gestión de pedidos

## Tecnologías

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Payphone como gateway de pago

## Configuración

### Requisitos previos

- Node.js 18 o superior
- npm o yarn
- Cuenta en Payphone

### Instalación

1. Clonar el repositorio:

   ```
   git clone https://github.com/tu-usuario/web-casate-conmigo.git
   cd web-casate-conmigo
   ```

2. Instalar dependencias:

   ```
   npm install
   ```

3. Configurar variables de entorno:
   Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

   ```
   # Payphone API
   NEXT_PUBLIC_PAYPHONE_TOKEN=tu_token_payphone
   NEXT_PUBLIC_PAYPHONE_STORE_ID=tu_store_id_payphone
   PAYPHONE_TOKEN=tu_token_payphone

   # Admin Email
   ADMIN_EMAIL=admin@casateconmigo.ec
   ```

4. Iniciar el servidor de desarrollo:
   ```
   npm run dev
   ```

## Sistema de Pagos

La integración con Payphone se realiza mediante una página dedicada de checkout, que mejora la experiencia del usuario y evita problemas de redirección.

## Flujo de Compra

1. El usuario selecciona un producto y configura sus opciones (material, talla, grabado)
2. Completa sus datos personales y de envío
3. Es redirigido a la página de checkout para realizar el pago
4. Después del pago exitoso, es redirigido a la página de confirmación
5. El usuario puede compartir los detalles de su pedido con un asesor vía WhatsApp

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
