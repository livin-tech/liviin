import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { Subheading } from 'react-native-paper';
import { useQuery } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';

// Components
import House from '../../../assets/icons/components/House';
import Notification from '../../../assets/icons/components/Notification';
import ApartmentIcon from '../../../assets/icons/components/ApartmentIcon';
import { HorizontalLayout } from '../../../layouts';

// Utils
import { theme } from '../../../theme';
import { api } from '../../../services';
import { Routes } from '../../../navigation';

// Constants
const QUERY_KEY = 'properties';

export function PropertyList() {
  const navigation = useNavigation();

  const {
    data: properties,
    isError: fetchPropertiesError,
    isFetching: isLoadingProperties,
  } = useQuery({
    initialData: [],
    queryKey: [QUERY_KEY],
    queryFn: async () => await api.get(`/${QUERY_KEY}`),
  });

  const onNavigateToTasks = () => {
    navigation.navigate(Routes.Tasks);
  };

  const onNavigateToDetail = () => {
    // navigation.navigate(Routes.Tasks);
  };

  return isLoadingProperties && !fetchPropertiesError ? (
    <View style={styles(0).loadingContainer}>
      <ActivityIndicator />
    </View>
  ) : (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ marginBottom: Dimensions.get('screen').height * 0.1 }}
    >
      {(properties as any)?.map(({ title, type }, index) => (
        <TouchableOpacity onPress={onNavigateToDetail}>
          <HorizontalLayout key={index} style={styles(index).container}>
            <View>
              <Subheading>{title}</Subheading>
              {type === 'House' ? <House /> : <ApartmentIcon />}
            </View>
            <TouchableOpacity onPress={onNavigateToTasks}>
              <Notification count={index} />
            </TouchableOpacity>
          </HorizontalLayout>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = (index) =>
  StyleSheet.create({
    container: {
      width: '100%',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 24,
      borderRadius: 16,
      marginVertical: 8,
      backgroundColor:
        index % 2 === 0 ? theme.colors.accent : theme.colors.accentLight,
    },
    loadingContainer: {
      justifyContent: 'center',
      alignContent: 'center',
      display: 'flex',
      height: '70%',
      alignItems: 'center',
    },
  });
