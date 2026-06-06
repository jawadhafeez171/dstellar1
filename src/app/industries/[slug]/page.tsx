import IndustryClient from './IndustryClient';

// Static params generator for Next.js dynamic routes pre-rendering
export async function generateStaticParams() {
  const slugs = [
    'automotive',
    'consumer-products',
    'electronic-high-tech',
    'manufacturing-industrial',
    'energy-utilities',
    'life-sciences-healthcare',
    'government-public-sector',
    'capital-markets',
    'travel-hospitality',
    'construction',
  ];
  return slugs.map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <IndustryClient slug={slug} />;
}
