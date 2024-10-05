import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScreenLayout } from '../../layouts';
import {
  Button,
  Caption,
  Checkbox,
  Divider,
  Menu,
  Paragraph,
  ProgressBar,
  Subheading,
  Switch,
  TextInput as PaperInput,
} from 'react-native-paper';
import React, { useRef, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { theme } from '../../theme';
import { Icons, Images } from '../../assets';
import QuestionItem from '../../components/QuestionItem';
import { HorizontalLayout } from '../../layouts/HorizontalLayout';
import DatePicker from 'react-native-date-picker';
import { ConfirmationModal } from '../../components';
import Sofa from '../../assets/icons/Sofa';
import { LANGS } from '../../utils';

export function Step3({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const ref = useRef<TextInput>();
  const [switchValue, setSwitchValue] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState<'checked' | 'unchecked'>(
    'unchecked'
  );
  const [openModal, setOpenModal] = useState(false);
  const [meter, setMeter] = React.useState('Select Material');
  const [visible, setVisibility] = React.useState(false);

  const options = ['Leather', 'Fabric', 'Raxeen'];

  const isSubmitDisabled = switchValue && meter === 'Select Material';

  return (
    <ScreenLayout headerTitle="Question 2">
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: 'center' }}>
          <View style={{ width: 200, marginVertical: 16 }}>
            <ProgressBar progress={0.66} color={theme.colors.primary} />
          </View>
        </View>
        <Image source={Images.Couch} />
        <Subheading style={{ marginVertical: 16 }}>
          This is the description about why cleaning of household items is
          important.
        </Subheading>
        <QuestionItem.Item
          icon={Sofa}
          text="Couch cleaning?"
          input={() => (
            <Switch
              color={theme.colors.primary}
              value={switchValue}
              onValueChange={(val) => setSwitchValue(val)}
            />
          )}
        />

        {switchValue ? (
          <>
            <QuestionItem.Item
              text="Couch material?"
              input={() => (
                <View>
                  <TouchableOpacity
                    onPress={() => setVisibility((visible) => !visible)}
                    style={styles.buttonContainer}
                  >
                    <Text style={styles.marginRight}>{meter}</Text>
                    <Icons.ArrowDownSmall />
                  </TouchableOpacity>
                  {visible ? (
                    <View style={styles.menuContainer}>
                      {options.map((lang, index) => (
                        <React.Fragment key={index}>
                          <Menu.Item
                            titleStyle={{
                              color: 'white',
                            }}
                            onPress={() => {
                              setMeter(lang);
                              setVisibility(false);
                            }}
                            title={lang}
                          />
                          {index < options.length - 1 && (
                            <Divider style={{ backgroundColor: 'grey' }} />
                          )}
                        </React.Fragment>
                      ))}
                    </View>
                  ) : null}
                </View>
              )}
            />

            <QuestionItem.ItemTextInput
              ref={ref}
              label="Date"
              placeholder="01/01/2024"
              value={date.toLocaleDateString()}
              disabled={checkboxValue === 'checked'}
              right={
                <PaperInput.Icon
                  icon="calendar"
                  onPress={() => setOpen(true)}
                  name="calendarIcon"
                />
              }
              heading="When was the last cleaning?"
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
          </>
        ) : null}

        <Button
          mode="contained"
          disabled={isSubmitDisabled}
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
        onDismiss={() => navigation.replace('Home')}
        onConfirm={() => navigation.replace('Home')}
        dismissText="Ignore"
        confirmText="Add"
        headline="Add Contact"
      >
        <Paragraph>
          Please enter the phone number and name of the person who will be
          notified for this property.
        </Paragraph>
        <Caption style={{ fontSize: 10 }}>
          The person will be notified via SMS or WhatsApp.
        </Caption>
        <TextInput
          style={{
            backgroundColor: theme.colors.accentLight,
            borderRadius: 10,
            padding: 8,
            marginVertical: 8,
            marginTop: 16,
          }}
          placeholder="+1 999-999-9999"
        />
        <TextInput
          style={{
            backgroundColor: theme.colors.accentLight,
            borderRadius: 10,
            padding: 8,
            marginVertical: 8,
          }}
          placeholder="John Doe"
        />
      </ConfirmationModal>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  submitButton: {
    marginTop: 16,
    borderRadius: 20,
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
