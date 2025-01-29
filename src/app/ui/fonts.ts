import { Raleway, Montserrat, Inter, Roboto_Mono } from 'next/font/google';

export const raleway = Raleway({ subsets: ['latin'], weight: ['400'] });
export const montserrat = Montserrat({ subsets: ['latin'] });
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});
export const roboto_mono = Roboto_Mono({ subsets: ['latin'], weight: ['400'] }); 