import { getPageBySlug } from '@/lib/notion';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default async function Project({ params }: ProjectPageProps) {
  const page = await getPageBySlug(params.id);
  console.log('🔥page', page);

  return (
    <div>
      <h1>Page Id: {params.id}</h1>
      {JSON.stringify(page)}
    </div>
  );
}
