'use client';
import { PageDataProvider } from '@/contexts/PageDataContext';

export default function PageDataProviderWrapper({
  value,
  children,
}: {
  value: any;
  children: React.ReactNode;
}) {
  return <PageDataProvider value={value}>{children}</PageDataProvider>;
}
