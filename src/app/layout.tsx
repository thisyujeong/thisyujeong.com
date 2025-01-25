// import type { Metadata } from 'next';
import '@/styles/globals.scss';
import { pretendard, safiro } from '@/styles/base/fonts';
import { Header } from '@/components';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable} ${safiro.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
