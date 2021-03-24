import React, { ReactNode } from 'react';

import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: ReactNode;
  favorited?: boolean;
}

const FavoriteButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default FavoriteButton;
