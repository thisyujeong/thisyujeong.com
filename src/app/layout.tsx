// import type { Metadata } from 'next';
import '@/styles/globals.scss';
import { default as meta } from 'data/metadata';
import { pretendard, safiro } from '@/styles/base/fonts';
import { Header, Footer } from '@/components/common';
import { ModalProvider } from '@/components/common/Modal/ModalProvider';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  icons: meta.favicon,
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: meta.og.image,
  },
};

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
