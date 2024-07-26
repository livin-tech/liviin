import React from 'react';
import { Button, TextInput } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { View, StyleSheet, useWindowDimensions } from 'react-native';

// Utils
import { theme } from '../../../theme';
import { Icons } from '../../../assets';
import { BackgroundLayout } from '../../../layouts';

// // Fetches the translation for this particular page
const getTransKey = (key) => `authentication.forgotPassword.${key}`;

// Components
import { Spacer, StyledText, BackButton } from '../../../components';

const inputTheme = {
  colors: {
    text: theme.colors.white,
    primary: theme.colors.white,
    placeholder: theme.colors.white,
    background: 'transparent',
    underlineColor: 'transparent', // Hide the underline when focused
  },
};

export const ForgotPassword = ({ navigation }) => {
  const { width: windowWidth } = useWindowDimensions();

  const goBack = () => {
    navigation.goBack();
  };

  const onResetPress = () => {
    // Handle reset password action
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
        <Spacer.xl />
        <View style={styles.inputContainer}>
          <TextInput
            mode="outlined"
            label="Email"
            placeholder="Type your email"
            left={<TextInput.Icon color={theme.colors.white} name="email" />}
            style={styles.input}
            outlineColor={theme.colors.white}
            theme={inputTheme}
          />
        </View>
        <Spacer.md />
        <Button
          mode="contained"
          style={[styles.resetButton, { width: windowWidth - 32, height: 40 }]}
          onPress={onResetPress}
          labelStyle={styles.label}
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
    // backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white background
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
