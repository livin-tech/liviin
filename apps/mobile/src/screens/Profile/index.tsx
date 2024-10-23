import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, TextInput, List } from 'react-native-paper';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Routes } from '@/src/navigation';
import { ScreenLayout, HorizontalLayout } from '@/src/layouts';

export const Profile = ({ navigation }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    contact: '+1234567890',
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: profile,
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });

  const onSubmit = (data) => {
    setProfile(data);
    setIsEditing(false);
  };

  const onLogout = () => {
    navigation.navigate(Routes.Register);
  };

  const handleCancel = () => {
    reset(profile); // Reset to initial profile values if cancelled
    setIsEditing(false);
  };

  return (
    <ScreenLayout
      headerTitle="Profile"
      right={
        !isEditing
          ? () => (
              <TouchableOpacity onPress={() => setIsEditing(true)}>
                <List.Icon icon="pencil-outline" />
              </TouchableOpacity>
            )
          : null
      }
    >
      <KeyboardAwareScrollView>
        <Controller
          control={control}
          rules={{ required: 'First Name is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              disabled={!isEditing}
              style={styles.input}
              mode="outlined"
              label="First Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={!!errors.firstName}
            />
          )}
          name="firstName"
        />
        {errors.firstName && (
          <Text style={styles.error}>{errors.firstName.message}</Text>
        )}

        <Controller
          control={control}
          rules={{ required: 'Last Name is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              disabled={!isEditing}
              style={styles.input}
              mode="outlined"
              label="Last Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={!!errors.lastName}
            />
          )}
          name="lastName"
        />
        {errors.lastName && (
          <Text style={styles.error}>{errors.lastName.message}</Text>
        )}

        <Controller
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: 'Invalid email address',
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              disabled={!isEditing}
              style={styles.input}
              mode="outlined"
              label="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={!!errors.email}
            />
          )}
          name="email"
        />
        {errors.email && (
          <Text style={styles.error}>{errors.email.message}</Text>
        )}

        <Controller
          control={control}
          rules={{ required: 'Contact is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              disabled={!isEditing}
              style={styles.input}
              mode="outlined"
              label="Contact"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={!!errors.contact}
            />
          )}
          name="contact"
        />
        {errors.contact && (
          <Text style={styles.error}>{errors.contact.message}</Text>
        )}

        {isEditing ? (
          <HorizontalLayout style={{ marginTop: 24 }}>
            <Button
              style={{ flex: 1, borderRadius: 16 }}
              onPress={handleCancel}
            >
              Cancel
            </Button>
            <Button
              style={{ flex: 1, borderRadius: 16 }}
              onPress={handleSubmit(onSubmit)}
              mode="contained"
            >
              Save
            </Button>
          </HorizontalLayout>
        ) : (
          <Button style={styles.logout} icon="logout" onPress={onLogout}>
            Logout
          </Button>
        )}
      </KeyboardAwareScrollView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 12,
  },
  logout: {
    marginTop: 24,
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
});
