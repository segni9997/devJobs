'use client';

import { useState, useEffect } from 'react';
import { getAllJobs, getFeaturedJobs, searchJobs, Job } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Building2, Star } from 'lucide-react';
import JobCard from '@/components/jobCard';
import SearchFilters from '@/components/SearchFilters';

export default function HomePage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [featuredJobs, setFeaturedJobs] = useState<Job[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<Job[]>([]);

  useEffect(() => {
    setJobs(getAllJobs());
    setFeaturedJobs(getFeaturedJobs());
  }, []);

  const handleSearch = (query: string, location: string, type: string, tags: string[]) => {
    if (!query && !location && !type && tags.length === 0) {
      setIsSearching(false);
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    const results = searchJobs(query, location, type);
    setSearchResults(results);
  };

  const displayJobs = isSearching ? searchResults : jobs;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Find Your Next
              <span className="bg-gradient-to-r from-emerald-600 to-indigo-500 bg-clip-text text-transparent">
                {' '}Developer Role
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect with top tech companies and discover opportunities that match your skills. 
              From startups to Fortune 500, find your perfect developer position.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="text-2xl font-bold text-blue-600">{jobs.length}+</div>
                  <div className="text-gray-600">Active Jobs</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="text-2xl font-bold text-green-600">50+</div>
                  <div className="text-gray-600">Companies</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="text-2xl font-bold text-purple-600">95%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchFilters onSearch={handleSearch} />
        </div>
      </section>

      {/* Featured Jobs */}
      {!isSearching && featuredJobs.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 mb-8">
              <Star className="h-6 w-6 text-yellow-500" />
              <h2 className="text-2xl font-bold text-gray-900">Featured Jobs</h2>
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                Premium
              </Badge>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Jobs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                {isSearching ? `Search Results (${displayJobs.length})` : 'Latest Jobs'}
              </h2>
            </div>
            
            {!isSearching && (
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Building2 className="h-4 w-4" />
                  <span>{jobs.length} Jobs</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>Multiple Companies</span>
                </div>
              </div>
            )}
          </div>

          {displayJobs.length > 0 ? (
            <div className="space-y-6">
              {displayJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : isSearching ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <TrendingUp className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search criteria or browse all available positions.
              </p>
              <Button onClick={() => handleSearch('', '', '', [])}>
                View All Jobs
              </Button>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Building2 className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Loading jobs...</h3>
              <p className="text-gray-600">Please wait while we fetch the latest opportunities.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-indigo-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Hire Top Talent?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Post your job opening and connect with thousands of qualified developers 
            looking for their next opportunity.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="/post-jobs">Post a Job</a>
          </Button>
        </div>
      </section>
    </div>
  );
}