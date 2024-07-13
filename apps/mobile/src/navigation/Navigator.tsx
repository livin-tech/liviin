import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Landing } from '../screens/Landing';
import { OnBoarding } from '../screens/on-boarding';

const Stack = createNativeStackNavigator();

export const Navigation = () => (
  <Stack.Navigator initialRouteName="Landing">
    <Stack.Screen name="Landing" component={Landing} />
    <Stack.Screen options={{
      headerShown: false
    }} name="OnBoarding" component={OnBoarding} />
  </Stack.Navigator>
)
