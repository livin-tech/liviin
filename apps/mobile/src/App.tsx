/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { StatusBar } from 'react-native';
import { I18nextProvider } from 'react-i18next';
import { Provider as PaperProvider } from 'react-native-paper';

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
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.accent}
      />
      <I18nextProvider i18n={i18n}>
        <PaperProvider theme={theme}>
          <AppNavigator />
        </PaperProvider>
      </I18nextProvider>
    </>
  );
};

export default App;
