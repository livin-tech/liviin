import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Landing, OnBoarding } from '../screens';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Landing">
    <Stack.Screen name="Landing" component={Landing} />
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name="OnBoarding"
      component={OnBoarding}
    />
  </Stack.Navigator>
);
