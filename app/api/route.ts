import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { jobSchema } from '@/lib/validations';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const type = searchParams.get('type');
    
    const jobs = await db.job.findMany({
      where: {
        AND: [
          search ? {
            OR: [
              { title: { contains: search, mode: 'insensitive' } },
              { company: { contains: search, mode: 'insensitive' } },
              { location: { contains: search, mode: 'insensitive' } },
            ]
          } : {},
          type && type !== 'ALL' ? { type: type as any } : {},
        ]
      },
      orderBy: { postedAt: 'desc' },
    });

    return NextResponse.json(jobs);
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

    const job = await db.job.create({
      data: {
        ...validatedData,
        companyWebsite: validatedData.companyWebsite || null,
        salary: validatedData.salary || null,
        benefits: validatedData.benefits || null,
      },
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