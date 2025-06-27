export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'FREELANCE' | 'INTERNSHIP';
  salary?: string;
  description: string;
  requirements: string;
  benefits?: string;
  contactEmail: string;
  companyWebsite?: string;
  isRemote: boolean;
  postedAt: Date;
}

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechFlow Inc.',
    location: 'San Francisco, CA',
    type: 'FULL_TIME',
    salary: '$120,000 - $160,000',
    description: 'We are looking for a Senior Frontend Developer to join our dynamic team. You will be responsible for building scalable web applications using modern JavaScript frameworks. This role offers the opportunity to work on cutting-edge projects with a collaborative team of engineers.\n\nYou will collaborate with designers, product managers, and backend engineers to deliver exceptional user experiences. We value clean code, performance optimization, and accessibility in all our projects.',
    requirements: 'Bachelor\'s degree in Computer Science or equivalent experience\n5+ years of experience with React, TypeScript, and modern frontend tools\nStrong understanding of HTML5, CSS3, and responsive design\nExperience with state management libraries (Redux, Zustand)\nFamiliarity with testing frameworks (Jest, Cypress)\nKnowledge of build tools and CI/CD pipelines',
    benefits: 'Comprehensive health, dental, and vision insurance\nFlexible PTO and work-from-home options\n401(k) with company matching\nProfessional development budget\nStock options\nFree lunch and snacks',
    contactEmail: 'careers@techflow.com',
    companyWebsite: 'https://techflow.com',
    isRemote: true,
    postedAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    title: 'Full Stack Engineer',
    company: 'StartupXYZ',
    location: 'Austin, TX',
    type: 'FULL_TIME',
    salary: '$90,000 - $130,000',
    description: 'Join our fast-growing startup as a Full Stack Engineer! You\'ll work across our entire technology stack, from React frontends to Node.js backends, helping us scale our platform to serve millions of users.\n\nThis is a high-impact role where you\'ll have significant ownership over product features and technical decisions. Perfect for someone who thrives in a fast-paced environment.',
    requirements: '3+ years of full-stack development experience\nProficiency in React, Node.js, and TypeScript\nExperience with databases (PostgreSQL, MongoDB)\nFamiliarity with cloud platforms (AWS, GCP)\nStrong problem-solving and communication skills\nStartup experience preferred',
    benefits: 'Equity package with high growth potential\nFlexible working hours\nHealth and dental insurance\nRemote work options\nLearning and development stipend',
    contactEmail: 'hiring@startupxyz.com',
    companyWebsite: 'https://startupxyz.com',
    isRemote: false,
    postedAt: new Date('2024-01-12'),
  },
  {
    id: '3',
    title: 'React Developer',
    company: 'Digital Solutions Co.',
    location: 'Remote',
    type: 'CONTRACT',
    salary: '$80 - $120/hour',
    description: 'We\'re seeking a skilled React Developer for a 6-month contract position to help build a new customer portal. You\'ll work with our design team to implement pixel-perfect UIs and integrate with our REST APIs.\n\nThis is a remote-first position with flexible hours. Perfect for someone looking for contract work with potential for extension.',
    requirements: '4+ years of React development experience\nStrong CSS and styling skills (Tailwind CSS preferred)\nExperience with REST API integration\nFamiliarity with modern development tools\nExcellent communication skills for remote collaboration\nPortfolio of previous React projects',
    contactEmail: 'contracts@digitalsolutions.com',
    companyWebsite: 'https://digitalsolutions.com',
    isRemote: true,
    postedAt: new Date('2024-01-10'),
  },
  {
    id: '4',
    title: 'Backend Developer - Python',
    company: 'DataTech Corp',
    location: 'New York, NY',
    type: 'FULL_TIME',
    salary: '$110,000 - $150,000',
    description: 'Join our data engineering team as a Backend Developer specializing in Python. You\'ll build robust APIs and data processing pipelines that handle millions of requests daily.\n\nWe work with cutting-edge technologies including microservices, containerization, and cloud-native architectures. This role offers excellent growth opportunities in a data-driven company.',
    requirements: '5+ years of Python development experience\nExperience with Django or FastAPI\nStrong database skills (PostgreSQL, Redis)\nKnowledge of containerization (Docker, Kubernetes)\nExperience with message queues and event-driven architecture\nFamiliarity with data processing tools',
    benefits: 'Competitive salary and bonus structure\nComprehensive benefits package\nFlexible work arrangements\nProfessional development opportunities\nModern office with great amenities\nTeam building events and company retreats',
    contactEmail: 'python-jobs@datatech.com',
    companyWebsite: 'https://datatech.com',
    isRemote: false,
    postedAt: new Date('2024-01-08'),
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    company: 'CloudFirst Technologies',
    location: 'Seattle, WA',
    type: 'FULL_TIME',
    salary: '$130,000 - $170,000',
    description: 'We\'re looking for a DevOps Engineer to help us scale our cloud infrastructure. You\'ll work with AWS services, implement CI/CD pipelines, and ensure our applications run smoothly at scale.\n\nThis role involves working closely with development teams to improve deployment processes and system reliability. Great opportunity to work with modern cloud technologies.',
    requirements: 'Strong experience with AWS services (EC2, ECS, Lambda, RDS)\nProficiency in Infrastructure as Code (Terraform, CloudFormation)\nExperience with CI/CD tools (Jenkins, GitHub Actions)\nKnowledge of containerization and orchestration\nScripting skills (Python, Bash)\nExperience with monitoring and logging tools',
    benefits: 'Top-tier compensation package\nStock options\nFlexible PTO policy\nRemote work options\nHealth, dental, and vision coverage\nProfessional certification reimbursement',
    contactEmail: 'devops@cloudfirst.com',
    companyWebsite: 'https://cloudfirst.com',
    isRemote: true,
    postedAt: new Date('2024-01-05'),
  },
  {
    id: '6',
    title: 'Junior Frontend Developer',
    company: 'WebCraft Studio',
    location: 'Portland, OR',
    type: 'FULL_TIME',
    salary: '$65,000 - $85,000',
    description: 'Perfect opportunity for a junior developer to grow their career! You\'ll work on client projects ranging from small business websites to complex web applications, learning from experienced developers.\n\nWe provide mentorship and training to help you advance your skills. Great environment for someone passionate about frontend development.',
    requirements: '1-2 years of frontend development experience\nKnowledge of HTML, CSS, and JavaScript\nBasic understanding of React or Vue.js\nFamiliarity with responsive design principles\nEagerness to learn and grow\nStrong attention to detail',
    benefits: 'Mentorship program\nFlexible working hours\nHealth insurance\nProfessional development budget\nCasual work environment\nTeam lunch every Friday',
    contactEmail: 'junior-dev@webcraft.com',
    companyWebsite: 'https://webcraft.com',
    isRemote: false,
    postedAt: new Date('2024-01-03'),
  },
  {
    id: '7',
    title: 'Mobile App Developer - React Native',
    company: 'MobileFirst Inc.',
    location: 'Los Angeles, CA',
    type: 'FULL_TIME',
    salary: '$100,000 - $140,000',
    description: 'Join our mobile team to build cross-platform applications using React Native. You\'ll work on consumer-facing apps with millions of downloads, focusing on performance and user experience.\n\nWe\'re looking for someone passionate about mobile development who can contribute to both iOS and Android platforms.',
    requirements: '3+ years of React Native development experience\nExperience publishing apps to App Store and Google Play\nKnowledge of native iOS/Android development is a plus\nUnderstanding of mobile UI/UX principles\nExperience with mobile testing and debugging\nFamiliarity with mobile analytics and crash reporting',
    benefits: 'Competitive salary\nStock options\nFlexible work schedule\nHealth and wellness benefits\nLatest mobile devices for testing\nConference attendance opportunities',
    contactEmail: 'mobile@mobilefirst.com',
    companyWebsite: 'https://mobilefirst.com',
    isRemote: true,
    postedAt: new Date('2024-01-01'),
  },
  {
    id: '8',
    title: 'Software Engineering Intern',
    company: 'Innovation Labs',
    location: 'Boston, MA',
    type: 'INTERNSHIP',
    salary: '$25 - $35/hour',
    description: 'Summer internship opportunity for computer science students! You\'ll work on real projects alongside our engineering team, gaining hands-on experience with modern web technologies.\n\nThis is a paid internship with potential for full-time conversion. Perfect for students looking to gain industry experience.',
    requirements: 'Currently pursuing a degree in Computer Science or related field\nBasic knowledge of programming languages (JavaScript, Python, Java)\nFamiliarity with web development concepts\nStrong problem-solving skills\nEagerness to learn and contribute\nGood communication and teamwork abilities',
    benefits: 'Paid internship program\nMentorship from senior engineers\nFlexible schedule around classes\nNetworking opportunities\nPotential for full-time offer\nFun team activities and events',
    contactEmail: 'internships@innovationlabs.com',
    companyWebsite: 'https://innovationlabs.com',
    isRemote: false,
    postedAt: new Date('2023-12-28'),
  },
];

// Helper functions for filtering and searching
export function filterJobs(jobs: Job[], filters: {
  search?: string;
  type?: string;
}): Job[] {
  let filteredJobs = [...jobs];

  if (filters.search) {
    const searchTerm = filters.search.toLowerCase();
    filteredJobs = filteredJobs.filter(job =>
      job.title.toLowerCase().includes(searchTerm) ||
      job.company.toLowerCase().includes(searchTerm) ||
      job.location.toLowerCase().includes(searchTerm)
    );
  }

  if (filters.type && filters.type !== 'ALL') {
    filteredJobs = filteredJobs.filter(job => job.type === filters.type);
  }

  return filteredJobs.sort((a, b) => b.postedAt.getTime() - a.postedAt.getTime());
}

export function findJobById(id: string): Job | undefined {
  return mockJobs.find(job => job.id === id);
}

// Mock function to simulate adding a new job
export function addJob(jobData: Omit<Job, 'id' | 'postedAt'>): Job {
  const newJob: Job = {
    ...jobData,
    id: (mockJobs.length + 1).toString(),
    postedAt: new Date(),
  };
  
  mockJobs.unshift(newJob); // Add to beginning of array
  return newJob;
}