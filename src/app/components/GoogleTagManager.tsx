// components/GoogleTagManager.tsx

import React from "react";
import Script from "next/script";

// Usar el ID original de GTM
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-PCZR7KW9";
const GA_ID = "G-ZKWNJCQD3D";

const GoogleTagManager = () => {
  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Verificar consentimiento almacenado
            const hasConsent = localStorage.getItem('cookieConsent') === 'true';
            
            // Configuración inicial de consentimiento
            gtag('consent', 'default', {
              'analytics_storage': hasConsent ? 'granted' : 'denied',
              'ad_storage': hasConsent ? 'granted' : 'denied',
              'functionality_storage': hasConsent ? 'granted' : 'denied',
              'security_storage': 'granted',
              'wait_for_update': 500
            });
            
            // Configuración de GTM
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js',
                'cookie_flags': 'SameSite=None;Secure'
              });
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');

            // Configuración de GA4
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              cookie_flags: 'SameSite=None;Secure',
              cookie_domain: 'none',
              restricted_data_processing: !hasConsent,
              anonymize_ip: true
            });
            
            // Limitar frecuencia de eventos
            let throttleTimer;
            const originalPush = dataLayer.push;
            dataLayer.push = function (...args) {
              if (!throttleTimer) {
                throttleTimer = setTimeout(() => {
                  throttleTimer = null;
                }, 2000);
                return originalPush.apply(this, args);
              }
              return undefined;
            };
          `,
        }}
      />
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
};

export default GoogleTagManager;
