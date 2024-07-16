import { StyleSheet, Image, View, type TextInput } from 'react-native';
import { ScreenLayout } from '../../layouts';
import {
  Button,
  ProgressBar,
  Subheading,
  Switch,
  TextInput as PaperInput,
  Checkbox,
  Paragraph,
} from 'react-native-paper';
import React, { useRef, useState } from 'react';
import { Images } from '../../assets';
import QuestionItem from '../../components/QuestionItem';
import Wind from '../../assets/icons/Wind';
import { theme } from '../../theme';
import DatePicker from 'react-native-date-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export function Step2({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const ref = useRef<TextInput>();

  return (
    <ScreenLayout headerTitle="Question 1">
      <KeyboardAwareScrollView>
        <View style={{ alignItems: 'center' }}>
          <View style={{ width: 200, marginVertical: 16 }}>
            <ProgressBar progress={0.5} color={theme.colors.primary} />
          </View>
        </View>
        <Image source={Images.AC} />
        <Subheading style={{ marginVertical: 16 }}>
          This is the description about why maintenance of AC is important.
        </Subheading>
        <QuestionItem.Item
          icon={Wind}
          text="Do you have an AC?"
          input={() => <Switch value={true} onValueChange={() => {}} />}
        />

        <QuestionItem.Item text="How many AC(s)?" />

        <QuestionItem.ItemTextInput
          ref={ref}
          label="Date"
          placeholder="01/01/2024"
          value={date.toLocaleDateString()}
          right={
            <PaperInput.Icon
              icon="calendar"
              onPress={() => setOpen(true)}
              name="calendarIcon"
            />
          }
          heading="When was the last maintenance?"
        >
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Subheading style={{ marginTop: 12 }}>OR</Subheading>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
                justifyContent: 'center',
              }}
            >
              <Checkbox.Android status="unchecked" />
              <Paragraph>Never</Paragraph>
            </View>
          </View>
        </QuestionItem.ItemTextInput>

        <Button
          mode="contained"
          style={styles.submitButton}
          onPress={() => navigation.navigate('Step3')}
        >
          Next
        </Button>
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={(date) => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
          mode="date"
        />
      </KeyboardAwareScrollView>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  submitButton: {
    borderRadius: 20,
  },
});
