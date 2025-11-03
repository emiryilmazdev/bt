'use client';

import dynamic from 'next/dynamic';
import { Book3DSkeleton } from './Skeletons';

const CatalogSection = dynamic(() => import('./CatalogSection'), {
  loading: () => <Book3DSkeleton />,
  ssr: false,
});

export default function CatalogSectionClient() {
  return <CatalogSection />;
}
