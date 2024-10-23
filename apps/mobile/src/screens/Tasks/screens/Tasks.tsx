import { useState } from 'react';
import { FAB, IconButton } from 'react-native-paper';
import { View, StyleSheet, Text, FlatList } from 'react-native';

// Utils
import { theme } from '@/src/theme';
import { Icons } from '@/src/assets';
import { TASKS_MOCK } from '../mocks/mockData';

// Components
import { TaskCard } from '../components';
import { Routes } from '@/src/navigation';
import { Spacer } from '@/src/components';
import { ScreenLayout } from '@/src/layouts';

const TASK_TYPES = {
  MAINTENANCE: 'MAINTENANCE',
  CLEANING: 'CLEANING',
};

const { MAINTENANCE, CLEANING } = TASK_TYPES;

export const Tasks = ({ navigation, route }) => {
  const params = route.params as Record<string, string>;
  const headerTitle = params?.propertyName || 'House 1';

  const [selectedType, setSelectedType] = useState<string>(MAINTENANCE);

  const onChangeType = (type) => () => {
    if (selectedType !== type) {
      setSelectedType(type);
    }
  };

  const onAddTask =
    (task = {}) =>
    () => {
      navigation.navigate(Routes.AddTask, { task });
    };

  const renderItem = ({ item }) => (
    <TaskCard key={item.id} card={item} onPress={onAddTask(item)} />
  );

  return (
    <ScreenLayout headerTitle={headerTitle}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <View style={styles.iconContainer}>
            <IconButton
              icon={
                selectedType === MAINTENANCE
                  ? Icons.MaintenaceFilled
                  : Icons.MaintenaceOutline
              }
              size={40}
              style={styles.maintenanceButton}
              onPress={onChangeType(MAINTENANCE)}
            />
            <Text style={styles.buttonText}>Maintenance</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.iconContainer}>
            <IconButton
              // icon="water-check-outline"
              icon={
                selectedType === CLEANING
                  ? 'water-check-outline'
                  : 'water-check'
              }
              color={
                selectedType === CLEANING ? 'white' : 'rgba(78, 92, 79, 0.5)'
              }
              size={40}
              style={[
                styles.cleaningButton,
                selectedType === CLEANING
                  ? { backgroundColor: theme.colors.primary }
                  : { borderWidth: 0.5, borderColor: 'rgba(78, 92, 79, 0.5)' },
              ]}
              onPress={onChangeType(CLEANING)}
            />
            <Text style={styles.buttonText}>Cleaning</Text>
          </View>
        </View>
      </View>
      <Spacer.md />
      <FlatList
        data={
          selectedType === MAINTENANCE
            ? TASKS_MOCK?.filter((task) => task?.isMaintenance)
            : TASKS_MOCK?.filter((task) => !task?.isMaintenance)
        }
        renderItem={renderItem}
        keyExtractor={(item) => item?.id}
        showsVerticalScrollIndicator={false}
      />
      <FAB style={styles.fab} icon={'plus'} onPress={onAddTask({})} />
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIconContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: -10,
  },
  iconContainer: {},
  maintenanceButton: {
    borderRadius: 30,
  },
  cleaningButton: {
    borderRadius: 30,
  },
  buttonText: {
    marginTop: 10,
    fontSize: 16,
    color: 'black',
  },
  divider: {
    width: 1,
    height: 60,
    backgroundColor: '#C4C4C4',
    marginHorizontal: 20,
  },
  fab: {
    margin: 16,
    right: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: theme.colors.primary,
  },
});
