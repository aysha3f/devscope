import { useState } from 'react';
import { useFavorites } from '../hooks/useFavorites';
import { useFilters } from '../hooks/useFilters';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import JobDetailModal from '../components/JobDetailModal';
import EmptyState from '../components/EmptyState';
import JobGrid from '../components/JobGrid';
import styles from '../styles/FavoritesPage.module.css';

export default function FavoritesPage() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  
  const { favorites, isFavorited, toggleFavorite } = useFavorites();
  const { filters, updateFilter, resetFilters, getActiveFiltersCount } =
    useFilters();

  // Filter favorites based on search and filters
  const filteredFavorites = favorites.filter((job) => {
    if (
      searchKeyword &&
      !job.title.toLowerCase().includes(searchKeyword.toLowerCase()) &&
      !job.company.toLowerCase().includes(searchKeyword.toLowerCase())
    ) {
      return false;
    }

    if (filters.location && job.locationType !== filters.location) {
      return false;
    }

    if (filters.jobType && job.jobType !== filters.jobType) {
      return false;
    }

    if (
      filters.experienceLevel &&
      job.experienceLevel !== filters.experienceLevel
    ) {
      return false;
    }

    return true;
  });

  const activeFiltersCount = getActiveFiltersCount();

  return (
    <div className={styles.favoritesPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1>Saved Jobs</h1>
          <p>
            {favorites.length === 0
              ? 'You haven\'t saved any jobs yet'
              : `${favorites.length} job${favorites.length !== 1 ? 's' : ''} saved`}
          </p>
        </div>
      </section>

      {/* Main Content */}
      {favorites.length === 0 ? (
        <section className={styles.emptySection}>
          <div className="container">
            <EmptyState type="no-favorites" />
          </div>
        </section>
      ) : (
        <section className={styles.mainContent}>
          <div className="container">
            {/* Search Bar */}
            <SearchBar
              value={searchKeyword}
              onChange={setSearchKeyword}
              onSearch={() => {}}
            />

            <div className={styles.layoutWrapper}>
              {/* Sidebar Filters */}
              <aside className={styles.sidebar}>
                <FilterPanel
                  filters={filters}
                  onFilterChange={updateFilter}
                  onReset={resetFilters}
                  activeCount={activeFiltersCount}
                />
              </aside>

              {/* Job Listings */}
              <main className={styles.main}>
                {activeFiltersCount > 0 && (
                  <div className={styles.filterSummary}>
                    <p>
                      Showing {filteredFavorites.length} job
                      {filteredFavorites.length !== 1 ? 's' : ''} matching{' '}
                      {activeFiltersCount} filter
                      {activeFiltersCount !== 1 ? 's' : ''}
                    </p>
                    <button
                      onClick={resetFilters}
                      className={styles.clearButton}
                    >
                      Clear filters
                    </button>
                  </div>
                )}

                {filteredFavorites.length === 0 ? (
                  <EmptyState type="no-results" />
                ) : (
                  <JobGrid
                    jobs={filteredFavorites}
                    loading={false}
                    isFavoritedFn={isFavorited}
                    onFavorite={toggleFavorite}
                    onJobSelect={setSelectedJob}
                  />
                )}
              </main>
            </div>
          </div>
        </section>
      )}

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
