import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import logoImg from '../../assets/logo.png';
import logoFilm from '../../assets/logoFilm.png';
import Card from '../../components/Card';
import { useFavorites } from '../../context/FavoriteMovies';
import * as S from './styles';


interface MovieProps {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const FavoriteMovies: React.FC = () => {
  const { favoriteMoviesList } = useFavorites();

  return (
    <S.Container>
      <S.LogoContainer>
        <Image source={logoFilm}></Image>
        <S.LogoImg source={logoImg}></S.LogoImg>
        <S.TitleText> - Favoritos</S.TitleText>

      </S.LogoContainer>
      <S.Title>Bem vindo ao mundo espetacular do cinema</S.Title>

      <View style={{ flex: 1 }}>

        <S.ListMovies
          data={favoriteMoviesList}
          keyExtractor={(movie: { imdbID: string; }) => movie.imdbID}
          renderItem={(movieItem: MovieProps) => <Card movie={movieItem} />}
          ItemSeparatorComponent={() => <S.Divider />}
        />

      </View>
    </S.Container>
  );
};

export default FavoriteMovies;

