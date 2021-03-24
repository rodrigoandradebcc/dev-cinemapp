import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  /* padding: 4px; */
  border-radius: 8px;
  flex-direction: row;
  margin-bottom: 4px;
  height: 140px;
  justify-content: space-between;
`;

export const MovieInfoTitle = styled.Text`
  margin-top: 8px;
  font-size: 12px;
  color: #3d3d3d;
  width: 100%;
  font-family: 'Poppins-Bold';
`;

export const MovieImage = styled.Image`
  width: 78px;
  height: 120px;
  margin: 8px 0 8px 8px;
  border-radius: 10px;
`;

export const NameYearContainer = styled.View`
  flex-direction: column;
  margin-left: 8px;
  margin-right: 8px;
  flex: 1;
  justify-content: space-between;

  height: 140px;
`;

export const YearText = styled.Text`
  font-size: 16px;
  color: #3d3d3d;

  font-family: 'Poppins-Bold';
`;

interface FavoriteButtonProps {
  favorited: boolean;
}

export const MovieFavoriteButton = styled.TouchableOpacity<FavoriteButtonProps>`
  background: ${(props: { favorited: any }) =>
    props.favorited ? '#EB5757' : '#FDECEF'};
  height: 28px;
  width: 28px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const YearButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 8px;
`;
