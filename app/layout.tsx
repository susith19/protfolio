import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import Header from './components/Header';

import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ["400", "700"],
  variable: '--font-playfair',
});


export const metadata: Metadata = {
  title: 'Susith Kanan | Portfolio ',
  description: 'Professional portfolio of Susith Kanan',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
     <html lang="en">
      <head>
      </head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}