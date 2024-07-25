export const gaPageView = (url: string) => {
  if (window.gtag) {
    window.gtag('config', 'YOUR_GA_MEASUREMENT_ID', {
      page_path: url,
    });
  } else {
    console.error('gtag is not defined');
  }
};
