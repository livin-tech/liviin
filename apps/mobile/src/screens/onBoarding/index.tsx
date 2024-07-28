import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Step1 } from './Step1/Step1';
import { Step3 } from './Step3';
import { Step2 } from './Step2';
import React, { useEffect } from 'react';
import LottieView from 'lottie-react-native';
import { setTimeout } from '@testing-library/react-native/build/helpers/timers';

const Stack = createNativeStackNavigator();

export const OnBoardingNavigation = () => {
  const [visible, setVisibility] = React.useState(true);
  useEffect(() => {
    setTimeout(() => setVisibility(false), 1000);
  }, []);

  if (visible) {
    return (
      <LottieView
        style={{ width: '100%', height: '100%' }}
        source={require('../../assets/animations/loading.json')}
        autoPlay
        loop
      />
    );
  }

  return (
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
};
