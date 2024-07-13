import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Step1 } from './Step1/Step1';
import { Step3 } from './Step3';
import { Step2 } from './Step2';

const Stack = createNativeStackNavigator();

export const OnBoarding = () => (
  <Stack.Navigator initialRouteName="Step1">
    <Stack.Screen
      options={{ headerShown: false }}
      name="Step1"
      component={Step1}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="Step2"
      component={Step2}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="Step3"
      component={Step3}
    />
  </Stack.Navigator>
);
