import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Home';
import React, { useEffect } from 'react';
import LottieView from 'lottie-react-native';
import { setTimeout } from '@testing-library/react-native/build/helpers/timers';

const Stack = createNativeStackNavigator();

export const HomeNavigation = () => {
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
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
};
