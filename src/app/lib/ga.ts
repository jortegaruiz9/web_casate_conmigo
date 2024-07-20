export const gaPageView = (url: string) => {
    window.gtag('config', 'YOUR_GA_MEASUREMENT_ID', {
      page_path: url,
    });
  };