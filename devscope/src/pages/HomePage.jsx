import { useState } from 'react';
import { useJobs } from '../hooks/useJobs';
import { useFavorites } from '../hooks/useFavorites';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import JobGrid from '../components/JobGrid';
import JobDetailModal from '../components/JobDetailModal';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  
  const { jobs, loading, error, filters, updateFilters, resetFilters, refetch } =
    useJobs();
  const { isFavorited, toggleFavorite } = useFavorites();

  const handleSearch = () => {
    updateFilters({ keyword: searchKeyword });
  };

  const handleFilterChange = (key, value) => {
    updateFilters({ [key]: value });
  };

  const activeFiltersCount = Object.values(filters).filter(
    (val) => val !== ''
  ).length;

  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1>Find Your Next Developer Role</h1>
          <p>Discover opportunities tailored to your skills and interests</p>
          <SearchBar
            value={searchKeyword}
            onChange={setSearchKeyword}
            onSearch={handleSearch}
          />
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.mainContent}>
        <div className="container">
          <div className={styles.layoutWrapper}>
            {/* Sidebar Filters */}
            <aside className={styles.sidebar}>
              <FilterPanel
                filters={filters}
                onFilterChange={handleFilterChange}
                onReset={resetFilters}
                activeCount={activeFiltersCount}
              />
            </aside>

            {/* Job Listings */}
            <main className={styles.main}>
              {activeFiltersCount > 0 && (
                <div className={styles.filterSummary}>
                  <p>
                    Showing jobs matching {activeFiltersCount} filter
                    {activeFiltersCount !== 1 ? 's' : ''}
                  </p>
                  <button onClick={resetFilters} className={styles.clearButton}>
                    Clear filters
                  </button>
                </div>
              )}

              <JobGrid
                jobs={jobs}
                loading={loading}
                error={error}
                isFavoritedFn={isFavorited}
                onFavorite={toggleFavorite}
                onJobSelect={setSelectedJob}
                onRetry={refetch}
              />
            </main>
          </div>
        </div>
      </section>

      {/* Job Detail Modal */}
      {selectedJob && (
        <JobDetailModal
          job={selectedJob}
          isFavorited={isFavorited(selectedJob.id)}
          onFavorite={toggleFavorite}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </div>
  );
}
