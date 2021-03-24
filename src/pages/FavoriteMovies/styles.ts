import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { MovieProps } from '../Home';


export const LogoContainer = styled.SafeAreaView`
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

export const Container = styled.View`
  flex: 1;
  margin: 25px 20px;
`;

export const Header = styled.View`
  width: 100%;
`;

export const TitleText = styled.Text`
  margin-top: 6px;
  font-size: 24px;
  color: #3d3d3d;
  font-family: 'Poppins-Medium';
`;

export const ListMovies = styled(FlatList as new () => FlatList<MovieProps>)`
  margin-top: 24px;
  width: 100%;
  border-radius: 5px;
  flex: 1;
`;

export const Divider = styled.View`
  height: 8px;
`;
