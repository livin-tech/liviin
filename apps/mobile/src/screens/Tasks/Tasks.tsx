import { ScreenLayout } from '../../layouts';
import { Subheading } from 'react-native-paper';

export function TasksScreen({ route }) {
  const params = route.params as Record<string, string>;

  return (
    <ScreenLayout headerTitle={params['propertyName']}>
      <Subheading>Tasks Screen</Subheading>
    </ScreenLayout>
  );
}
