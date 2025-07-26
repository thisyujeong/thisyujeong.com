import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/global.scss';
import { Providers } from './providers';
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout';
import { metadata as metadataConfig } from '@/constants/metadata';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: metadataConfig.title,
  description: metadataConfig.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Providers>
          <DefaultLayout>{children}</DefaultLayout>
        </Providers>
      </body>
    </html>
  );
}
