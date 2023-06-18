/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  useColorScheme
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { QueryClientProvider } from 'react-query';
import { ImageGallery } from './modules/ImageGallery/ImageGallery';
import { client } from './services/queries';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <QueryClientProvider client={client}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={backgroundStyle}>
          <ImageGallery />
        </SafeAreaView>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}

export default App;
