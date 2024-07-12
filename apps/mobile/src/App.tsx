/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Text, StatusBar, TouchableOpacity, View } from 'react-native';
import { BackgroundLayout } from './layouts';
import {
  Headline,
  Paragraph,
  Provider as PaperProvider,
  Subheading
} from 'react-native-paper';
import { theme } from './theme';
import { RightArrow } from './assets/icons/RightArrow';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './navigation/Navigator';
import { Landing } from './screens/Landing';




export const App = () => {
  return (
    <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor={theme.colors.accent} />
        <PaperProvider theme={theme}>
          <Navigation />
        </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
