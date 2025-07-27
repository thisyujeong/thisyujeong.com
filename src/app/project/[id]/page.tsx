import ProjectPage from '@/components/pages/project/ProjectPage';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function Project({ params }: ProjectPageProps) {
  return <ProjectPage id={params.id} />;
}
