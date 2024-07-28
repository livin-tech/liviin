import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Subheading } from 'react-native-paper';
import ApartmentIcon from '../../../assets/icons/ApartmentIcon';
import Notification from '../../../assets/icons/Notification';
import { HorizontalLayout } from '../../../layouts/HorizontalLayout';
import { theme } from '../../../theme';
import House from '../../../assets/icons/House';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../../navigation';

export function PropertyList() {
  const navigation = useNavigation();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ marginBottom: Dimensions.get('screen').height * 0.1 }}
    >
      {[1, 2, 3, 4, 5].map((x) => (
        // @ts-ignore
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(Routes.Tasks, { propertyName: `Property ${x}` })
          }
        >
          <HorizontalLayout style={styles(x).container}>
            <View>
              <Subheading>Property {x}</Subheading>
              {x % 2 === 0 ? <ApartmentIcon /> : <House />}
            </View>
            <Notification count={x % 2} />
          </HorizontalLayout>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = (itemNo) =>
  StyleSheet.create({
    container: {
      width: '100%',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 24,
      borderRadius: 16,
      marginVertical: 8,
      backgroundColor:
        itemNo % 2 === 0 ? theme.colors.accent : theme.colors.accentLight,
    },
  });
