import ProjectDetailContent from './ProjectDetailContent';

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  
  return <ProjectDetailContent id={id} />;
}