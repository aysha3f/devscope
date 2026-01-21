import { FiSearch, FiBookmark } from 'react-icons/fi';
import styles from '../styles/EmptyState.module.css';

export default function EmptyState({ type = 'no-results' }) {
  const states = {
    'no-results': {
      icon: <FiSearch />,
      title: 'No jobs found',
      description: 'Try adjusting your filters or search term.',
      action: null,
    },
    'no-favorites': {
      icon: <FiBookmark />,
      title: 'No saved jobs yet',
      description: 'Start exploring and save jobs you like!',
      action: { text: 'Browse Jobs', link: '/' },
    },
  };

  const state = states[type] || states['no-results'];

  return (
    <div className={styles.emptyState}>
      <div className={styles.icon}>{state.icon}</div>
      <h3>{state.title}</h3>
      <p>{state.description}</p>
      {state.action && (
        <a href={state.action.link} className={styles.actionButton}>
          {state.action.text}
        </a>
      )}
    </div>
  );
}
