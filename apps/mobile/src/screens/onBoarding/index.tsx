import { useState, useEffect } from 'react';
import LottieView from 'lottie-react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components
import { Step1, Step2, Step3 } from './steps';

// Utils
import { PropertyProvider } from '../../contexts';
import { Routes, noHeader } from '../../navigation';

// Constants
const { OnBoardingStep1, OnBoardingStep2, OnBoardingStep3 } = Routes;

// Stack Navigator
const Stack = createNativeStackNavigator();

export const OnBoardingNavigation = () => {
  const [visible, setVisibility] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setVisibility(false), 1000);
  }, []);

  return visible ? (
    <LottieView
      style={{ width: '100%', height: '100%' }}
      source={require('../../assets/animations/loading.json')}
      autoPlay
      loop
    />
  ) : (
    <PropertyProvider>
      <Stack.Navigator initialRouteName={OnBoardingStep1}>
        <Stack.Screen
          component={Step1}
          options={noHeader}
          name={OnBoardingStep1}
        />
        <Stack.Screen
          component={Step2}
          options={noHeader}
          name={OnBoardingStep2}
        />
        <Stack.Screen
          component={Step3}
          options={noHeader}
          name={OnBoardingStep3}
        />
      </Stack.Navigator>
    </PropertyProvider>
  );
};
