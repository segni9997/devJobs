import { notFound } from 'next/navigation';
import { CalendarDays, MapPin, Building, DollarSign, Clock, Globe, Mail } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { findJobById, mockJobs } from '@/lib/mock-data';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export async function generateStaticParams() {
  // Generate static params for all jobs in mock data
  return mockJobs.map((job) => ({
    id: job.id,
  }));
}

async function getJob(id: string) {
  return findJobById(id);
}

export default async function JobPage({ params }: { params: { id: string } }) {
  const job = await getJob(params.id);

  if (!job) {
    notFound();
  }

  const jobTypeLabels = {
    FULL_TIME: 'Full Time',
    PART_TIME: 'Part Time',
    CONTRACT: 'Contract',
    FREELANCE: 'Freelance',
    INTERNSHIP: 'Internship',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link href="/">
              <Button variant="ghost" className="mb-4">
                ← Back to Jobs
              </Button>
            </Link>
          </div>

          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl md:text-3xl font-bold mb-2">
                    {job.title}
                  </CardTitle>
                  <div className="flex flex-wrap items-center gap-4 text-blue-100">
                    <div className="flex items-center gap-1">
                      <Building className="h-4 w-4" />
                      <span>{job.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarDays className="h-4 w-4" />
                      <span>{formatDistanceToNow(new Date(job.postedAt))} ago</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <Badge variant="secondary" className="w-fit">
                    {jobTypeLabels[job.type]}
                  </Badge>
                  {job.isRemote && (
                    <Badge variant="outline" className="w-fit bg-white/10 text-white border-white/20">
                      Remote
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Job Description</h3>
                    <div className="prose prose-sm max-w-none text-gray-700">
                      {job.description.split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-3">{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Requirements</h3>
                    <div className="prose prose-sm max-w-none text-gray-700">
                      {job.requirements.split('\n').map((requirement, index) => (
                        <p key={index} className="mb-2">{requirement}</p>
                      ))}
                    </div>
                  </div>

                  {job.benefits && (
                    <>
                      <Separator />
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Benefits</h3>
                        <div className="prose prose-sm max-w-none text-gray-700">
                          {job.benefits.split('\n').map((benefit, index) => (
                            <p key={index} className="mb-2">{benefit}</p>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="space-y-4">
                  <Card className="bg-gray-50">
                    <CardHeader>
                      <CardTitle className="text-lg">Job Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {job.salary && (
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-green-600" />
                          <span className="font-medium">{job.salary}</span>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-blue-600" />
                        <span>{jobTypeLabels[job.type]}</span>
                      </div>

                      {job.companyWebsite && (
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-purple-600" />
                          <a 
                            href={job.companyWebsite} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            Company Website
                          </a>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-4">Ready to Apply?</h4>
                      <Button 
                        asChild 
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                      >
                        <a href={`mailto:${job.contactEmail}`}>
                          <Mail className="h-4 w-4 mr-2" />
                          Apply Now
                        </a>
                      </Button>
                      <p className="text-sm text-gray-600 mt-3 text-center">
                        Contact: {job.contactEmail}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}