// import type { Metadata } from 'next';
import '@/styles/globals.scss';
import { pretendard, safiro } from '@/styles/base/fonts';
import { Header } from '@/components/common';
import Footer from '@/components/common/Footer/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} ${safiro.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
