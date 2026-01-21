import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import { useFavorites } from './hooks/useFavorites';
import './styles/index.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { favorites } = useFavorites();

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('devscope_theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const handleThemeToggle = () => {
    setIsDarkMode((prev) => {
      const newValue = !prev;
      if (newValue) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('devscope_theme', 'dark');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('devscope_theme', 'light');
      }
      return newValue;
    });
  };

  return (
    <Router>
      <div className="app">
        <Header
          isDarkMode={isDarkMode}
          onThemeToggle={handleThemeToggle}
          favoriteCount={favorites.length}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
