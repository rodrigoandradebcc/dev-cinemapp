import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 32%;
  height: 50px;
  background: #eb5757;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-family: 'Poppins-Bold';
  font-size: 16px;
`;

export const Icon = styled.Image`
  margin-right: 4px;
  margin-bottom: 2px;
  width: 16px;
  height: 16px;
`;
