import { notFound } from 'next/navigation';

import CrabContent from '@/app/product/_components/content/CrabContent';
import GesteronContent from '@/app/product/_components/content/GesteronContent';
import IpfsContent from '@/app/product/_components/content/IpfsContent';
import SkyMavisContent from '@/app/product/_components/content/SkyMavisContent';

const products = {
  crab: CrabContent,
  gs: GesteronContent,
  ipfs: IpfsContent,
  sm: SkyMavisContent,
} as const;

type ProductSlug = keyof typeof products;

export function generateStaticParams() {
  return Object.keys(products).map((id) => ({ id }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const Product = products[params.id as ProductSlug];

  if (!Product) {
    notFound();
  }

  return <Product />;
}
