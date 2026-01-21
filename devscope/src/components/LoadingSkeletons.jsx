import styles from '../styles/LoadingSkeletons.module.css';

export default function LoadingSkeletons({ count = 6 }) {
  return (
    <div className={styles.skeletonGrid}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={styles.skeleton}>
          <div className={styles.skeletonHeader}>
            <div className={styles.skeletonTitle} />
            <div className={styles.skeletonButton} />
          </div>
          <div className={styles.skeletonMeta} />
          <div className={styles.skeletonBadges}>
            <div className={styles.skeletonBadge} />
            <div className={styles.skeletonBadge} />
          </div>
          <div className={styles.skeletonText} />
          <div className={styles.skeletonText} style={{ width: '80%' }} />
        </div>
      ))}
    </div>
  );
}
