import React from 'react';
import { Button, Text, TextInput } from 'react-native-paper';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

// Utils
import { theme } from '../../../theme';
import { Icons } from '../../../assets';
import { BackgroundLayout } from '../../../layouts';
import {
  Spacer,
  StyledText,
  BackButton,
  CenterContainer,
} from '../../../components';
import { RouteNavigators, Routes } from '../../../navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// Fetches the translation for this particular page
const getTransKey = (key) => `authentication.login.${key}`;

export const Login = ({ navigation }) => {
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
        <BackButton onPress={goBack} />
        <View style={styles.mainContainer}>
          <CenterContainer>
            <Spacer.md />
            <Icons.LiviinLogo />
            <StyledText.H4
              color={theme.colors.background}
              translationKey={getTransKey('heading')}
            />
            <Spacer.xl />
            <TouchableOpacity onPress={onRegisterPress}>
              <Text style={styles.loginText}>
                Don't have an account? Register now
              </Text>
            </TouchableOpacity>
            <Spacer.md />
            <View style={styles.inputContainer}>
              {/* <TextInput
              mode="outlined"
              label="Email"
              placeholder="Enter your email"
              left={<TextInput.Icon name="email" />}
              style={styles.input}
            />
            <TextInput
              mode="outlined"
              label="Password"
              placeholder="Enter your password"
              secureTextEntry
              left={<TextInput.Icon name="lock" />}
              style={styles.input}
            /> */}
              <TouchableOpacity
                onPress={onForgotPassword}
                style={styles.forgotPasswordContainer}
              >
                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
              </TouchableOpacity>
              <Spacer.sm />
              <Button
                mode="contained"
                style={styles.button}
                onPress={onLoginPress}
                labelStyle={styles.label}
                contentStyle={styles.buttonContent}
              >
                {'Login'}
              </Button>
            </View>
            <View style={styles.buttonsContainer}>
              <Button
                mode="contained"
                onPress={onPressFaq}
                style={styles.button}
                labelStyle={styles.label}
                contentStyle={styles.buttonContent}
              >
                {'FAQ'}
              </Button>
              <Button
                mode="contained"
                onPress={onPressHelp}
                style={styles.button}
                labelStyle={styles.label}
                contentStyle={styles.buttonContent}
              >
                {'Help'}
              </Button>
            </View>
          </CenterContainer>
        </View>
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
  buttonsContainer: {
    width: '55%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 16,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    color: 'white',
    textDecorationLine: 'underline',
  },
});
