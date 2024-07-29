import { ScreenLayout } from '../../layouts';
import { Button, TextInput, List } from 'react-native-paper';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React from 'react';
import { HorizontalLayout } from '../../layouts/HorizontalLayout';

export function Profile() {
  const [isEditing, setIsEditing] = React.useState(false);

  return (
    <ScreenLayout headerTitle="Profile" right={() => (
      <TouchableOpacity onPress={() => setIsEditing(!isEditing)}>
        <List.Icon icon="pencil-outline"  />
      </TouchableOpacity>
    )}>
      <KeyboardAwareScrollView>
        <TextInput style={styles.input} label="First Name" />
        <TextInput style={styles.input} label="Last Name" />
        <TextInput style={styles.input} label="Email" />
        <TextInput style={styles.input} label="Contact" />

        {
          isEditing ? (
            <HorizontalLayout style={{ marginTop: 24 }}>
              <Button style={{ flex: 1, borderRadius: 16 }} onPress={() => console.log('Cancel')}>Cancel</Button>
              <Button style={{ flex: 1, borderRadius: 16 }} onPress={() => console.log('Save')} mode="contained">Save</Button>
            </HorizontalLayout>
          ) : (
            <Button
              style={styles.logout}
              icon="logout"
              onPress={() => console.log('Logout')}
            >
              Logout
            </Button>
          )
        }
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
