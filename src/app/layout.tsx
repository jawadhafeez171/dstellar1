import type { Metadata } from 'next';
import './globals.css';
import { BottomNav } from '@/components/BottomNav';

export const metadata: Metadata = {
  title: 'Dstellar — Software Solutions & SAP Consulting',
  description: 'From S/4HANA implementations to custom DSTELLAR products — we plan, build, migrate, and run SAP landscapes across 18 industries and four continents.',
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
