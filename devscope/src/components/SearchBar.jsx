import { FiSearch } from 'react-icons/fi';
import styles from '../styles/SearchBar.module.css';

export default function SearchBar({ value, onChange, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.();
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <FiSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search jobs, companies, skills..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={styles.input}
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        Search
      </button>
    </form>
  );
}
