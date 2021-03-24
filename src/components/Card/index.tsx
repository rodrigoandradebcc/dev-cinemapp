import React, { memo, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import noImage from '../../assets/noPicture.jpg';
import { useFavorites } from '../../context/FavoriteMovies';
import FavoriteButton from '../FavoriteButton';
import * as S from './styles';

const Card = (item: any) => {
  const { favoriteMoviesList, favoriteMovie } = useFavorites();
  const { movie } = item;

  return (
    <S.Container key={movie.item.imdbID}>
      <S.MovieImage
        source={
          movie.item.Poster === 'N/A' ? noImage : { uri: movie.item.Poster }
        }
      />
      <S.NameYearContainer>
        <S.MovieInfoTitle>{movie.item.Title}</S.MovieInfoTitle>
        <S.YearButtonContainer>
          <S.YearText>{movie.item.Year}</S.YearText>
          <FavoriteButton
            favorited={favoriteMoviesList.some(
              favoritedMovie => favoritedMovie.imdbID === movie.item.imdbID,
            )}
            onPress={() => favoriteMovie(movie.item)}
          >
            <Icon name="heart" size={16} color={favoriteMoviesList.some(
              favoritedMovie => favoritedMovie.imdbID === movie.item.imdbID,
            ) ? "#FFFFFF" : '#EB5757'} />
          </FavoriteButton>
        </S.YearButtonContainer>
      </S.NameYearContainer>
    </S.Container>
  );
};

export default memo(Card);
