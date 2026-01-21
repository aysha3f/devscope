import { mockJobs, filterMockJobs } from './mockData.js';

/**
 * Normalize JSearch API response to our app format
 */
function normalizeJobData(apiJob) {
  return {
    id: apiJob.job_id,
    title: apiJob.job_title,
    company: apiJob.employer_name,
    location: apiJob.job_location || 'Location not specified',
    locationType: apiJob.job_is_remote ? 'remote' : 'on-site',
    jobType: apiJob.job_employment_type || 'full-time',
    experienceLevel: apiJob.job_required_experience?.required_experience_in_years
      ? 'mid'
      : 'entry-level',
    description: apiJob.job_description,
    requirements: apiJob.job_required_skills || [],
    salary: {
      currency: apiJob.job_salary_currency || 'USD',
      min: apiJob.job_salary_min || 0,
      max: apiJob.job_salary_max || 0,
    },
    postedDate: apiJob.job_posted_at_datetime_utc,
    applyUrl: apiJob.job_apply_link,
    source: 'jsearch',
  };
}

/**
 * Search jobs via API or mock data
 */
export async function searchJobs(filters = {}) {
  const useMockAPI = import.meta.env.VITE_USE_MOCK_API === 'true';
  
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  try {
    if (useMockAPI) {
      const results = filterMockJobs(filters);
      return {
        success: true,
        data: results,
        total: results.length,
      };
    }

    // Real API call
    const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;
    const apiHost = import.meta.env.VITE_RAPIDAPI_HOST;

    if (!apiKey || apiKey === 'your_rapidapi_key_here') {
      console.warn('API key not configured. Falling back to mock data.');
      const results = filterMockJobs(filters);
      return {
        success: true,
        data: results,
        total: results.length,
      };
    }

    // Build query
    let query = filters.keyword || 'developer';
    if (filters.location && filters.location !== 'remote') {
      query += ` in ${filters.location}`;
    }

    const params = new URLSearchParams({
      query,
      date_posted: 'month',
      page: filters.page || 1,
      num_pages: 1,
    });

    const response = await fetch(
      `https://jsearch.p.rapidapi.com/search?${params}`,
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': apiHost,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const result = await response.json();

    // Normalize and filter
    let jobs = result.data?.map(normalizeJobData) || [];

    // Apply client-side filters
    if (filters.jobType) {
      jobs = jobs.filter((job) => job.jobType === filters.jobType);
    }
    if (filters.experienceLevel) {
      jobs = jobs.filter(
        (job) => job.experienceLevel === filters.experienceLevel
      );
    }

    return {
      success: true,
      data: jobs,
      total: jobs.length,
    };
  } catch (error) {
    console.error('Error fetching jobs:', error);
    
    // Fallback to mock data on error
    const results = filterMockJobs(filters);
    return {
      success: false,
      error: error.message,
      data: results,
      total: results.length,
      isFallback: true,
    };
  }
}

/**
 * Get a single job by ID
 */
export function getJobById(jobId) {
  return mockJobs.find((job) => job.id === jobId);
}
