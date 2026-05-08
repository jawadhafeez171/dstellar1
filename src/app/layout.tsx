import type { Metadata } from 'next';
import './globals.css';
import { BottomNav } from '@/components/BottomNav';

export const metadata: Metadata = {
  title: 'Dstellar | Global SAP Solutions & Enterprise Software Consulting',
  description: 'Dstellar is a leading SAP Gold Partner specializing in S/4HANA migrations, custom enterprise products, and end-to-end consulting across 19+ industries globally.',
  keywords: 'SAP Consulting, S/4HANA Migration, Enterprise Software, SAP Gold Partner, Dstellar Software, SAP Support, SAP Implementation',
  authors: [{ name: 'Dstellar Software Solutions' }],
  openGraph: {
    title: 'Dstellar | Global SAP Solutions & Enterprise Software Consulting',
    description: 'Elevate your enterprise with expert SAP consulting and custom software solutions.',
    url: 'https://dstellar.com',
    siteName: 'Dstellar',
    images: [
      {
        url: '/assets/fav.png',
        width: 800,
        height: 600,
        alt: 'Dstellar Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dstellar | Global SAP Solutions & Enterprise Software Consulting',
    description: 'Expert SAP S/4HANA migrations and enterprise software products.',
    images: ['/assets/logo-white.webp'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
