/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';

// Utils
import i18n from './i18n';
import { theme } from './theme';
import { AppNavigator } from './navigation';

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
            <AppNavigator />
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
