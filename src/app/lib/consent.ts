export const initializeConsent = () => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'gtag_id': 'G-PGHRC21TQD',
    'cookie_flags': 'SameSite=None;Secure',
    'analytics_storage': 'granted',
    'ad_storage': 'granted',
    'functionality_storage': 'granted',
    'security_storage': 'granted',
    'personalization_storage': 'granted',
    'ad_user_data': 'granted',
    'ad_personalization': 'granted'
  });

  // Configuración específica para GA4 y Ads
  window.gtag?.('consent', 'default', {
    'analytics_storage': 'granted',
    'ad_storage': 'granted',
    'functionality_storage': 'granted',
    'security_storage': 'granted',
    'personalization_storage': 'granted',
    'ad_user_data': 'granted',
    'ad_personalization': 'granted',
    'wait_for_update': 500
  });
};

export const updateConsent = (consent: {
  analytics?: boolean;
  advertising?: boolean;
}) => {
  const consentConfig = {
    analytics_storage: consent.analytics ? 'granted' : 'denied',
    ad_storage: consent.advertising ? 'granted' : 'denied',
    ad_user_data: consent.advertising ? 'granted' : 'denied',
    ad_personalization: consent.advertising ? 'granted' : 'denied'
  };

  window.dataLayer?.push({
    event: 'consent_update',
    ...consentConfig
  });

  window.gtag?.('consent', 'update', consentConfig);
}; 