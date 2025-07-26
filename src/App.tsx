import { RouterProvider } from 'react-router-dom';
import router from '@/routes';
import { useEffect } from 'react';
import { getPages } from './lib/notion';
import { queryClient } from './main';

function App() {
  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ['notion-pages'],
      queryFn: getPages,
    });
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
