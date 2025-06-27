import { Suspense } from 'react';
import { JobList } from '@/components/job-list';
import { JobFilters } from '@/components/job-filters';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { JobListSkeleton } from '@/components/job-list-skeleton';

export default function Home({
  searchParams,
}: {
  searchParams: { search?: string; type?: string };
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      <Hero />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/4">
            <JobFilters />
          </aside>
          
          <section className="lg:w-3/4">
            <Suspense fallback={<JobListSkeleton />}>
              <JobList searchParams={searchParams} />
            </Suspense>
          </section>
        </div>
      </main>
    </div>
  );
}