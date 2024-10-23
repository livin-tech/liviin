import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Button, Text, TextInput } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  Alert,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';

// Utils
import { theme } from '@/src/theme';
import { Icons } from '@/src/assets';
import { useAuth } from '@/src/contexts';
import { BackgroundLayout } from '@/src/layouts';
import { RouteNavigators, Routes } from '@/src/navigation';

// Components
import { Spacer, StyledText, BackButton } from '@/src/components';


// Fetches the translation for this particular page
const getTransKey = (key: string) => `authentication.login.${key}`;

const inputTheme = {
  colors: {
    text: theme.colors.white,
    primary: theme.colors.white,
    placeholder: theme.colors.white,
    background: 'transparent',
  },
};

type LoginFormData = {
  email: string;
  password: string;
};

export const Login = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null); // State to track login errors
  const { login } = useAuth();

  const { width: windowWidth } = useWindowDimensions();

  // Define the login mutation
  const { mutate: handleLogin, isPending } = useMutation({
    mutationFn: async (data: any) => {
      const { email, password } = data;
      return login(email, password); // login function to authenticate user
    },
    onSuccess: () => {
      setLoginError(null); // Reset the error state on success
      navigation.navigate(RouteNavigators.WithSafeAreaNavigator); // Navigate on successful login
    },
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.message ||
        error.message ||
        'An error occurred during login';
      setLoginError(errorMessage);
      Alert.alert('Login Failed', errorMessage);
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: 'admin@liviin.com',
      password: 'admin123',
    },
  });

  const goBack = () => {
    navigation.goBack();
  };

  // Handle form submission
  const onLoginPress = async (data: LoginFormData) => {
    const { email, password } = data;

    // Check if email and password are provided
    if (!email || !password) {
      setLoginError('Email and password are required.');
      Alert.alert('Error', 'Email and password are required.');
      return;
    }

    // Trigger the login mutation
    handleLogin({ email, password });
  };

  const onRegisterPress = () => {
    navigation.navigate(Routes.Register);
  };

  const onForgotPassword = () => {
    navigation.navigate(Routes.ForgotPassword);
  };

  const onPressFaq = () => {
    navigation.navigate(Routes.FAQs);
  };

  const onPressHelp = () => {
    navigation.navigate(Routes.Help);
  };

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
          <Controller
            control={control}
            name="email"
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                mode="outlined"
                label="Email"
                placeholder="Type your email"
                left={
                  <TextInput.Icon color={theme.colors.white} name="email" />
                }
                theme={inputTheme}
                style={styles.input}
                outlineColor={theme.colors.white}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={!!errors.email}
              />
            )}
          />
          {errors.email && (
            <Text style={styles.errorText}>{errors.email.message}</Text>
          )}

          <Controller
            control={control}
            name="password"
            rules={{
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters long',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
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
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={!!errors.password}
              />
            )}
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password.message}</Text>
          )}
        </View>

        {loginError && <Text style={styles.errorText}>{loginError}</Text>}

        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity onPress={onForgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <Spacer.md />
        <Button
          mode="contained"
          loading={isPending}
          labelStyle={styles.label}
          contentStyle={styles.buttonContent}
          onPress={handleSubmit(onLoginPress)}
          style={[styles.loginButton, { width: windowWidth - 32, height: 40 }]}
        >
          {isPending ? '' : 'Login'}
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
  errorText: {
    color: theme.colors.error, // Define an error color in your theme
    marginBottom: 8,
  },
});
