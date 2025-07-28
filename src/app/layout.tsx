import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { metadata as metadataConfig } from '@/constants/metadata';
import '@/styles/global.scss';
import { Providers } from './providers';
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout';
import ScrollWrapper from '@/components/layout/ScrollWrapper/ScrollWrapper';
import MouseTrailSVG from '@/components/layout/MouseTrailSVG/MouseTrailSVG';

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
          {/* mouse trail */}
          <MouseTrailSVG />

          {/* scroll smoother */}
          <ScrollWrapper>
            <DefaultLayout>{children}</DefaultLayout>
          </ScrollWrapper>
        </Providers>
      </body>
    </html>
  );
}
