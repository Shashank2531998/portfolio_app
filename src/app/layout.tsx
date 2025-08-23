
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "next-themes"
import Script from 'next/script';
import { bodyFont, headlineFont, codeFont } from './fonts';
import { cn } from '@/lib/utils';
import { GoogleAnalytics } from '@/components/google-analytics';
import { Suspense } from 'react';


export const metadata: Metadata = {
  title: "Shashank's Portfolio",
  description: 'A portfolio showcasing the work of Shashank.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/icon.png" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-V52571H7YQ"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-V52571H7YQ');
          `}
        </Script>
      </head>
      <body className={cn("font-body antialiased", bodyFont.variable, headlineFont.variable, codeFont.variable)}>
        <Suspense>
            <GoogleAnalytics />
        </Suspense>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
