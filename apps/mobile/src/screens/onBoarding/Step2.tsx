import { StyleSheet, Text } from 'react-native';
import { ScreenLayout } from '../../layouts';
import { Button } from 'react-native-paper';
import React from 'react';

export function Step2({ navigation }) {
  return (
    <ScreenLayout headerTitle="Question 1">
      <Text>Step 2</Text>
      <Button
        mode="contained"
        style={styles.submitButton}
        onPress={() => navigation.navigate('Step3')}
      >
        Next
      </Button>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  submitButton: {
    borderRadius: 20,
  },
});
