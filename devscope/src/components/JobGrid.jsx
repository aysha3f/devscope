import styles from '../styles/JobGrid.module.css';
import JobCard from './JobCard';
import LoadingSkeletons from './LoadingSkeletons';
import ErrorMessage from './ErrorMessage';
import EmptyState from './EmptyState';

export default function JobGrid({
  jobs,
  loading,
  error,
  isFavoritedFn,
  onFavorite,
  onJobSelect,
  onRetry,
}) {
  if (loading) {
    return <LoadingSkeletons count={6} />;
  }

  if (error) {
    return <ErrorMessage error={error} onRetry={onRetry} />;
  }

  if (!jobs || jobs.length === 0) {
    return <EmptyState type="no-results" />;
  }

  return (
    <div className={styles.grid}>
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          isFavorited={isFavoritedFn(job.id)}
          onFavorite={onFavorite}
          onClick={() => onJobSelect(job)}
        />
      ))}
    </div>
  );
}
