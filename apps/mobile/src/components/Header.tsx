import { Headline } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Icons } from '@/src/assets';
import { theme } from '@/src/theme';

export const Header = ({ headerTitle, right }) => {
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
      { right && right() }
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
