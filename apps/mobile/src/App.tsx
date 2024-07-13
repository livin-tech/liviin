/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { I18nextProvider } from 'react-i18next';
import { Navigation } from './navigation/Navigator';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

// Utils
import i18n from './i18n';
import { theme } from './theme';

/**
 * To change the language programmatically...
 */
// i18n.changeLanguage('en'); /* English */
i18n.changeLanguage('es'); /* Español */

export const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.accent}
      />
      <I18nextProvider i18n={i18n}>
        <PaperProvider theme={theme}>
          <SafeAreaView style={styles.safeArea}>
            <Navigation />
          </SafeAreaView>
        </PaperProvider>
      </I18nextProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
