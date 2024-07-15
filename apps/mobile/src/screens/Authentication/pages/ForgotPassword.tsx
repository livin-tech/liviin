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
const getTransKey = (key) => `authentication.forgotPassword.${key}`;

export const ForgotPassword = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };

  const onResetPassword = () => {
    navigation.navigate(Routes.Login);
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
          <Spacer.xl />
          <Spacer.md />
          <View style={styles.inputContainer}>
            <Spacer.sm />
            <Button
              mode="contained"
              style={styles.button}
              onPress={onResetPassword}
              labelStyle={styles.label}
              contentStyle={styles.buttonContent}
            >
              {'Send Email'}
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
  text: {
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
});
