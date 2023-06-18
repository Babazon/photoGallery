import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import React from 'react';

export const ErrorContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface ErrorProps {
  message: string | undefined;
}

export const Error = ({message}: ErrorProps) => (
  <View>
    <Text>{message}</Text>
  </View>
);
