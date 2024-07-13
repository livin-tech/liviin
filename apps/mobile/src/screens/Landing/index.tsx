import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteNavigators } from '../../navigation/routes';
import { Button, Text, FAB } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import { StatusBar, StyleSheet, View } from 'react-native';

// Utils
import { LANGS } from '../../utils';
import { theme } from '../../theme';
import { Icons } from '../../assets';
import { BackgroundLayout } from '../../layouts';

export const Landing = ({ navigation }) => {
  const { t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(LANGS.ENGLISH);

  useFocusEffect(() => {
    StatusBar.setBarStyle('light-content', true);
    return () => {
      // Reset status bar style when screen loses focus
      StatusBar.setBarStyle('dark-content', true);
    };
  });

  const navigateToOnBoarding = () => {
    navigation.navigate(RouteNavigators.WithSafeAreaNavigator);
  };

  const onLangChange = () => {};

  return (
    <BackgroundLayout>
      <View>
        <Icons.LiviinLogo />
        <Button
          mode="contained"
          onPress={onLangChange}
          color={theme.colors.background}
        >
          <View style={styles.buttonContainer}>
            <Text style={styles.marginRight}>{currentLanguage}</Text>
            <Icons.ArrowDownSmall />
          </View>
        </Button>
        <FAB
          style={styles.fab}
          icon={Icons.RightArrow}
          onPress={navigateToOnBoarding}
        />
      </View>
    </BackgroundLayout>
  );
};

const styles = StyleSheet.create({
  fab: {
    margin: 16,
    right: -60,
    bottom: -280,
    position: 'absolute',
    backgroundColor: theme.colors.background,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  marginRight: {
    marginRight: 10,
  },
});
