/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { StyleSheet, Text, StatusBar } from 'react-native';
import { BackgroundLayout } from '../layouts';

export const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
