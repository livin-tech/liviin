import { LeftArrowIcon } from '../assets/icons/LeftArrowIcon';
import { Dimensions, StyleSheet, Touchable, TouchableOpacity, View } from 'react-native';
import { theme } from '../theme';
import { Headline } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export function Header({ headerTitle }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftArrow} onPress={() => navigation.goBack()}>
        <LeftArrowIcon />
      </TouchableOpacity>
      <Headline style={styles.heading}>{headerTitle}</Headline>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftArrow: {
    padding: 4
  },
  heading: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Baskervville'
  }
});
