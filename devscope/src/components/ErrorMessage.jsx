import { FiAlertCircle } from 'react-icons/fi';
import styles from '../styles/ErrorMessage.module.css';

export default function ErrorMessage({ error, onRetry }) {
  return (
    <div className={styles.error}>
      <FiAlertCircle className={styles.icon} />
      <div>
        <h3>Something went wrong</h3>
        <p>{error || 'Failed to load jobs. Please try again.'}</p>
      </div>
      {onRetry && (
        <button onClick={onRetry} className={styles.retryButton}>
          Retry
        </button>
      )}
    </div>
  );
}
