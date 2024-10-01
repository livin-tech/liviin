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
  ConfirmationModal,
} from '../../../components';
import { RouteNavigators, Routes } from '../../../navigation';

// Fetches the translation for this particular page
const getTransKey = (key) => `authentication.register.${key}`;

export const Register = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const goBack = () => {
    navigation.goBack();
  };

  const registerWithApple = () => {
    setOpenModal(true);
  };

  const registerWithGoogle = () => {
    setOpenModal(true);
  };

  const registerWithEmail = () => {
    navigation.navigate(Routes.SignUp);
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
      <BackButton onPress={goBack} />
      <View style={styles.mainContainer}>
        <Spacer.md />
        <View style={styles.centerContainer}>
          <Icons.LiviinLogo />
          <StyledText.H4
            color={theme.colors.background}
            translationKey={getTransKey('heading')}
          />
        </View>
        <Spacer.md />
        <OutlinedButton
          onPress={registerWithApple}
          color={theme.colors.background}
          svgIconLeft={<Icons.AppleLogo />}
          style={styles.outlinedButtonStyles}
          translationKey={getTransKey('continueWithApple')}
        />
        <Spacer.sm />
        <OutlinedButton
          onPress={registerWithGoogle}
          color={theme.colors.background}
          svgIconLeft={<Icons.GoogleLogo />}
          style={styles.outlinedButtonStyles}
          translationKey={getTransKey('continueWithGoogle')}
        />
        <Spacer.sm />
        <OutlinedButton
          onPress={registerWithEmail}
          svgIconLeft={<Icons.Email />}
          color={theme.colors.background}
          style={styles.outlinedButtonStyles}
          translationKey={getTransKey('continueWithEmail')}
        />
        <Spacer.sm />
        <View style={styles.container}>
          <Checkbox.Item
            label=""
            mode="android"
            uncheckedColor={theme.colors.white}
            color={theme.colors.background}
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
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={handleLoginPress}>
          <Text style={styles.loginText}>
            Already have an account? <Text style={styles.underline}>Login</Text>
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
      </View>
      <ConfirmationModal
        show={openModal}
        dismissText={null}
        confirmText="Continue"
        onConfirm={() => {
          setOpenModal(false);
          navigation.navigate(RouteNavigators.WithSafeAreaNavigator);
        }}
        onDismiss={() => setOpenModal(false)}
        headline="Hello!"
      >
        <StyledText style={{ textAlign: 'center' }}>
          Thank you for registering. You will receive the confirmation email
          soon.
        </StyledText>
      </ConfirmationModal>
    </BackgroundLayout>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
    textAlign: 'center',
  },
  textStyle: {
    color: theme.colors.white,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '40%',
  },
  text: {
    fontSize: 16,
    color: theme.colors.white,
  },
  underline: {
    textDecorationLine: 'underline',
    color: theme.colors.white,
  },
  loginText: {
    fontSize: 16,
    color: theme.colors.white,
  },
  button: {
    borderRadius: 22,
    backgroundColor: theme.colors.white,
    width: 78,
    height: 38,
  },
  buttonContent: {
    height: 40,
  },
  label: {
    color: '#4E5C4F',
  },
  outlinedButtonStyles: {
    borderWidth: 1,
    borderColor: theme.colors.white,
    borderRadius: 35,
    height: 37,
    width: 320,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 35,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
