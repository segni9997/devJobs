import { Header } from '@/components/header';
import { JobForm } from '@/components/job-form';

export default function PostJobPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Post a New Job
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect developer for your team. Fill out the form below to post your job listing.
            </p>
          </div>

          <JobForm />
        </div>
      </main>
    </div>
  );
}