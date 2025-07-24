import { Suspense } from 'react';
import AllCategoriesClient from './AllCategoriesClient';

export default function AllCategoriesPage() {
  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <AllCategoriesClient />
    </Suspense>
  );
}
