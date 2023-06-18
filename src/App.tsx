/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {QueryClientProvider} from 'react-query';
import {client} from './services/queries';
import {ImageGallery} from './modules/ImageGallery/ImageGallery';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <QueryClientProvider client={client}>
      <GestureHandlerRootView style={styles.gestureHandler}>
        <SafeAreaView style={backgroundStyle}>
          <ImageGallery />
        </SafeAreaView>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  gestureHandler: {flex: 1},
});

export default App;
