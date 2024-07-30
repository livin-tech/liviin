import React, { useRef, useState } from 'react';
import { StyleSheet, type TextInput } from 'react-native';

// Utils
import { ScreenLayout } from '../../layouts';
import { Icons } from '../../assets';
import { View } from 'react-native';
import {
  Button,
  Card,
  Checkbox,
  Divider,
  TextInput as PaperInput,
  Paragraph,
  Subheading,
} from 'react-native-paper';
import { theme } from '../../theme';
import QuestionItem from '../../components/QuestionItem';
import { HorizontalLayout } from '../../layouts/HorizontalLayout';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DatePicker from 'react-native-date-picker';
import { ConfirmationModal } from '../../components';

const TASK_TYPES = {
  MAINTENANCE: 'MAINTENANCE',
  CLEANING: 'CLEANING',
};

const { MAINTENANCE, CLEANING } = TASK_TYPES;

export const AddTask = ({ route, navigation }) => {
  const task = route?.params?.task || {};

  const ref = useRef<TextInput>();

  const [taskType, setTaskType] = useState(MAINTENANCE);
  const [openModal, setOpenModal] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState<'checked' | 'unchecked'>(
    'unchecked'
  );

  return (
    <ScreenLayout headerTitle={task?.title || 'House 1'}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerIconContainer}>
          <Icons.HouseRound />
        </View>
        <Card style={styles.card}>
          <Card.Content>
            <Subheading style={{ textAlign: 'center' }}>
              Choose a type
            </Subheading>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
            >
              <Checkbox.Item
                mode="android"
                color={theme.colors.primary}
                label="Maintenance"
                status={taskType === MAINTENANCE ? 'checked' : 'unchecked'}
                onPress={() => setTaskType(MAINTENANCE)}
                position="leading"
              />
              <Checkbox.Item
                mode="android"
                color={theme.colors.primary}
                label="Cleaning"
                status={taskType === CLEANING ? 'checked' : 'unchecked'}
                onPress={() => setTaskType(CLEANING)}
                position="leading"
              />
            </View>
          </Card.Content>
        </Card>
        <QuestionItem.ItemTextInput
          theme={theme}
          label="e.g silverware"
          placeholder="e.g silverware"
          heading="Name"
        />
        <QuestionItem.Item text="Quantity" />
        <QuestionItem.Item text="Remind me every">
          <></>
        </QuestionItem.Item>

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
            <Checkbox.Android
              color={theme.colors.primary}
              status={checkboxValue}
              onPress={() =>
                setCheckboxValue(
                  checkboxValue === 'checked' ? 'unchecked' : 'checked'
                )
              }
            />
            <Paragraph>Never</Paragraph>
          </HorizontalLayout>
        </QuestionItem.ItemTextInput>
        <Button
          mode="contained"
          style={styles.submitButton}
          onPress={() => {
            setOpenModal(true);
          }}
        >
          Add
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
        <ConfirmationModal
          show={openModal}
          headline={''}
          dismissText=""
          confirmText="Ok"
          showDivider={false}
          icon={Icons.ApartmentIcon}
          onDismiss={() => setOpenModal(false)}
          onConfirm={() => navigation.goBack()}
        >
          <View
            style={{
              alignContent: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              marginBottom: 10,
            }}
          >
            <Icons.CheckmarkCircle />
          </View>
          <Paragraph style={{ textAlign: 'center' }}>
            {taskType === MAINTENANCE
              ? 'Maintenance added!'
              : 'Cleaning added!'}
          </Paragraph>
        </ConfirmationModal>
      </KeyboardAwareScrollView>
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
  submitButton: {
    borderRadius: 20,
  },
});
