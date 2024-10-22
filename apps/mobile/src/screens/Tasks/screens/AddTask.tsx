import React, { useRef, useState } from 'react';
import DatePicker from 'react-native-date-picker';
import {
  View,
  StyleSheet,
  Text,
  type TextInput,
  TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  Button,
  Card,
  Checkbox,
  Divider,
  Menu,
  TextInput as PaperInput,
  Paragraph,
  Subheading,
} from 'react-native-paper';

// Components
import { ScreenLayout } from '../../../layouts';
import { ConfirmationModal } from '../../../components';
import QuestionItem from '../../../components/QuestionItem';
import { HorizontalLayout } from '../../../layouts';

// Utils
import { theme } from '../../../theme';
import { Icons } from '../../../assets';

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
  const [taskDate, setTaskDate] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [taskDateOpen, setTaskDateOpen] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState<'checked' | 'unchecked'>(
    'unchecked'
  );

  const [reminder, setReminder] = useState('Select frequency');
  const [visible, setVisibility] = useState(false);

  const [time, setTime] = useState('Select time');
  const [timeVisible, setTimeVisibility] = useState(false);

  const reminderFrequencyOptions = ['1 month', '2 months', '3 months'];
  const timeOptions = ['9:00 AM', '10:00 AM', '11:00 AM'];

  return (
    <ScreenLayout headerTitle={task?.title || 'House 1'}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        {!task?.id ? (
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
        ) : null}

        <QuestionItem.ItemTextInput
          ref={ref}
          label="Date"
          placeholder="01/01/2024"
          value={taskDate.toLocaleDateString()}
          right={
            <PaperInput.Icon
              icon="calendar"
              name="calendarIcon"
              onPress={() => setTaskDateOpen(true)}
            />
          }
          heading="Select Date"
        ></QuestionItem.ItemTextInput>

        <QuestionItem.Item
          text="Select Time"
          input={() => (
            <View>
              <TouchableOpacity
                onPress={() => setTimeVisibility((timeVisible) => !timeVisible)}
                style={styles.buttonContainer}
              >
                <Text style={styles.marginRight}>{time}</Text>
                <Icons.ArrowDownSmall />
              </TouchableOpacity>
              {timeVisible ? (
                <View style={styles.menuContainer}>
                  {timeOptions.map((time, index) => (
                    <React.Fragment key={index}>
                      <Menu.Item
                        titleStyle={{
                          color: 'white',
                        }}
                        onPress={() => {
                          setTime(time);
                          setTimeVisibility(false);
                        }}
                        title={time}
                      />
                      {index < timeOptions.length - 1 && (
                        <Divider style={{ backgroundColor: 'grey' }} />
                      )}
                    </React.Fragment>
                  ))}
                </View>
              ) : null}
            </View>
          )}
        />
        <QuestionItem.Item
          text="Reminder every?"
          input={() => (
            <View>
              <TouchableOpacity
                onPress={() => setVisibility((visible) => !visible)}
                style={styles.buttonContainer}
              >
                <Text style={styles.marginRight}>{reminder}</Text>
                <Icons.ArrowDownSmall />
              </TouchableOpacity>
              {visible ? (
                <View style={styles.menuContainer}>
                  {reminderFrequencyOptions.map((lang, index) => (
                    <React.Fragment key={index}>
                      <Menu.Item
                        titleStyle={{
                          color: 'white',
                        }}
                        onPress={() => {
                          setReminder(lang);
                          setVisibility(false);
                        }}
                        title={lang}
                      />
                      {index < reminderFrequencyOptions.length - 1 && (
                        <Divider style={{ backgroundColor: 'grey' }} />
                      )}
                    </React.Fragment>
                  ))}
                </View>
              ) : null}
            </View>
          )}
        />

        {!task?.id ? (
          <QuestionItem.ItemTextInput
            ref={ref}
            label="Date"
            placeholder="01/01/2024"
            value={date.toLocaleDateString()}
            disabled={!!task?.id || checkboxValue === 'checked'}
            right={
              <PaperInput.Icon
                icon="calendar"
                onPress={() => setOpen(true)}
                name="calendarIcon"
              />
            }
            heading={
              task?.id
                ? 'Last Maintaince date:'
                : 'When was the last maintenance?'
            }
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
                disabled={task?.id}
                onPress={() =>
                  setCheckboxValue(
                    checkboxValue === 'checked' ? 'unchecked' : 'checked'
                  )
                }
              />
              <Paragraph>Never</Paragraph>
            </HorizontalLayout>
          </QuestionItem.ItemTextInput>
        ) : null}

        {!!task?.id ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Button
              mode="contained"
              style={[
                styles.submitButton,
                {
                  width: '48%',
                },
              ]}
              onPress={() => {
                navigation?.goBack();
              }}
            >
              Done
            </Button>
            <Button
              mode="contained"
              color="#D52525"
              style={[
                styles.submitButton,
                {
                  width: '48%',
                },
              ]}
              onPress={() => {
                navigation?.goBack();
              }}
            >
              Delete
            </Button>
          </View>
        ) : (
          <Button
            mode="contained"
            style={styles.submitButton}
            onPress={() => {
              setOpenModal(true);
            }}
          >
            Add
          </Button>
        )}
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
        <DatePicker
          modal
          open={taskDateOpen}
          date={taskDate}
          onConfirm={(date) => {
            setTaskDateOpen(false);
            setTaskDate(date);
          }}
          onCancel={() => {
            setTaskDateOpen(false);
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
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.backdrop,
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    marginLeft: 4,
  },
  marginRight: {
    marginRight: 10,
    fontSize: 12,
  },
  menuContainer: {
    position: 'absolute',
    top: -150, // Adjust based on your layout
    backgroundColor: 'rgba(78, 92, 79, 1)',
    borderWidth: 1,
    opacity: 1,
    borderColor: 'gray',
    borderRadius: 5,
    zIndex: 1000,
    right: 0,
  },
});
