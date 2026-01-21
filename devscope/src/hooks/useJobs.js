import { useState, useEffect, useCallback } from 'react';
import { searchJobs } from '../api/jobsAPI.js';

/**
 * Custom hook for fetching and managing job data
 * Handles loading, error states, and caching
 */
export function useJobs(initialFilters = {}) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState(initialFilters);
  const [isFallback, setIsFallback] = useState(false);

  // Fetch jobs when filters change
  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await searchJobs(filters);
        setJobs(result.data || []);
        setIsFallback(result.isFallback || false);

        if (!result.success && result.error) {
          setError(result.error);
        }
      } catch (err) {
        setError(err.message || 'Failed to fetch jobs');
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [filters]);

  const updateFilters = useCallback((newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
  }, [initialFilters]);

  const refetch = useCallback(() => {
    setLoading(true);
    searchJobs(filters)
      .then((result) => {
        setJobs(result.data || []);
        setIsFallback(result.isFallback || false);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [filters]);

  return {
    jobs,
    loading,
    error,
    filters,
    updateFilters,
    resetFilters,
    refetch,
    isFallback,
  };
}
