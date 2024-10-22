import { StyleSheet, Touchable, TouchableOpacity, View } from 'react-native';
import { ScreenLayout } from '../../layouts';
import { Caption, FAB, Paragraph, Subheading, Text } from 'react-native-paper';
import React, { useState } from 'react';
import { Icons } from '../../assets';
import { HorizontalLayout } from '../../layouts/HorizontalLayout';
import { ConfirmationModal } from '../../components';
import { CenterContainer } from '../../components';
// import { PropertyList } from './property-list/PropertyList';
import { Routes } from '../../navigation';
import { theme } from '../../theme';

export function Home({ navigation }) {
  // const navigation = useNavigation();
  const [openModal, setOpenModal] = useState(true);

  return (
    <ScreenLayout headerTitle="">
      <CenterContainer direction="vertical">
        <TouchableOpacity onPress={() => navigation.navigate(Routes.Calendar)}>
          <HorizontalLayout style={styles.calender}>
            <Icons.CalendarLogo />
            <View style={styles.calenderTitle}>
              <Subheading>View Calendar</Subheading>
              <Caption>{'(for all your properties)'}</Caption>
            </View>
          </HorizontalLayout>
        </TouchableOpacity>

        {/* <PropertyList /> */}
      </CenterContainer>

      {/* <ConfirmationModal
        show={openModal}
        dismissText={null}
        confirmText="Ok"
        onConfirm={() => setOpenModal(false)}
        onDismiss={() => setOpenModal(false)}
        headline="Done!"
      >
        <Text style={{ textAlign: 'center' }}>Property created!</Text>
      </ConfirmationModal>

      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate(Routes.OnBoarding, { screen: 'Step1' })}
      /> */}
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
  calender: {
    marginVertical: 16,
  },
  calenderTitle: {
    marginLeft: 10,
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: theme.colors.primary,
  }
});
