import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Text, TextInput } from 'react-native-paper';

import { Icons } from '../../../assets';
// Components
import { BackButton, Spacer, StyledText } from '../../../components';
import { BackgroundLayout } from '../../../layouts';
import { RouteNavigators, Routes } from '../../../navigation';
// Utils
import { theme } from '../../../theme';

// Fetches the translation for this particular page
const getTransKey = (key) => `authentication.signUp.${key}`;

const inputTheme = {
  colors: {
    text: theme.colors.white,
    primary: theme.colors.white,
    placeholder: theme.colors.white,
    background: 'transparent',
  },
};

export const SignUp = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const { width: windowWidth } = useWindowDimensions();

  const goBack = () => {
    navigation.goBack();
  };

  const onSignupPress = () => {
    navigation.navigate(RouteNavigators.WithSafeAreaNavigator);
  };

  return (
    <BackgroundLayout>
      <KeyboardAwareScrollView
        scrollEnabled={true}
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <BackButton onPress={goBack} />
        <View style={styles.mainContainer}>
          <Icons.LiviinLogo />
          <StyledText.H4
            color={theme.colors.background}
            translationKey={getTransKey('heading')}
          />
        </View>
        <Spacer.sm />
        <View style={styles.inputContainer}>
          <TextInput
            mode="outlined"
            label="Full Name"
            placeholder="Type your full name"
            left={<TextInput.Icon color={theme.colors.white} name="account" />}
            theme={inputTheme}
            style={styles.input}
            outlineColor={theme.colors.white}
          />
          <TextInput
            mode="outlined"
            label="Email"
            placeholder="Type your email"
            left={<TextInput.Icon color={theme.colors.white} name="email" />}
            theme={inputTheme}
            style={styles.input}
            outlineColor={theme.colors.white}
          />
          <TextInput
            mode="outlined"
            label="Password"
            placeholder="Type your password"
            secureTextEntry={!passwordVisible}
            left={<TextInput.Icon color={theme.colors.white} name="lock" />}
            right={
              <TextInput.Icon
                color={theme.colors.white}
                name={passwordVisible ? 'eye-off' : 'eye'}
                onPress={() => setPasswordVisible(!passwordVisible)}
              />
            }
            theme={inputTheme}
            style={styles.input}
            outlineColor={theme.colors.white}
          />
        </View>
        <Spacer.md />
        <Button
          mode="contained"
          style={[styles.signupButton, { width: windowWidth - 32, height: 40 }]}
          onPress={onSignupPress}
          labelStyle={styles.label}
          contentStyle={styles.buttonContent}
        >
          {'Sign Up'}
        </Button>
      </KeyboardAwareScrollView>
    </BackgroundLayout>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
  },
  underline: {
    textDecorationLine: 'underline',
    color: theme.colors.white,
  },
  loginText: {
    fontSize: 16,
    color: theme.colors.white,
  },
  signupButton: {
    borderRadius: 22,
    backgroundColor: theme.colors.white,
  },
  buttonContent: {
    height: 40,
  },
  label: {
    color: '#4E5C4F',
  },
  footerContainer: {
    marginBottom: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerButton: {
    borderRadius: 22,
    backgroundColor: theme.colors.white,
  },
  inputContainer: {
    width: '100%',
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
});