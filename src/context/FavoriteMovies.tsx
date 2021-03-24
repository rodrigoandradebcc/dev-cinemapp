import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface MoviesProps {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface IFavoritesContext {
  favoriteMoviesList: MoviesProps[];
  favoriteMovie: (favoritedMovie: MoviesProps) => Promise<void>;
}

const FavoriteContext = createContext({} as IFavoritesContext);

export const FavoriteListProvider: React.FC = ({ children }: any) => {
  const [favoriteMoviesList, setFavoriteMoviesList] = useState<MoviesProps[]>(
    [],
  );

  useEffect(() => {
    async function loadFavorites() {
      const savedFavorites = await AsyncStorage.getItem(
        '@MovieList:FavoritedMovies',
      );

      if (savedFavorites) {
        setFavoriteMoviesList([...JSON.parse(savedFavorites)]);
      }
    }
    loadFavorites();
  }, [setFavoriteMoviesList]);

  const favoriteMovie = useCallback(
    async (favoritedMovie: MoviesProps) => {
      const findMovie = favoriteMoviesList.find(
        movie => movie.imdbID === favoritedMovie.imdbID,
      );

      if (findMovie) {
        const index = favoriteMoviesList.findIndex(m => m.imdbID === favoritedMovie.imdbID)
        favoriteMoviesList.splice(index, 1);
        setFavoriteMoviesList([...favoriteMoviesList])

      } else {
        setFavoriteMoviesList([...favoriteMoviesList, favoritedMovie]);
      }

      await AsyncStorage.setItem(
        '@MovieList:FavoritedMovies',
        JSON.stringify(favoriteMoviesList),
      );
    },
    [favoriteMoviesList],
  );

  return (
    <FavoriteContext.Provider value={{ favoriteMoviesList, favoriteMovie }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export function useFavorites(): IFavoritesContext {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error('useFavorite must be used with an FavoriteProvider');
  }

  return context;
}
