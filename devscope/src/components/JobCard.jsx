import { FiHeart, FiMapPin, FiBriefcase } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import styles from '../styles/JobCard.module.css';

export default function JobCard({
  job,
  isFavorited,
  onFavorite,
  onClick,
}) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays}d ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <article className={styles.card} onClick={onClick}>
      <div className={styles.cardHeader}>
        <div className={styles.titleSection}>
          <h3 className={styles.title}>{job.title}</h3>
          <p className={styles.company}>{job.company}</p>
        </div>
        <button
          className={styles.favoriteButton}
          onClick={(e) => {
            e.stopPropagation();
            onFavorite(job);
          }}
          title={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorited ? (
            <FaHeart className={styles.favoriteIcon} />
          ) : (
            <FiHeart className={styles.favoriteIcon} />
          )}
        </button>
      </div>

      <div className={styles.meta}>
        <div className={styles.metaItem}>
          <FiMapPin size={14} />
          <span>{job.location}</span>
        </div>
        <div className={styles.metaItem}>
          <FiBriefcase size={14} />
          <span>{job.jobType}</span>
        </div>
        <span className={styles.date}>{formatDate(job.postedDate)}</span>
      </div>

      <div className={styles.badges}>
        <span className={styles.badge}>{job.experienceLevel}</span>
        <span className={styles.badge}>{job.locationType}</span>
      </div>

      {job.salary?.max > 0 && (
        <p className={styles.salary}>
          ${(job.salary.min / 1000).toFixed(0)}k - ${(job.salary.max / 1000).toFixed(0)}k
        </p>
      )}

      <p className={styles.description}>
        {job.description.substring(0, 120)}...
      </p>

      <button className={styles.viewButton}>View Details →</button>
    </article>
  );
}
