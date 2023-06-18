import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import React from 'react';
import {Maybe} from '../../../constants/types';

export const ErrorContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface ErrorProps {
  message: Maybe<string>;
}

export const Error = ({message}: ErrorProps) => (
  <View>
    <Text>{message}</Text>
  </View>
);
