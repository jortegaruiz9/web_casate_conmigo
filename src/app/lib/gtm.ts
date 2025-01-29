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