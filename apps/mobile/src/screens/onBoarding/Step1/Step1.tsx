import { StyleSheet, View } from 'react-native';
import { Button, Card, ProgressBar, Subheading } from 'react-native-paper';
import { theme } from '../../../theme';
import QuestionItem from './QuestionItem';
import { Icons } from '../../../assets';
import { ScreenLayout } from '../../../layouts';
import React from 'react';

export function Step1({ navigation }) {
  return (
    <ScreenLayout headerTitle="Your property is...">
      <View style={{ alignItems: 'center' }}>
        <View style={{ width: 200, marginVertical: 16 }}>
          <ProgressBar progress={0.5} color={theme.colors.primary} />
        </View>
      </View>
      <Subheading>
        Answer the following questions and then proceed the next question
      </Subheading>
      <Card style={styles.card}>
        <Card.Content>
          <Subheading>Is this a house or apartment?</Subheading>
        </Card.Content>
      </Card>
      <QuestionItem.ItemTextInput
        theme={theme}
        label="Name"
        placeholder="e.g beach house"
      />
      <QuestionItem.Item icon={Icons.MeasureTape} text="How many MTs" />
      <QuestionItem.Item icon={Icons.Bed} text="Rooms" />
      <QuestionItem.Item icon={Icons.Bathroom} text="Bathrooms" />
      <Button
        mode="contained"
        style={styles.submitButton}
        onPress={() => navigation.navigate('Step2')}
      >
        Next
      </Button>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
    padding: 12,
  },
  card: {
    marginVertical: 8,
    borderRadius: 12,
    backgroundColor: 'rgba(210, 216, 190, 0.1)',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: 'transparent',
    fontSize: 13,
  },
  submitButton: {
    borderRadius: 20,
  },
});
