import React, { useState } from 'react';
import { Button, Checkbox, Text } from 'react-native-paper';
import { View, StyleSheet, Linking, TouchableOpacity } from 'react-native';

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
import { RouteNavigators, Routes } from '../../../navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// Fetches the translation for this particular page
const getTransKey = (key) => `authentication.register.${key}`;

export const Register = ({ navigation }) => {
  const [checked, setChecked] = useState(false);

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

  const handleLoginPress = () => {
    navigation.navigate(Routes.Login);
  };

  const handleLinkPress = () => {
    Linking.openURL('https://your-terms-and-conditions-url.com');
  };

  const onPressFaq = () => {};

  return (
    <BackgroundLayout>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
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
            <Spacer.sm />
            <View style={styles.container}>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.text}>
                I accept{' '}
                <Text style={styles.underline} onPress={handleLinkPress}>
                  Terms & Conditions
                </Text>
              </Text>
            </View>
            <Spacer.xl />
            <TouchableOpacity onPress={handleLoginPress}>
              <Text style={styles.loginText}>
                Already have an account?{' '}
                <Text style={styles.underline}>Login</Text>
              </Text>
            </TouchableOpacity>
            <Spacer.md />
            <Button
              mode="contained"
              onPress={onPressFaq}
              style={styles.button}
              labelStyle={styles.label}
              contentStyle={styles.buttonContent}
            >
              {'FAQ'}
            </Button>
          </CenterContainer>
        </View>
      </KeyboardAwareScrollView>
    </BackgroundLayout>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
  },
  textStyle: {
    color: 'white',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
  underline: {
    textDecorationLine: 'underline',
    color: 'white',
  },
  loginText: {
    fontSize: 16,
    color: 'white',
  },
  button: {
    borderRadius: 22,
    backgroundColor: 'white',
  },
  buttonContent: {
    height: 40,
  },
  label: {
    color: '#4E5C4F',
  },
});
