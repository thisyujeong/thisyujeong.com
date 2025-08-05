'use client';

import { useEffect, useState } from 'react';
import { getClassNames, getClassPages } from '@/lib/notion';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

function NotionDataLoader({ children }: { children: React.ReactNode }) {
  const { isLoading: isPagesLoading } = useQuery({
    queryKey: ['notion-pages'],
    queryFn: () => getClassPages('HNINE'),
  });

  const { isLoading: isClassListLoading } = useQuery({
    queryKey: ['class-list'],
    queryFn: getClassNames,
  });

  const isLoading = isPagesLoading || isClassListLoading;

  return isLoading ? <div>로딩중...</div> : <>{children}</>;
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 50 * 5,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  // useEffect(() => {
  //   queryClient.prefetchQuery({
  //     queryKey: ['notion-pages'],
  //     queryFn: () => getClassPages('HNINE'),
  //   });
  // }, [queryClient]);

  return (
    <QueryClientProvider client={queryClient}>
      <NotionDataLoader>{children}</NotionDataLoader>
    </QueryClientProvider>
  );
}
