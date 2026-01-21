/* Mock job data for development and fallback */

export const mockJobs = [
  {
    id: "job_001",
    title: "React Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    locationType: "hybrid",
    jobType: "full-time",
    experienceLevel: "entry-level",
    description:
      "We're looking for a talented React developer to join our growing team. You'll work on building modern, responsive web applications using React, Redux, and modern JavaScript. Requirements include proficiency in React hooks, component design, and state management.",
    requirements: ["React", "JavaScript", "CSS", "Git"],
    salary: {
      currency: "USD",
      min: 80000,
      max: 120000,
    },
    postedDate: "2026-01-20T10:00:00Z",
    applyUrl: "https://techcorp.com/careers/job001",
    source: "mock",
  },
  {
    id: "job_002",
    title: "Frontend Developer Internship",
    company: "StartupHub",
    location: "New York, NY",
    locationType: "on-site",
    jobType: "internship",
    experienceLevel: "entry-level",
    description:
      "Join our talented team as a Frontend Developer Intern. You'll build UI components, work with React, and contribute to real-world projects. Great opportunity to learn full-stack development.",
    requirements: ["HTML", "CSS", "JavaScript", "React basics"],
    salary: {
      currency: "USD",
      min: 0,
      max: 0,
    },
    postedDate: "2026-01-19T14:30:00Z",
    applyUrl: "https://startuphub.com/careers/intern",
    source: "mock",
  },
  {
    id: "job_003",
    title: "Senior Frontend Engineer",
    company: "WebGiant",
    location: "Remote",
    locationType: "remote",
    jobType: "full-time",
    experienceLevel: "senior",
    description:
      "We're looking for an experienced Frontend Engineer to lead our product team. You'll architect large-scale React applications, mentor junior developers, and drive technical decisions.",
    requirements: ["React", "TypeScript", "Node.js", "System Design", "Leadership"],
    salary: {
      currency: "USD",
      min: 140000,
      max: 200000,
    },
    postedDate: "2026-01-18T09:15:00Z",
    applyUrl: "https://webgiant.com/careers/senior-frontend",
    source: "mock",
  },
  {
    id: "job_004",
    title: "Full Stack Developer",
    company: "CloudSoft",
    location: "Austin, TX",
    locationType: "hybrid",
    jobType: "full-time",
    experienceLevel: "mid",
    description:
      "Build scalable applications using React and Node.js. We're looking for a developer who can work across the full stack and understands cloud infrastructure.",
    requirements: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
    salary: {
      currency: "USD",
      min: 110000,
      max: 160000,
    },
    postedDate: "2026-01-17T11:45:00Z",
    applyUrl: "https://cloudsoft.com/careers/fullstack",
    source: "mock",
  },
  {
    id: "job_005",
    title: "Vue.js Developer",
    company: "CreativeStudio",
    location: "Los Angeles, CA",
    locationType: "on-site",
    jobType: "contract",
    experienceLevel: "mid",
    description:
      "We need a Vue.js specialist for a 6-month contract project. Build interactive dashboards and web applications for our clients.",
    requirements: ["Vue.js", "JavaScript", "CSS", "API integration"],
    salary: {
      currency: "USD",
      min: 60,
      max: 85,
    },
    postedDate: "2026-01-16T08:30:00Z",
    applyUrl: "https://creativestudio.com/careers/vue",
    source: "mock",
  },
  {
    id: "job_006",
    title: "Junior JavaScript Developer",
    company: "CodeSchool",
    location: "Boston, MA",
    locationType: "remote",
    jobType: "full-time",
    experienceLevel: "entry-level",
    description:
      "Start your career with us! We're looking for a junior developer with solid JavaScript fundamentals. You'll learn modern web development practices while contributing to real projects.",
    requirements: ["JavaScript", "HTML", "CSS", "Basic React knowledge"],
    salary: {
      currency: "USD",
      min: 65000,
      max: 95000,
    },
    postedDate: "2026-01-15T13:20:00Z",
    applyUrl: "https://codeschool.com/careers/junior",
    source: "mock",
  },
  {
    id: "job_007",
    title: "UI/UX Engineer",
    company: "DesignFlow",
    location: "Seattle, WA",
    locationType: "hybrid",
    jobType: "full-time",
    experienceLevel: "mid",
    description:
      "Combine design and engineering! We're looking for someone who can bridge the gap between design and development. Build beautiful, accessible interfaces with React.",
    requirements: ["React", "CSS", "Design Systems", "Figma"],
    salary: {
      currency: "USD",
      min: 100000,
      max: 150000,
    },
    postedDate: "2026-01-14T10:00:00Z",
    applyUrl: "https://designflow.com/careers/uiux",
    source: "mock",
  },
  {
    id: "job_008",
    title: "DevOps Engineer - Frontend Tools",
    company: "InfraStream",
    location: "Denver, CO",
    locationType: "remote",
    jobType: "full-time",
    experienceLevel: "senior",
    description:
      "Build and maintain frontend infrastructure. You'll work on build tools, CI/CD pipelines, and developer experience. Strong experience with Webpack, Vite, or similar.",
    requirements: ["Webpack/Vite", "Node.js", "CI/CD", "Docker", "Bash"],
    salary: {
      currency: "USD",
      min: 130000,
      max: 180000,
    },
    postedDate: "2026-01-13T15:30:00Z",
    applyUrl: "https://infrastream.com/careers/devops",
    source: "mock",
  },
  {
    id: "job_009",
    title: "QA Automation Engineer",
    company: "QualityFirst",
    location: "Chicago, IL",
    locationType: "on-site",
    jobType: "full-time",
    experienceLevel: "mid",
    description:
      "Write automated tests for web applications. We use Cypress and Jest. You'll ensure our products are bug-free and performant.",
    requirements: ["Cypress", "Jest", "JavaScript", "Testing"],
    salary: {
      currency: "USD",
      min: 95000,
      max: 135000,
    },
    postedDate: "2026-01-12T09:45:00Z",
    applyUrl: "https://qualityfirst.com/careers/qa",
    source: "mock",
  },
  {
    id: "job_010",
    title: "Product Engineer",
    company: "TechProduct",
    location: "Remote",
    locationType: "remote",
    jobType: "full-time",
    experienceLevel: "mid",
    description:
      "We're looking for someone who cares about product. You'll work across frontend, backend, and product to build features users love.",
    requirements: ["React", "Node.js", "SQL", "Product thinking"],
    salary: {
      currency: "USD",
      min: 120000,
      max: 170000,
    },
    postedDate: "2026-01-11T12:00:00Z",
    applyUrl: "https://techproduct.com/careers/product",
    source: "mock",
  },
];

/**
 * Simulate API response with filter support
 */
export const filterMockJobs = (filters = {}) => {
  let results = [...mockJobs];

  if (filters.keyword) {
    const keyword = filters.keyword.toLowerCase();
    results = results.filter(
      (job) =>
        job.title.toLowerCase().includes(keyword) ||
        job.company.toLowerCase().includes(keyword) ||
        job.description.toLowerCase().includes(keyword) ||
        job.requirements.some((req) =>
          req.toLowerCase().includes(keyword)
        )
    );
  }

  if (filters.location) {
    if (filters.location === "remote") {
      results = results.filter((job) => job.locationType === "remote");
    } else {
      results = results.filter((job) =>
        job.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
  }

  if (filters.jobType) {
    results = results.filter((job) => job.jobType === filters.jobType);
  }

  if (filters.experienceLevel) {
    results = results.filter(
      (job) => job.experienceLevel === filters.experienceLevel
    );
  }

  return results;
};
