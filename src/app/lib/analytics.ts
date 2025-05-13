// Funciones de utilidad para Google Tag Manager
export const gtmPageView = (props: { [key: string]: any }) => {
  return window.dataLayer?.push({
    event: "page_view",
    url: window.location.href,
    cookie_consent: true,
    analytics_storage: 'granted',
    ad_storage: 'granted',
    ...props,
  });
};

export const gtmEvent = (eventName: string, parameters: { [key: string]: any }) => {
  return window.dataLayer?.push({
    event: eventName,
    cookie_consent: true,
    ...parameters,
  });
};

// Funciones de utilidad para Google Analytics
export const gaPageView = (url: string) => {
  if (window.gtag) {
    window.gtag('config', 'G-PGHRC21TQD', {
      page_path: url,
      send_page_view: true,
    });
  }
};

export const gaEvent = (action: string, params = {}) => {
  window.gtag?.('event', action, {
    ...params,
    send_to: 'G-PGHRC21TQD',
    non_interaction: false
  });
}; 