import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';

import '@/styles/globals.css';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Audiophile',
  description: 'Elevate Your Sound Experience',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${manrope.className} bg-background`}>{children}</body>
    </html>
  );
}
