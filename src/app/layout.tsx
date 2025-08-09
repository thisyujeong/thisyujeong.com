import type { Metadata } from 'next';
import { metadata as metadataConfig } from '@/constants/metadata';
import '@/styles/global.scss';
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout';
import ScrollWrapper from '@/components/layout/ScrollWrapper/ScrollWrapper';
import CursorTrailSVG from '@/components/layout/CursorTrailSVG/CursorTrailSVG';
import Header from '@/components/layout/Header/Header';

export const metadata: Metadata = {
  title: metadataConfig.title,
  description: metadataConfig.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {/* mouse trail */}
        <CursorTrailSVG />

        {/* scroll smoother */}
        <Header />

        <ScrollWrapper>
          <DefaultLayout>{children}</DefaultLayout>
        </ScrollWrapper>
      </body>
    </html>
  );
}
