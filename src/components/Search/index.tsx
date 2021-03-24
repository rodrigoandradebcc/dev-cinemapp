import React from 'react';

import { Container, TextInput } from './styles';
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  name: string;
}

const Search: React.FC<InputProps> = ({ name, ...rest }) => {
  return (
    <Container>
      <TextInput {...rest}></TextInput>
    </Container>
  );
}

export default Search;
