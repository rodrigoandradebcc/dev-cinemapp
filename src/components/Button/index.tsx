import React from 'react';

import { Container, ButtonText, Icon } from './styles';
import logoImg from '../../assets/search.png';
import { RectButtonProperties } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <Icon source={logoImg}></Icon>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
}

export default Button;
