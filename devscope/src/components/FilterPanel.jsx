import styles from '../styles/FilterPanel.module.css';

const FILTER_OPTIONS = {
  location: [
    { value: '', label: 'All Locations' },
    { value: 'remote', label: 'Remote' },
    { value: 'on-site', label: 'On-Site' },
    { value: 'hybrid', label: 'Hybrid' },
  ],
  jobType: [
    { value: '', label: 'All Types' },
    { value: 'full-time', label: 'Full-Time' },
    { value: 'internship', label: 'Internship' },
    { value: 'contract', label: 'Contract' },
  ],
  experienceLevel: [
    { value: '', label: 'All Levels' },
    { value: 'entry-level', label: 'Entry-Level' },
    { value: 'mid', label: 'Mid-Level' },
    { value: 'senior', label: 'Senior' },
  ],
};

export default function FilterPanel({
  filters,
  onFilterChange,
  onReset,
  activeCount,
}) {
  return (
    <aside className={styles.filterPanel}>
      <div className={styles.filterHeader}>
        <h3>Filters</h3>
        {activeCount > 0 && (
          <button onClick={onReset} className={styles.resetButton}>
            Reset
          </button>
        )}
      </div>

      {/* Location Filter */}
      <div className={styles.filterGroup}>
        <label htmlFor="location" className={styles.label}>
          Location
        </label>
        <select
          id="location"
          value={filters.location}
          onChange={(e) => onFilterChange('location', e.target.value)}
          className={styles.select}
        >
          {FILTER_OPTIONS.location.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Job Type Filter */}
      <div className={styles.filterGroup}>
        <label htmlFor="jobType" className={styles.label}>
          Job Type
        </label>
        <select
          id="jobType"
          value={filters.jobType}
          onChange={(e) => onFilterChange('jobType', e.target.value)}
          className={styles.select}
        >
          {FILTER_OPTIONS.jobType.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Experience Level Filter */}
      <div className={styles.filterGroup}>
        <label htmlFor="experienceLevel" className={styles.label}>
          Experience Level
        </label>
        <select
          id="experienceLevel"
          value={filters.experienceLevel}
          onChange={(e) => onFilterChange('experienceLevel', e.target.value)}
          className={styles.select}
        >
          {FILTER_OPTIONS.experienceLevel.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Active Filters Display */}
      {activeCount > 0 && (
        <div className={styles.activeFilters}>
          <p className={styles.activeCount}>
            {activeCount} filter{activeCount !== 1 ? 's' : ''} active
          </p>
        </div>
      )}
    </aside>
  );
}
