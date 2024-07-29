import React from 'react';
import { StyleSheet } from 'react-native';

// Utils
import { ScreenLayout } from '../../layouts';
import { Icons } from '../../assets';
import { View } from 'react-native';

export const AddTask = ({ route }) => {
  const task = route?.params?.task || {};
  return (
    <ScreenLayout headerTitle={task?.title || 'House 1'}>
      <View style={styles.headerIconContainer}>
        <Icons.HouseRound />
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerIconContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: -10,
  },
});
