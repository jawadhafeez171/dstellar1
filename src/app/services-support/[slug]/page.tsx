import ServicesClient from './ServicesClient';

// Static params generator for Next.js dynamic routes pre-rendering
export async function generateStaticParams() {
  const slugs = [
    'ai-ml',
    'cloud-devsecops',
    'cybersecurity-compliance',
    'digital-transformation',
    'technology-advisory',
    'premium-support-ams',
    'help-portal'
  ];
  return slugs.map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <ServicesClient slug={slug} />;
}
