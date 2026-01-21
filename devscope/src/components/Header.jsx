import { FiHeart, FiMenu, FiX } from 'react-icons/fi';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useState } from 'react';
import styles from '../styles/Header.module.css';

export default function Header({ isDarkMode, onThemeToggle, favoriteCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          {/* Logo */}
          <a href="/" className={styles.logo}>
            <span className={styles.logoIcon}>{'< />'}</span>
            <span>DevScope</span>
          </a>

          {/* Desktop Nav */}
          <nav className={`${styles.nav} ${styles.desktopNav}`}>
            <a href="/">Browse Jobs</a>
            <a href="/favorites" className={styles.favoritesLink}>
              <FiHeart size={18} />
              Favorites
              {favoriteCount > 0 && (
                <span className={styles.badge}>{favoriteCount}</span>
              )}
            </a>
          </nav>

          {/* Controls */}
          <div className={styles.controls}>
            <button
              onClick={onThemeToggle}
              className={styles.themeToggle}
              title="Toggle dark mode"
            >
              {isDarkMode ? <BsSun size={18} /> : <BsMoon size={18} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              className={styles.menuButton}
              onClick={() => setMenuOpen(!menuOpen)}
              title="Menu"
            >
              {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className={styles.mobileNav}>
            <a href="/" onClick={() => setMenuOpen(false)}>
              Browse Jobs
            </a>
            <a href="/favorites" onClick={() => setMenuOpen(false)}>
              Favorites ({favoriteCount})
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
