import { ScreenLayout } from '../../layouts';
import { Button, TextInput } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { theme } from '../../theme';

export function Profile() {
  return (
    <ScreenLayout headerTitle="Profile">
      <KeyboardAwareScrollView>
        <TextInput style={styles.input} label="First Name" />
        <TextInput style={styles.input} label="Last Name" />
        <TextInput style={styles.input} label="Email" />
        <TextInput style={styles.input} label="Contact" />

        <Button
          style={styles.logout}
          icon="logout"
          onPress={() => console.log('Logout')}
        >
          Logout
        </Button>
      </KeyboardAwareScrollView>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 12,
  },
  logout: {
    marginTop: 24,
  },
});
