import { StyleSheet, Image, View } from 'react-native';
import { ScreenLayout } from '../../layouts';
import { Text } from 'react-native-paper';
import React, { useState } from 'react';
import { Icons } from '../../assets';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { HorizontalLayout } from '../../layouts/HorizontalLayout';
import { ConfirmationModal } from '../../components/ConfirmationModal';
import { CenterContainer } from '../../components';

export function Home({ navigation }) {
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
