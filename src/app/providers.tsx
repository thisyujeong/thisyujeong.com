'use client';

import { useEffect, useState } from 'react';
import { getClassNames } from '@/lib/notion';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 50 * 5, // 5분간 fresh 상태
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ['class-list'],
      queryFn: getClassNames,
    });
  }, [queryClient]);

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
