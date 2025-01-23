import type { Metadata } from 'next';
import '@/styles/globals.scss';
import { pretendard, safiro } from '@/styles/base/fonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable} ${safiro.variable}`}>{children}</body>
    </html>
  );
}
