// Tipos globales para EmailJS según documentación oficial
declare global {
  interface Window {
    emailjs: {
      init: (userId: string) => void;
      send: (
        serviceId: string,
        templateId: string,
        templateParams: Record<string, any>,
        userId: string
      ) => Promise<{ status: number; text: string }>;
      sendForm: (
        serviceId: string,
        templateId: string,
        form: HTMLFormElement | string,
        userId: string
      ) => Promise<{ status: number; text: string }>;
    };
  }
}

export {}; 