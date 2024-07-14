import { Icons } from '../assets';
import { theme } from '../theme';
import { Headline } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export const Header = ({ headerTitle }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.leftArrow}
        onPress={() => navigation.goBack()}
      >
        <Icons.LeftArrow />
      </TouchableOpacity>
      <Headline style={styles.heading}>{headerTitle}</Headline>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftArrow: {
    padding: 4,
  },
  heading: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Baskervville',
  },
});
