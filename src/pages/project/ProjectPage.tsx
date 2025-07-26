import { getPageBySlug } from '@/lib/notion';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: page,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['page', id],
    queryFn: () => getPageBySlug(id!),
    enabled: !!id,
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>에러 발생: {(error as Error).message}</div>;
  if (!page) return <div>페이지 없음</div>;

  return (
    <div>
      <h1>Page Id: {id}</h1>
      <h1>{page.properties.Name.title[0].plain_text}</h1>
    </div>
  );
};

export default ProjectPage;
