/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { StyleSheet, Text, StatusBar } from 'react-native';
import { BackgroundLayout } from './layouts';
import { PaperProvider } from 'react-native-paper';
import { ThemeProp } from 'react-native-paper/src/types';

const theme: ThemeProp = {
  colors: {
    primary: '#4E5C4F',
    secondary: '#777E5C',
    accent: '#D2D8BE',
    background: '#FFFFFF'
  }
}


export const App = () => {
  return (
    <PaperProvider theme={theme}>
      {/* <SafeAreaView
        style={{
          flex: 1,
        }}
      > */}
        <StatusBar barStyle="light-content" backgroundColor="#C7C2AC" />
        <BackgroundLayout>
          <Text style={{color: 'white', fontSize: 32}}>Hello World</Text>
          <Text style={{color: 'white', fontSize: 32, fontFamily: 'Plus Jakarta Sans'}}>Hello World</Text>
          <Text style={{color: 'white', fontSize: 32, fontFamily: 'Baskervville'}}>Hello World</Text>
        </BackgroundLayout>
      {/* </SafeAreaView> */}
    </PaperProvider>
  );
};

export default App;
