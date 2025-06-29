export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
  tags: string[];
  postedDate: string;
  companySlug: string;
  featured: boolean;
}

export interface Company {
  slug: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  employees: string;
  founded: string;
  location: string;
  jobCount: number;
}

export const companies: Company[] = [
  {
    slug: 'techcorp',
    name: 'TechCorp',
    logo: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    description: 'Leading technology company focused on innovation and cutting-edge solutions.',
    website: 'https://techcorp.com',
    employees: '500-1000',
    founded: '2015',
    location: 'San Francisco, CA',
    jobCount: 12
  },
  {
    slug: 'innovate-labs',
    name: 'Innovate Labs',
    logo: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    description: 'AI-first company building the future of autonomous systems.',
    website: 'https://innovatelabs.com',
    employees: '100-500',
    founded: '2018',
    location: 'Austin, TX',
    jobCount: 8
  },
  {
    slug: 'cloudnine',
    name: 'CloudNine',
    logo: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    description: 'Cloud infrastructure and DevOps solutions for modern businesses.',
    website: 'https://cloudnine.com',
    employees: '50-100',
    founded: '2020',
    location: 'Seattle, WA',
    jobCount: 6
  }
];

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior Full Stack Developer',
    company: 'TechCorp',
    companyLogo: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120,000 - $180,000',
    description: 'We are looking for a Senior Full Stack Developer to join our growing team. You will be responsible for developing and maintaining our web applications using modern technologies.',
    requirements: [
      '5+ years of experience in full-stack development',
      'Proficiency in React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS, Azure, or GCP)',
      'Strong understanding of database design and optimization',
      'Excellent communication and teamwork skills'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Flexible work arrangements',
      '401(k) with company matching',
      'Professional development budget'
    ],
    tags: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL'],
    postedDate: '2024-01-15',
    companySlug: 'techcorp',
    featured: true
  },
  {
    id: '2',
    title: 'Machine Learning Engineer',
    company: 'Innovate Labs',
    companyLogo: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$140,000 - $200,000',
    description: 'Join our AI team to build next-generation machine learning models and systems. You will work on cutting-edge projects in computer vision and natural language processing.',
    requirements: [
      'MS/PhD in Computer Science, Machine Learning, or related field',
      'Experience with Python, TensorFlow/PyTorch',
      'Strong mathematical background in statistics and linear algebra',
      'Experience with MLOps and model deployment',
      'Publications in top-tier conferences preferred'
    ],
    benefits: [
      'Top-tier compensation and equity',
      'Flexible PTO and sabbatical options',
      'State-of-the-art computing resources',
      'Conference and research funding',
      'Collaborative research environment'
    ],
    tags: ['Python', 'TensorFlow', 'PyTorch', 'MLOps', 'Computer Vision'],
    postedDate: '2024-01-12',
    companySlug: 'innovate-labs',
    featured: true
  },
  {
    id: '3',
    title: 'DevOps Engineer',
    company: 'CloudNine',
    companyLogo: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    location: 'Seattle, WA',
    type: 'Full-time',
    salary: '$110,000 - $160,000',
    description: 'We need a DevOps Engineer to help scale our infrastructure and improve our deployment processes. You will work with Kubernetes, Docker, and various cloud services.',
    requirements: [
      '3+ years of DevOps/SRE experience',
      'Strong knowledge of Kubernetes and Docker',
      'Experience with CI/CD pipelines',
      'Proficiency in scripting languages (Python, Bash)',
      'Cloud platform experience (AWS/GCP/Azure)'
    ],
    benefits: [
      'Competitive salary and benefits',
      'Remote-first work culture',
      'Professional development opportunities',
      'Health and wellness stipend',
      'Annual team retreats'
    ],
    tags: ['Kubernetes', 'Docker', 'AWS', 'Python', 'CI/CD'],
    postedDate: '2024-01-10',
    companySlug: 'cloudnine',
    featured: false
  },
  {
    id: '4',
    title: 'Frontend Developer',
    company: 'TechCorp',
    companyLogo: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    location: 'Remote',
    type: 'Remote',
    salary: '$90,000 - $130,000',
    description: 'Looking for a talented Frontend Developer to create beautiful and performant user interfaces. You will work closely with our design team to implement pixel-perfect designs.',
    requirements: [
      '3+ years of frontend development experience',
      'Expert knowledge of React and modern JavaScript',
      'Experience with state management (Redux, Zustand)',
      'Strong CSS skills and responsive design',
      'Experience with testing frameworks'
    ],
    benefits: [
      'Fully remote position',
      'Flexible working hours',
      'Home office setup allowance',
      'Professional development budget',
      'Health insurance coverage'
    ],
    tags: ['React', 'JavaScript', 'CSS', 'Redux', 'Testing'],
    postedDate: '2024-01-08',
    companySlug: 'techcorp',
    featured: false
  },
  {
    id: '5',
    title: 'Data Engineer',
    company: 'Innovate Labs',
    companyLogo: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$115,000 - $165,000',
    description: 'We are seeking a Data Engineer to build and maintain our data infrastructure. You will design scalable data pipelines and ensure data quality across our systems.',
    requirements: [
      '4+ years of data engineering experience',
      'Strong knowledge of SQL and NoSQL databases',
      'Experience with data pipeline tools (Airflow, Kafka)',
      'Programming skills in Python or Scala',
      'Cloud data platform experience'
    ],
    benefits: [
      'Competitive compensation package',
      'Comprehensive health benefits',
      'Flexible work arrangements',
      'Learning and development opportunities',
      'Stock options program'
    ],
    tags: ['Python', 'SQL', 'Airflow', 'Kafka', 'Data Pipelines'],
    postedDate: '2024-01-05',
    companySlug: 'innovate-labs',
    featured: false
  },
  {
    id: '6',
    title: 'Cloud Architect',
    company: 'CloudNine',
    companyLogo: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    location: 'Seattle, WA',
    type: 'Full-time',
    salary: '$150,000 - $220,000',
    description: 'Senior Cloud Architect position to design and implement scalable cloud infrastructure solutions. You will lead technical architecture decisions and mentor junior engineers.',
    requirements: [
      '7+ years of cloud architecture experience',
      'Expert knowledge of AWS, Azure, or GCP',
      'Experience with infrastructure as code (Terraform, CloudFormation)',
      'Strong leadership and mentoring skills',
      'Architecture design and documentation experience'
    ],
    benefits: [
      'Senior-level compensation and equity',
      'Leadership development programs',
      'Conference speaking opportunities',
      'Flexible PTO policy',
      'Premium health and wellness benefits'
    ],
    tags: ['AWS', 'Azure', 'Terraform', 'Architecture', 'Leadership'],
    postedDate: '2024-01-03',
    companySlug: 'cloudnine',
    featured: true
  }
];

export function getAllJobs(): Job[] {
  return jobs;
}

export function getJobById(id: string): Job | undefined {
  return jobs.find(job => job.id === id);
}

export function getJobsByCompany(companySlug: string): Job[] {
  return jobs.filter(job => job.companySlug === companySlug);
}

export function getCompanyBySlug(slug: string): Company | undefined {
  return companies.find(company => company.slug === slug);
}

export function getFeaturedJobs(): Job[] {
  return jobs.filter(job => job.featured);
}

export function searchJobs(query: string, location?: string, type?: string): Job[] {
  return jobs.filter(job => {
    const matchesQuery = !query || 
      job.title.toLowerCase().includes(query.toLowerCase()) ||
      job.company.toLowerCase().includes(query.toLowerCase()) ||
      job.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));
    
    const matchesLocation = !location || 
      job.location.toLowerCase().includes(location.toLowerCase());
    
    const matchesType = !type || 
      job.type === type;
    
    return matchesQuery && matchesLocation && matchesType;
  });
}