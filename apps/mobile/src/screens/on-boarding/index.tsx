import { View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { LeftArrow } from '../../assets/icons/LeftArrow';

export function OnBoarding() {
  const theme = useTheme();
  return (
    <View style={{ backgroundColor: theme.colors.background }}>
      <LeftArrow />
    </View>
  )
}
