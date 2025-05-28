export const sendGAEvent = ({ event, value }: { event: string; value: number | string }) => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", event, {
        value,
      });
    } else {
      console.warn("gtag no está disponible");
    }
  };
  
  export const sendGTMEvent = ({ event, value }: { event: string; value: number | string }) => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event,
        value,
      });
    } else {
      console.warn("dataLayer no está disponible");
    }
  };