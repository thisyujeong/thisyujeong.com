import { getNotionPages } from '@/lib/notion';
import type { NotionPage } from '@/lib/notion/schema';
import { useQuery } from '@tanstack/react-query';

const HomePage = () => {
  const { data, isLoading, error } = useQuery<NotionPage[]>({
    queryKey: ['notion-pages'],
    queryFn: getNotionPages,
  });

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>에러: {(error as Error).message}</p>;

  console.log(data);
  return (
    <div>
      <h1>
        The Archive
        <br />
        2021 - {new Date().getFullYear()}
      </h1>
      <ul>{data && data.map(page => <li key={page.id}>{JSON.stringify(page)}</li>)}</ul>
    </div>
  );
};

export default HomePage;
