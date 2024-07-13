import { Alert, StyleSheet, Text } from 'react-native';
import { ScreenLayout } from '../../layouts/ScreenLayout';
import { Button } from 'react-native-paper';
import React from 'react';

export function Step3({ navigation }) {
  return (
    <ScreenLayout headerTitle="Question 2">
      <Text>Last Step</Text>
      <Button mode="contained" style={styles.submitButton} onPress={() => Alert.alert('Done')}>Create Property!</Button>
    </ScreenLayout>
  )
}

const styles = StyleSheet.create({
  submitButton: {
    borderRadius: 20
  }
});
