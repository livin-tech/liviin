import { StyleSheet, Image, View } from 'react-native';
import { ScreenLayout } from '../../layouts';
import {
  Button,
  ProgressBar,
  Subheading,
  Switch,
  Checkbox,
  Paragraph,
  Divider,
  Text,
} from 'react-native-paper';
import React, { useRef, useState } from 'react';
import { Icons, Images } from '../../assets';
import QuestionItem from '../../components/QuestionItem';
import Wind from '../../assets/icons/Wind';
import { theme } from '../../theme';
import DatePicker from 'react-native-date-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { HorizontalLayout } from '../../layouts/HorizontalLayout';
import { ConfirmationModal } from '../../components/ConfirmationModal';
import { CenterContainer } from '../../components';

export function Home({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState<'checked' | 'unchecked'>(
    'unchecked'
  );
  const [openModal, setOpenModal] = useState(true);

  return (
    <ScreenLayout headerTitle="">
      <KeyboardAwareScrollView>
        <View style={styles.mainContainer}>
          <CenterContainer>
            <HorizontalLayout>
              <Icons.CalendarLogo />
              <View style={styles.calenderTitle}>
                <Text style={styles.header}>View Calendar</Text>
                <Text>{`(for all your properties)`}</Text>
              </View>
            </HorizontalLayout>
          </CenterContainer>
        </View>
      </KeyboardAwareScrollView>
      <ConfirmationModal
        show={openModal}
        dismissText={null}
        confirmText="Ok"
        onConfirm={() => setOpenModal(false)}
        onDismiss={() => setOpenModal(false)}
        headline="Done!"
      >
        <Text style={{ textAlign: 'center' }}>Property created!</Text>
      </ConfirmationModal>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
  },
  header: {
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  calenderTitle: {
    marginLeft: 10,
  },
});
