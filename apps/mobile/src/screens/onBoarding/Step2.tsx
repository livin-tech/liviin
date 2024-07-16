import { StyleSheet, Image, View, type TextInput } from 'react-native';
import { ScreenLayout } from '../../layouts';
import {
  Button,
  ProgressBar,
  Subheading,
  Switch,
  TextInput as PaperInput,
  Checkbox,
  Paragraph, Divider,
} from 'react-native-paper';
import React, { useRef, useState } from 'react';
import { Images } from '../../assets';
import QuestionItem from '../../components/QuestionItem';
import Wind from '../../assets/icons/Wind';
import { theme } from '../../theme';
import DatePicker from 'react-native-date-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { HorizontalLayout } from '../../layouts/HorizontalLayout';
import { ConfirmationModal } from '../../components/ConfirmationModal';

export function Step2({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const ref = useRef<TextInput>();
  const [switchValue, setSwitchValue] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState<'checked' | 'unchecked'>('unchecked');
  const [openModal, setOpenModal] = useState(false);

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
          input={() => <Switch color={theme.colors.primary} value={switchValue} onValueChange={(val) => setSwitchValue(val)} />}
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
          <HorizontalLayout style={{ marginTop: 24, marginBottom: 8 }}>
            <Divider style={{ flex: 1 }} />
            <Subheading style={{ marginHorizontal: 12 }}>OR</Subheading>
            <Divider style={{ flex: 1 }} />
          </HorizontalLayout>
          <HorizontalLayout style={{ justifyContent: 'center' }}>
            <Checkbox.Android color={theme.colors.primary} status={checkboxValue} onPress={() => setCheckboxValue(checkboxValue === 'checked' ? 'unchecked' : 'checked')} />
            <Paragraph>Never</Paragraph>
          </HorizontalLayout>
        </QuestionItem.ItemTextInput>

        <Button
          mode="contained"
          style={styles.submitButton}
          onPress={() => setOpenModal(true)}
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
      <ConfirmationModal
        show={openModal}
        onDismiss={() => setOpenModal(false)}
        onConfirm={() => navigation.navigate('Step3')}
      >
        <Paragraph style={{ textAlign: 'center'}}>
          We’re almost done. Now let’s continue with cleanup and we’re done.
        </Paragraph>
      </ConfirmationModal>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  submitButton: {
    borderRadius: 20,
  },
});
