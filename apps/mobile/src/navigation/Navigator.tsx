import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Landing } from '../screens/Landing';
import { OnBoarding } from '../screens/on-boarding';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

export const Navigation = () => (
  <Stack.Navigator initialRouteName="Landing">
    <Stack.Screen name="Landing" component={Landing} />
    <Stack.Screen name="OnBoarding" component={OnBoarding} />
  </Stack.Navigator>
)
