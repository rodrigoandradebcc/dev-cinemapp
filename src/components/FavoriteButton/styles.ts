import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface FavoriteButtonProps {
  favorited: boolean;
}

export const Container = styled(RectButton)<FavoriteButtonProps>`
  background: ${(props: { favorited: any }) =>
    props.favorited ? '#EB5757' : '#FDECEF'};
  height: 28px;
  width: 28px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;
