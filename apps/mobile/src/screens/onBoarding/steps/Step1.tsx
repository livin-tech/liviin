import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  Button,
  Card,
  Checkbox,
  Divider,
  Menu,
  ProgressBar,
  Subheading,
  Switch,
  Text,
} from 'react-native-paper';
import { useMutation } from '@tanstack/react-query';
import { useForm, Controller } from 'react-hook-form';
import { theme } from '../../../theme';
import QuestionItem from '../../../components/QuestionItem';
import { Icons } from '../../../assets';
import { ScreenLayout } from '../../../layouts';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Wind from 'apps/mobile/src/assets/icons/components/Wind';
import { Property, useAuth, useProperty } from 'apps/mobile/src/contexts';

export function Step1({ navigation }) {
  const [visible, setVisibility] = React.useState(false);

  const { user } = useAuth();
  const { createProperty } = useProperty();

  // React Hook Form setup
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<Property>({
    defaultValues: {
      type: '',
      title: '',
      size: 0,
      rooms: 0,
      bathrooms: 0,
      meter: 'MTs',
      hasLivingRoom: false,
      hasDiningRoom: false,
      hasFamilyRoom: false,
      hasHallRoom: false,
      hasServiceRoom: false,
      hasLaundryRoom: false,
      hasKitchen: false,
      hasBalcony: false,
      hasGarden: false,
    },
  });

  const type = watch('type');
  const title = watch('title');
  const size = watch('size');
  const rooms = watch('rooms');
  const bathrooms = watch('bathrooms');

  const isSubmitDisabled = !type || !title || !size || !rooms || !bathrooms;

  // React Query mutation for creating the property
  const { mutate: handleCreateProperty, isPending } = useMutation({
    mutationFn: async (data: Property) => {
      return createProperty({ ...data, owner: user?._id });
    },
    onSuccess: () => {
      navigation.navigate('Step2');
    },
    onError: (error) => {
      console.error('Failed to create property:', error);
    },
  });

  // Handle form submission
  const onSubmit = (data: Property) => {
    handleCreateProperty(data);
  };

  return (
    <ScreenLayout
      headerTitle="Your property is..."
      // right={() => (
      //   <TouchableOpacity onPress={() => navigation.navigate('Step3')}>
      //     <Text>Skip </Text>
      //   </TouchableOpacity>
      // )}
    >
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={{ alignItems: 'center' }}>
            <View style={{ width: 200, marginTop: 16, marginBottom: 32 }}>
              <ProgressBar progress={0} color={theme.colors.primary} />
            </View>
          </View>
          <Subheading style={{ marginBottom: 16 }}>
            Answer the following questions and then proceed to the next step
          </Subheading>
          <Card style={styles.card}>
            <Card.Content>
              <Subheading>Is this a house or an apartment?</Subheading>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}
              >
                <Controller
                  control={control}
                  name="type"
                  rules={{ required: 'Type is required' }}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <Checkbox.Item
                        mode="android"
                        color={theme.colors.primary}
                        label="House"
                        status={value === 'House' ? 'checked' : 'unchecked'}
                        onPress={() => onChange('House')}
                        position="leading"
                      />
                      <Checkbox.Item
                        mode="android"
                        color={theme.colors.primary}
                        label="Apartment"
                        status={value === 'Apartment' ? 'checked' : 'unchecked'}
                        onPress={() => onChange('Apartment')}
                        position="leading"
                      />
                    </>
                  )}
                />
              </View>
              {errors.type && (
                <Text style={styles.errorText}>{errors.type.message}</Text>
              )}
            </Card.Content>
          </Card>

          <Controller
            control={control}
            name="title"
            rules={{ required: 'Property name is required' }}
            render={({ field: { onChange, value } }) => (
              <QuestionItem.ItemTextInput
                theme={theme}
                label="e.g beach house"
                heading="Name of the property"
                value={value}
                onChangeText={onChange}
                error={!!errors.title}
              />
            )}
          />
          {errors.title && (
            <Text style={styles.errorText}>{errors.title.message}</Text>
          )}

          <Controller
            control={control}
            name="size"
            rules={{ required: 'Property size is required', min: 1 }}
            render={({ field: { onChange, value } }) => (
              <QuestionItem.Item
                onInputValueChange={(val) => onChange(+val)}
                icon={Icons.MeasureTape}
                text="How many"
              >
                <Menu
                  visible={visible}
                  onDismiss={() => setVisibility(false)}
                  anchor={
                    <TouchableOpacity
                      onPress={() => setVisibility(true)}
                      style={styles.buttonContainer}
                    >
                      <Text style={styles.marginRight}>{watch('meter')}</Text>
                      <Icons.ArrowDownSmall />
                    </TouchableOpacity>
                  }
                >
                  {['MTs', 'FTs'].map((lang, index) => (
                    <React.Fragment key={index}>
                      <Menu.Item
                        value={value.toString()}
                        onPress={() => {
                          setValue('meter', lang);
                          setVisibility(false);
                        }}
                        title={lang}
                      />
                      {index < 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </Menu>
              </QuestionItem.Item>
            )}
          />
          {errors.size && (
            <Text style={styles.errorText}>{errors.size.message}</Text>
          )}

          <Controller
            control={control}
            name="rooms"
            rules={{ required: 'Rooms count is required', min: 1 }}
            render={({ field: { onChange, value } }) => (
              <QuestionItem.Item
                icon={Icons.Bed}
                onInputValueChange={(val) => onChange(+val)}
                text="Rooms"
                value={value.toString()}
              />
            )}
          />
          {errors.rooms && (
            <Text style={styles.errorText}>{errors.rooms.message}</Text>
          )}

          <Controller
            control={control}
            name="bathrooms"
            rules={{ required: 'Bathrooms count is required', min: 1 }}
            render={({ field: { onChange, value } }) => (
              <QuestionItem.Item
                icon={Icons.Bathroom}
                onInputValueChange={(val) => onChange(+val)}
                text="Bathrooms"
                value={value.toString()}
              />
            )}
          />
          {errors.bathrooms && (
            <Text style={styles.errorText}>{errors.bathrooms.message}</Text>
          )}

          {/* Toggle switches for additional rooms */}
          <Controller
            control={control}
            name="hasLivingRoom"
            render={({ field: { onChange, value } }) => (
              <QuestionItem.Item
                icon={Icons.Bed}
                text="Do you have a Living room?"
                input={() => (
                  <Switch
                    color={theme.colors.primary}
                    value={value}
                    onValueChange={onChange}
                  />
                )}
              />
            )}
          />

          <Controller
            control={control}
            name="hasDiningRoom"
            render={({ field: { onChange, value } }) => (
              <QuestionItem.Item
                icon={Icons.Bed}
                text="Do you have a Dining room?"
                input={() => (
                  <Switch
                    color={theme.colors.primary}
                    value={value}
                    onValueChange={onChange}
                  />
                )}
              />
            )}
          />
          <Controller
            control={control}
            name="hasFamilyRoom"
            render={({ field: { onChange, value } }) => (
              <QuestionItem.Item
                icon={Icons.Bed}
                text="Do you have a Family room?"
                input={() => (
                  <Switch
                    color={theme.colors.primary}
                    value={value}
                    onValueChange={onChange}
                  />
                )}
              />
            )}
          />
          <Controller
            control={control}
            name="hasHallRoom"
            render={({ field: { onChange, value } }) => (
              <QuestionItem.Item
                icon={Icons.Bed}
                text="Do you have a Hall room?"
                input={() => (
                  <Switch
                    color={theme.colors.primary}
                    value={value}
                    onValueChange={onChange}
                  />
                )}
              />
            )}
          />
          <Controller
            control={control}
            name="hasServiceRoom"
            render={({ field: { onChange, value } }) => (
              <QuestionItem.Item
                icon={Icons.Bed}
                text="Do you have a Service room?"
                input={() => (
                  <Switch
                    color={theme.colors.primary}
                    value={value}
                    onValueChange={onChange}
                  />
                )}
              />
            )}
          />
          <Controller
            control={control}
            name="hasLaundryRoom"
            render={({ field: { onChange, value } }) => (
              <QuestionItem.Item
                icon={Icons.Bed}
                text="Do you have a Laundry room?"
                input={() => (
                  <Switch
                    color={theme.colors.primary}
                    value={value}
                    onValueChange={onChange}
                  />
                )}
              />
            )}
          />
          <Controller
            control={control}
            name="hasKitchen"
            render={({ field: { onChange, value } }) => (
              <QuestionItem.Item
                icon={Wind}
                text="Do you have a Kitchen?"
                input={() => (
                  <Switch
                    color={theme.colors.primary}
                    value={value}
                    onValueChange={onChange}
                  />
                )}
              />
            )}
          />
          <Controller
            control={control}
            name="hasBalcony"
            render={({ field: { onChange, value } }) => (
              <QuestionItem.Item
                icon={Wind}
                text="Do you have a Balcony?"
                input={() => (
                  <Switch
                    color={theme.colors.primary}
                    value={value}
                    onValueChange={onChange}
                  />
                )}
              />
            )}
          />
          <Controller
            control={control}
            name="hasGarden"
            render={({ field: { onChange, value } }) => (
              <QuestionItem.Item
                icon={Wind}
                text="Do you have a Garden?"
                input={() => (
                  <Switch
                    color={theme.colors.primary}
                    value={value}
                    onValueChange={onChange}
                  />
                )}
              />
            )}
          />

          <Button
            mode="contained"
            loading={isPending}
            style={styles.submitButton}
            onPress={handleSubmit(onSubmit)}
            // onPress={() => navigation.navigate("Step2")}
            disabled={isSubmitDisabled || isPending}
          >
            {isPending ? '' : 'Next'}
          </Button>
        </View>
      </KeyboardAwareScrollView>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
    padding: 12,
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
  submitButton: {
    borderRadius: 20,
    marginTop: 40,
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
  errorText: {
    color: 'red',
    marginBottom: 8,
  },
});
