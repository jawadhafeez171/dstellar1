import ConsultingClient from './ConsultingClient';

// Static params generator for Next.js dynamic routes pre-rendering
export async function generateStaticParams() {
  const slugs = [
    's4hana',
    'fico',
    'logistics',
    'production',
    'successfactors',
    'abap-fiori',
    'integration',
    'ariba-supply-chain'
  ];
  return slugs.map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <ConsultingClient slug={slug} />;
}
