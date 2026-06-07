import ProductsClient from './ProductsClient';

// Static params generator for Next.js dynamic routes pre-rendering
export async function generateStaticParams() {
  const slugs = [
    'custom-software',
    'erp',
    'ecommerce',
    'healthcare',
    'logistics-warehouse',
    'sales-accounting',
    'bi-analytics',
    'mobile-web-apps'
  ];
  return slugs.map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <ProductsClient slug={slug} />;
}
