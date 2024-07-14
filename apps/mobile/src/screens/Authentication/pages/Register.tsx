import React from 'react';
import { View, StyleSheet } from 'react-native';

// Utils
import { theme } from '../../../theme';
import { Icons } from '../../../assets';
import { BackgroundLayout } from '../../../layouts';
import {
  Spacer,
  StyledText,
  BackButton,
  OutlinedButton,
  CenterContainer,
} from '../../../components';
import { RouteNavigators } from '../../../navigation';

// Fetches the translation for this particular page
const getTransKey = (key) => `authentication.register.${key}`;

export const Register = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };

  const registerWithApple = () => {
    navigation.navigate(RouteNavigators.WithSafeAreaNavigator);
  };

  const registerWithGoogle = () => {
    navigation.navigate(RouteNavigators.WithSafeAreaNavigator);
  };

  const registerWithEmail = () => {
    navigation.navigate(RouteNavigators.WithSafeAreaNavigator);
  };

  return (
    <BackgroundLayout>
      <BackButton onPress={goBack} />
      <View style={styles.mainContainer}>
        <CenterContainer>
          <Spacer.md />
          <Icons.LiviinLogo />
          <StyledText.H4
            color={theme.colors.background}
            translationKey={getTransKey('heading')}
          />
          <Spacer.md />
          <OutlinedButton
            onPress={registerWithApple}
            color={theme.colors.background}
            svgIconLeft={<Icons.AppleLogo />}
            translationKey={getTransKey('continueWithApple')}
          />
          <Spacer.sm />
          <OutlinedButton
            onPress={registerWithGoogle}
            color={theme.colors.background}
            svgIconLeft={<Icons.GoogleLogo />}
            translationKey={getTransKey('continueWithGoogle')}
          />
          <Spacer.sm />
          <OutlinedButton
            onPress={registerWithEmail}
            svgIconLeft={<Icons.Email />}
            color={theme.colors.background}
            translationKey={getTransKey('continueWithEmail')}
          />
        </CenterContainer>
      </View>
    </BackgroundLayout>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 100,
  },
  textStyle: {
    color: 'white',
  },
});
