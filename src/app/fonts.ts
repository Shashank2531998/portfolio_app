
import { Inter, Source_Code_Pro } from 'next/font/google';

export const bodyFont = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const headlineFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-headline',
});

export const codeFont = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-code',
});
