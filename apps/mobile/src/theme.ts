import { configureFonts, DefaultTheme } from 'react-native-paper';

export const theme: ReactNativePaper.Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4E5C4F',
    accent: '#D2D8BE',
    background: '#FFFFFF',
  },
  fonts: configureFonts({
    ios: {
      regular: {
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'Plus Jakarta Sans-Medium',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'Plus Jakarta Sans-Light',
        fontWeight: 'normal',
      },
      thin: {
        fontFamily: 'Plus Jakarta Sans-Light',
        fontWeight: 'normal',
      },
    },
    android: {
      regular: {
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'Plus Jakarta Sans-Medium',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'Plus Jakarta Sans-Light',
        fontWeight: 'normal',
      },
      thin: {
        fontFamily: 'Plus Jakarta Sans-Light',
        fontWeight: 'normal',
      },
    }
  })
}
