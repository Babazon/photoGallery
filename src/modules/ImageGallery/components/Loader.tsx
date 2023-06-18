import {View, ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import React from 'react';

export const LoaderContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface LoaderProps {
  size: 'small' | 'large';
  color: string;
}

export const Loader = ({size, color}: LoaderProps) => (
  <View>
    <ActivityIndicator size={size} color={color} />
  </View>
);
