import type React from 'react';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
// import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CookieConsent } from '@/components/cookie-consent';
import { Toaster } from '@/components/ui/sonner';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'Proficient Legal | Family, Property & Immigration Law',
  description:
    'Your trusted partner for legal solutions in family, property, and immigration law.',
  keywords: [
    'legal services',
    'family law',
    'property law',
    'immigration law',
    'australian law firm',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          outfit.className
        )}
      >
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        > */}

        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieConsent />
        </div>
        <Toaster />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
