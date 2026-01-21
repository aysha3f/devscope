import { useState, useCallback } from 'react';

/**
 * Custom hook for managing job search and filter state
 */
export function useFilters(initialFilters = {}) {
  const [filters, setFilters] = useState({
    keyword: '',
    location: '',
    jobType: '',
    experienceLevel: '',
    ...initialFilters,
  });

  const updateFilter = useCallback((key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const updateMultipleFilters = useCallback((newFilters) => {
    setFilters((prev) => ({
      ...prev,
      ...newFilters,
    }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters({
      keyword: '',
      location: '',
      jobType: '',
      experienceLevel: '',
    });
  }, []);

  const getActiveFiltersCount = useCallback(() => {
    return Object.values(filters).filter((val) => val !== '').length;
  }, [filters]);

  return {
    filters,
    updateFilter,
    updateMultipleFilters,
    resetFilters,
    getActiveFiltersCount,
  };
}
