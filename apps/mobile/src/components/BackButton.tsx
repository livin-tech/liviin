import React from 'react';
import { FAB } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

// Utils
import { theme } from '../theme';
import { Icons } from '../assets';

export const BackButton = ({ onPress = () => {} }) => (
  <FAB
    small
    icon={() => (
      <View style={styles.iconWrapper}>
        <Icons.LeftArrow />
      </View>
    )}
    onPress={onPress}
    style={styles.fab}
  />
);

// Styles
const styles = StyleSheet.create({
  fab: {
    top: 60,
    left: 20,
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});
