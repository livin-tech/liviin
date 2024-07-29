import { useState } from 'react';
import { FAB, IconButton } from 'react-native-paper';
import { View, StyleSheet, Text, FlatList } from 'react-native';

// Utils
import { theme } from '../../theme';
import { Icons } from '../../assets';
import { TASKS_MOCK } from './mockData';

// Components
import { TaskCard } from './TaskCard';
import { Spacer } from '../../components';
import { ScreenLayout } from '../../layouts';

const TASK_TYPES = {
  MAINTENANCE: 'MAINTENANCE',
  CLEANING: 'CLEANING',
};

const { MAINTENANCE, CLEANING } = TASK_TYPES;

const renderItem = ({ item }) => <TaskCard card={item} />;

export function TasksScreen({ route }) {
  const params = route.params as Record<string, string>;
  const headerTitle = params?.propertyName || 'House 1';

  const [selectedType, setSelectedType] = useState<string>(MAINTENANCE);

  const onChangeType = (type) => () => {
    if (selectedType !== type) {
      setSelectedType(type);
    }
  };

  const onAddTask = () => {};

  return (
    <ScreenLayout headerTitle={headerTitle}>
      <View style={styles.headerIconContainer}>
        <Icons.HouseRound />
      </View>
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
              icon={
                selectedType === CLEANING
                  ? Icons.CleaningFilled
                  : Icons.CleaningOutline
              }
              size={40}
              style={styles.cleaningButton}
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
      <FAB style={styles.fab} icon={'plus'} onPress={onAddTask} />
    </ScreenLayout>
  );
}

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
    right: 10,
    bottom: 80,
    position: 'absolute',
    backgroundColor: theme.colors.primary,
  },
});
