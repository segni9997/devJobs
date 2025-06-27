import { NextRequest, NextResponse } from 'next/server';
import { mockJobs, filterJobs, addJob } from '@/lib/mock-data';
import { jobSchema } from '@/lib/validations';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const type = searchParams.get('type');
    
    const filteredJobs = filterJobs(mockJobs, { search: search || undefined, type: type || undefined });

    return NextResponse.json(filteredJobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch jobs' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = jobSchema.parse(body);

    const job = addJob({
      ...validatedData,
      companyWebsite: validatedData.companyWebsite || undefined,
      salary: validatedData.salary || undefined,
      benefits: validatedData.benefits || undefined,
    });

    return NextResponse.json(job, { status: 201 });
  } catch (error: any) {
    console.error('Error creating job:', error);
    
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Invalid job data', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create job' },
      { status: 500 }
    );
  }
}