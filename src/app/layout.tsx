// import type { Metadata } from 'next';
import '@/styles/globals.scss';
import { pretendard, safiro } from '@/styles/base/fonts';
import { Header } from '@/components/common';
import Footer from '@/components/common/Footer/Footer';
import { ModalProvider } from '@/components/common/Modal/ModalProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} ${safiro.variable}`}>
        <ModalProvider>
          <Header />
          {children}
          <Footer />
          <div id="portal" />
        </ModalProvider>
      </body>
    </html>
  );
}
