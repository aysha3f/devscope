import { useState, useEffect, useCallback } from 'react';

const FAVORITES_KEY = 'devscope_favorites';

/**
 * Custom hook for managing favorite jobs with localStorage persistence
 */
export function useFavorites() {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
      } catch (error) {
        console.error('Error saving favorites:', error);
      }
    }
  }, [favorites, isLoading]);

  const addFavorite = useCallback((job) => {
    setFavorites((prev) => {
      // Check if already favorited
      if (prev.some((fav) => fav.id === job.id)) {
        return prev;
      }
      return [...prev, job];
    });
  }, []);

  const removeFavorite = useCallback((jobId) => {
    setFavorites((prev) => prev.filter((job) => job.id !== jobId));
  }, []);

  const toggleFavorite = useCallback((job) => {
    if (isFavorited(job.id)) {
      removeFavorite(job.id);
    } else {
      addFavorite(job);
    }
  }, []);

  const isFavorited = useCallback(
    (jobId) => favorites.some((job) => job.id === jobId),
    [favorites]
  );

  const clearAllFavorites = useCallback(() => {
    setFavorites([]);
  }, []);

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorited,
    clearAllFavorites,
    isLoading,
  };
}
