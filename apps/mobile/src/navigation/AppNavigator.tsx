import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Utils
import { Landing, OnBoarding } from '../screens';
import { RouteNavigators, Routes } from './routes';

// Navigation Options
const noHeader = {
  headerShown: false,
};

// Stack Navigators
const StackWithSafeArea = createNativeStackNavigator();
const StackWithoutSafeArea = createNativeStackNavigator();

// Navigator for screens with SafeAreaView
const WithSafeAreaNavigator = () => {
  StatusBar.setBarStyle('dark-content', true);
  return (
    <SafeAreaView style={styles.safeArea}>
      <StackWithSafeArea.Navigator initialRouteName={Routes.OnBoarding}>
        <StackWithSafeArea.Screen
          options={noHeader}
          component={OnBoarding}
          name={Routes.OnBoarding}
        />
        {/* Add more screens with SafeAreaView here */}
      </StackWithSafeArea.Navigator>
    </SafeAreaView>
  );
};

// Navigator for screens without SafeAreaView
const WithoutSafeAreaNavigator = () => {
  StatusBar.setBarStyle('light-content', true);
  return (
    <StackWithoutSafeArea.Navigator initialRouteName={Routes.Landing}>
      <StackWithoutSafeArea.Screen
        options={noHeader}
        component={Landing}
        name={Routes.Landing}
      />
      {/* Add more screens without SafeAreaView here */}
    </StackWithoutSafeArea.Navigator>
  );
};

// Root navigator to combine both navigators
const RootNavigator = createNativeStackNavigator();

// App Navigator
export const AppNavigator = () => (
  <NavigationContainer>
    <RootNavigator.Navigator
      initialRouteName={RouteNavigators.WithoutSafeAreaNavigator}
    >
      <RootNavigator.Screen
        options={noHeader}
        component={WithSafeAreaNavigator}
        name={RouteNavigators.WithSafeAreaNavigator}
      />
      <RootNavigator.Screen
        options={noHeader}
        component={WithoutSafeAreaNavigator}
        name={RouteNavigators.WithoutSafeAreaNavigator}
      />
    </RootNavigator.Navigator>
  </NavigationContainer>
);

// Define your styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
