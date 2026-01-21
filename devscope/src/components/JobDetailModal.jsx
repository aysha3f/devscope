import { FiX, FiMapPin, FiBriefcase, FiExternalLink } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import styles from '../styles/JobDetailModal.module.css';

export default function JobDetailModal({
  job,
  isFavorited,
  onFavorite,
  onClose,
}) {
  if (!job) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} title="Close">
          <FiX size={24} />
        </button>

        <div className={styles.header}>
          <div>
            <h2>{job.title}</h2>
            <p className={styles.company}>{job.company}</p>
          </div>
          <button
            className={styles.favoriteButton}
            onClick={() => onFavorite(job)}
            title={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorited ? <FaHeart size={24} /> : <FiHeart size={24} />}
          </button>
        </div>

        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <FiMapPin size={16} />
            <span>{job.location}</span>
          </div>
          <div className={styles.metaItem}>
            <FiBriefcase size={16} />
            <span>{job.jobType}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.levelBadge}>{job.experienceLevel}</span>
          </div>
        </div>

        <div className={styles.content}>
          <section>
            <h3>About the Role</h3>
            <p>{job.description}</p>
          </section>

          {job.requirements && job.requirements.length > 0 && (
            <section>
              <h3>Requirements</h3>
              <ul className={styles.requirements}>
                {job.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </section>
          )}

          {job.salary?.max > 0 && (
            <section>
              <h3>Compensation</h3>
              <p className={styles.salary}>
                ${(job.salary.min / 1000).toFixed(0)}k - $
                {(job.salary.max / 1000).toFixed(0)}k {job.salary.currency}
              </p>
            </section>
          )}
        </div>

        <div className={styles.footer}>
          <a
            href={job.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.applyButton}
          >
            Apply Now <FiExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
