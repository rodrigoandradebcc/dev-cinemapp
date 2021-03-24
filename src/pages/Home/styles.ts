import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { MovieProps } from '.';

export const Container = styled.View`
  flex: 1;
  margin: 25px 20px;
`;

export const LogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LogoImg = styled.Image`
  margin-left: 8px;
`;

export const Title = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 12px;
  color: #3d3d3d;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;

export const ListMovies = styled(FlatList as new () => FlatList<MovieProps>)`
  margin-top: 16px;
  width: 100%;
  border-radius: 5px;
`;

export const Divider = styled.View`
  height: 8px;
`;
