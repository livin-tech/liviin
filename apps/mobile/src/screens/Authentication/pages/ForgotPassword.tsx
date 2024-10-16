import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, TextInput } from 'react-native-paper';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// Utils
import { theme } from '../../../theme';
import { Icons } from '../../../assets';
import { useAuth } from 'apps/mobile/src/contexts';
// import { Routes } from 'apps/mobile/src/navigation';

// Components
import { BackgroundLayout } from '../../../layouts';
import { Spacer, StyledText, BackButton } from '../../../components';

const inputTheme = {
  colors: {
    text: theme.colors.white,
    primary: theme.colors.white,
    placeholder: theme.colors.white,
    background: 'transparent',
    underlineColor: 'transparent',
  },
};

export const ForgotPassword = ({ navigation }) => {
  const { width: windowWidth } = useWindowDimensions();
  const [isLoading, setIsLoading] = useState(false);
  const { resetPassword } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
    },
  });

  const goBack = () => {
    navigation.goBack();
  };

  // Form submission logic
  const onResetPress = async (data) => {
    console.log({data})
    // const { email } = data;
    // setIsLoading(true);
    // resetPassword(email)
    //   .then(() => {
    //     navigation.navigate(Routes.Login);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
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
            translationKey={'authentication.forgotPassword.heading'}
          />
        </View>
        <Spacer.xl />
        <View style={styles.inputContainer}>
          {/* Email input with validation */}
          <Controller
            control={control}
            name="email"
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: 'Enter a valid email address',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                mode="outlined"
                label="Email"
                placeholder="Type your email"
                value={value}
                onChangeText={onChange}
                left={
                  <TextInput.Icon color={theme.colors.white} name="email" />
                }
                style={styles.input}
                outlineColor={theme.colors.white}
                theme={inputTheme}
                error={!!errors.email}
              />
            )}
          />
          {errors?.email && (
            <StyledText.Body color={theme.colors.error}>
              {errors.email.message}
            </StyledText.Body>
          )}
        </View>
        <Spacer.md />
        <Button
          mode="contained"
          style={[styles.resetButton, { width: windowWidth - 32, height: 40 }]}
          onPress={handleSubmit(onResetPress)}
          labelStyle={styles.label}
          // disabled={isLoading || !!errors.email}
          // disabled={true}
          loading={isLoading}
          contentStyle={styles.buttonContent}
        >
          {'Reset Password'}
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
  inputContainer: {
    width: '100%',
    padding: 16,
  },
  input: {
    marginBottom: 16,
    borderRadius: 10,
  },
  resetButton: {
    borderRadius: 22,
    backgroundColor: theme.colors.white,
  },
  buttonContent: {
    height: 40,
  },
  label: {
    color: '#4E5C4F',
  },
});
