import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Text, TextInput } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';

import { Icons } from '@/src/assets';
// Components
import { BackButton, Spacer, StyledText } from '@/src/components';
import { BackgroundLayout } from '@/src/layouts';
import { Routes } from '@/src/navigation';
// Utils
import { theme } from '@/src/theme';
import { useAuth } from '@/src/contexts';

// Fetches the translation for this particular page
const getTransKey = (key: string) => `authentication.signUp.${key}`;

const inputTheme = {
  colors: {
    text: theme.colors.white,
    primary: theme.colors.white,
    placeholder: theme.colors.white,
    background: 'transparent',
  },
};

export const SignUp = ({ navigation }) => {
  const { width: windowWidth } = useWindowDimensions();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const { registerWithEmail } = useAuth();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSignupPress = (data: any) => {
    registerWithEmail(data)
      .then(() => {
        navigation.navigate(Routes.Login);
      })
      .catch((err) => {
        console.error('Error creating user', err);
      });
  };

  const goBack = () => {
    navigation.goBack();
  };

  const validateConfirmPassword = (value: string) => {
    const password = watch('password');
    return value === password || 'Passwords do not match';
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
          <Controller
            control={control}
            rules={{ required: 'First name is required' }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                mode="outlined"
                // label="First Name"
                placeholder="First Name"
                value={value}
                onChangeText={onChange}
                left={
                  <TextInput.Icon color={theme.colors.white} name="account" />
                }
                theme={inputTheme}
                style={styles.input}
                outlineColor={theme.colors.white}
                error={!!errors.firstName}
              />
            )}
            name="firstName"
          />
          {errors.firstName && (
            <Text style={styles.errorText}>{errors.firstName.message}</Text>
          )}

          <Controller
            control={control}
            rules={{ required: 'Last name is required' }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                mode="outlined"
                placeholder="Last Name"
                value={value}
                onChangeText={onChange}
                left={
                  <TextInput.Icon color={theme.colors.white} name="account" />
                }
                theme={inputTheme}
                style={styles.input}
                outlineColor={theme.colors.white}
                error={!!errors.lastName}
              />
            )}
            name="lastName"
          />
          {errors.lastName && (
            <Text style={styles.errorText}>{errors.lastName.message}</Text>
          )}

          <Controller
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Email is invalid',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                mode="outlined"
                placeholder="Email"
                value={value}
                onChangeText={onChange}
                autoCapitalize="none"
                left={
                  <TextInput.Icon color={theme.colors.white} name="email" />
                }
                theme={inputTheme}
                style={styles.input}
                outlineColor={theme.colors.white}
                error={!!errors.email}
              />
            )}
            name="email"
          />
          {errors.email && (
            <Text style={styles.errorText}>{errors.email.message}</Text>
          )}

          <Controller
            control={control}
            rules={{ required: 'Password is required' }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                mode="outlined"
                placeholder="Password"
                secureTextEntry={!passwordVisible}
                value={value}
                onChangeText={onChange}
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
                error={!!errors.password}
              />
            )}
            name="password"
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password.message}</Text>
          )}

          <Controller
            control={control}
            rules={{
              required: 'Confirm password is required',
              validate: validateConfirmPassword,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                mode="outlined"
                placeholder="Confirm Password"
                secureTextEntry={!confirmPasswordVisible}
                value={value}
                onChangeText={onChange}
                left={<TextInput.Icon color={theme.colors.white} name="lock" />}
                right={
                  <TextInput.Icon
                    color={theme.colors.white}
                    name={confirmPasswordVisible ? 'eye-off' : 'eye'}
                    onPress={() =>
                      setConfirmPasswordVisible(!confirmPasswordVisible)
                    }
                  />
                }
                theme={inputTheme}
                style={styles.input}
                outlineColor={theme.colors.white}
                error={!!errors.confirmPassword}
              />
            )}
            name="confirmPassword"
          />
          {errors.confirmPassword && (
            <Text style={styles.errorText}>
              {errors.confirmPassword.message}
            </Text>
          )}
        </View>
        <Spacer.md />
        <Button
          mode="contained"
          style={[styles.signupButton, { width: windowWidth - 32, height: 40 }]}
          onPress={handleSubmit(onSignupPress)}
          labelStyle={styles.label}
          contentStyle={styles.buttonContent}
        >
          {'Sign Up'}
        </Button>
        <Spacer.xl />
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
  inputContainer: {
    width: '100%',
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 8,
  },
});
