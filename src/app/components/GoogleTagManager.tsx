// components/GoogleTagManager.tsx

import React from "react";

const GoogleTagManager: React.FC = () => {
  return (
    <>
      {/* Script de configuración de Google Tag Manager */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PCZR7KW9');
          `,
        }}
      />
      {/* Script de configuración de Google Analytics */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-ZKWNJCQD3D"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZKWNJCQD3D');
          `,
        }}
      />
    </>
  );
};

export default GoogleTagManager;
