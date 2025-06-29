import Link from 'next/link';
import Image from 'next/image';
import { Job } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, DollarSign, Star } from 'lucide-react';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return '1 day ago';
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
    return `${Math.floor(diffInDays / 30)} months ago`;
  };

  return (
    <div className="p-[2px] rounded-xl bg-gradient-to-r from-emerald-600 to-indigo-500">
       <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 relative group">
      {job.featured && (
        <div className="absolute -top-2 right-2">
          <div className="bg-gradient-to-r from-emerald-600 to-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
            <Star className="h-3 w-3" />
            <span>Featured</span>
          </div>
        </div>
      )}
      
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="relative h-12 w-12 rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={job.companyLogo}
              alt={`${job.company} logo`}
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <Link 
                href={`/jobs/${job.id}`}
                className="block group-hover:text-blue-600 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 truncate">
                  {job.title}
                </h3>
              </Link>
              <Link 
                href={`/companies/${job.companySlug}`}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {job.company}
              </Link>
            </div>
            
            <div className="flex flex-col items-end space-y-1">
              <Badge variant={job.featured ? "default" : "secondary"}>
                {job.type}
              </Badge>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <DollarSign className="h-4 w-4" />
              <span>{job.salary}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{formatDate(job.postedDate)}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {job.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {job.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{job.tags.length - 3} more
              </Badge>
            )}
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-gray-600 line-clamp-2">
              {job.description.substring(0, 120)}...
            </p>
            <Button size="sm" asChild className="ml-4">
              <Link href={`/jobs/${job.id}`}>
                View Details
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
}