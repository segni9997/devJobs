import { JobCard } from '@/components/job-card';
import { filterJobs, mockJobs } from '@/lib/mock-data';

interface JobListProps {
  searchParams: { search?: string; type?: string };
}

export async function JobList({ searchParams }: JobListProps) {
  const { search, type } = searchParams;
  
  const jobs = filterJobs(mockJobs, { search, type });

  if (jobs.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No jobs found</h3>
        <p className="text-gray-600">Try adjusting your search criteria or check back later.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          {jobs.length} Job{jobs.length !== 1 ? 's' : ''} Found
        </h2>
      </div>
      
      <div className="grid gap-4">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}