import React, { useCallback, useState } from 'react';
import { Alert, Image, Keyboard } from 'react-native';
import logoImg from '../../assets/logo.png';
import logoFilm from '../../assets/logoFilm.png';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Search from '../../components/Search';
import api from '../../services/api';
import * as S from './styles';


export interface MovieProps {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
}

export interface RequestMovies {
  Search: MovieProps[];
  Response: string;
}

const Home: React.FC = () => {
  const [movieList, setMovieList] = useState<MovieProps[]>([]);
  const [searchMovie, setSearchMovie] = useState('');
  // const [loading, setLoading] = useState(false);

  const handleLoadingApiIMDB = async () => {
    try {
      if (searchMovie.length === 0) {
        throw new Error('Digite o nome do filme');
      }
      const { data } = await api.get(`/?apikey=925eba28&s=${searchMovie.trim()}`);

      if (data.Response === 'False') {
        throw new Error('Suas pesquisa não encontrou resultados!');
      }
      console.log(data.Search)
      setMovieList(data.Search);

    } catch (error) {

      const message = error.message ? ['Atenção', error.message]
        : ['Erro ao procurar o filme', 'Por favor verifique tente mais tarde.'];


      Alert.alert(
        message[0],
        message[1],
      );
    }
  };

  const handleSubmit = useCallback(() => {
    Keyboard.dismiss();
    handleLoadingApiIMDB();
  }, [handleLoadingApiIMDB]);

  return (
    <S.Container>

      <S.LogoContainer>
        <Image source={logoFilm}></Image>
        <S.LogoImg source={logoImg}></S.LogoImg>
      </S.LogoContainer>


      <S.Title>Bem vindo ao mundo espetacular do cinema</S.Title>

      <S.SearchContainer>
        <Search
          name="procurar"
          placeholder="Digite o nome do filme"
          value={searchMovie}
          onChangeText={setSearchMovie}
        ></Search>
        <Button onPress={handleSubmit}>Procurar</Button>
      </S.SearchContainer>

      <S.ListMovies
        data={movieList}
        keyExtractor={(movie) => movie.imdbID}
        renderItem={(movieItem) => <Card movie={movieItem} />}
        ItemSeparatorComponent={() => <S.Divider />}
      />
    </S.Container>
  );
}

export default Home;
