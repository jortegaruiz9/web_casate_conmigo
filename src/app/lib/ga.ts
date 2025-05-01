export const GA_MEASUREMENT_ID = 'G-PGHRC21TQD';

export const gaPageView = (url: string) => {
  if (window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
      cookie_flags: 'SameSite=None;Secure',
      cookie_domain: 'auto',
      cookie_expires: 365 * 24 * 60 * 60,
      send_page_view: true,
      allow_google_signals: true,
      allow_ad_personalization_signals: true,
      anonymize_ip: true
    });
  } else {
    console.error('gtag is not defined');
  }
};

export const gaEvent = (action: string, params = {}) => {
  window.gtag?.('event', action, {
    ...params,
    send_to: GA_MEASUREMENT_ID,
    non_interaction: false
  });
};
