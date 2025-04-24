export const ScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 100; // Compensación para la barra de navegación
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }; 