import React, { useState } from 'react';
import { Button, Text, TextInput } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';

// Utils
import { theme } from '../../../theme';
import { Icons } from '../../../assets';
import { BackgroundLayout } from '../../../layouts';
import { RouteNavigators, Routes } from '../../../navigation';

// Components
import { Spacer, StyledText, BackButton } from '../../../components';

// Fetches the translation for this particular page
const getTransKey = (key) => `authentication.login.${key}`;

const inputTheme = {
  colors: {
    text: theme.colors.white,
    primary: theme.colors.white,
    placeholder: theme.colors.white,
    background: 'transparent',
  },
};

export const Login = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const { width: windowWidth } = useWindowDimensions();

  const goBack = () => {
    navigation.goBack();
  };

  const onRegisterPress = () => {
    navigation.navigate(Routes.Register);
  };

  const onForgotPassword = () => {
    navigation.navigate(Routes.ForgotPassword);
  };

  const onLoginPress = () => {
    navigation.navigate(RouteNavigators.WithSafeAreaNavigator);
  };

  const onPressFaq = () => {};

  const onPressHelp = () => {};

  return (
    <BackgroundLayout>
      <KeyboardAwareScrollView
        scrollEnabled={false}
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
        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity onPress={onForgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <Spacer.md />
        <Button
          mode="contained"
          style={[styles.loginButton, { width: windowWidth - 32, height: 40 }]}
          onPress={onLoginPress}
          labelStyle={styles.label}
          contentStyle={styles.buttonContent}
        >
          {'Login'}
        </Button>
      </KeyboardAwareScrollView>
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={onRegisterPress}>
          <Text style={styles.loginText}>
            Don't have an account?{' '}
            <Text style={styles.underline}>Register</Text>
          </Text>
        </TouchableOpacity>
        <Spacer.md />
        <View style={styles.buttonsContainer}>
          <Button
            mode="contained"
            onPress={onPressFaq}
            style={[styles.footerButton, { marginRight: 15 }]}
            labelStyle={styles.label}
            contentStyle={styles.buttonContent}
          >
            {'FAQ'}
          </Button>
          <Button
            mode="contained"
            onPress={onPressHelp}
            style={styles.footerButton}
            labelStyle={styles.label}
            contentStyle={styles.buttonContent}
          >
            {'Help'}
          </Button>
        </View>
      </View>
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
  loginButton: {
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
  forgotPasswordContainer: {
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
  },
  forgotPasswordText: {
    color: 'white',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  inputContainer: {
    width: '100%',
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
});
