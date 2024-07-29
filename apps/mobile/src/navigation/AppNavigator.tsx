import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Utils
import { RouteNavigators, Routes } from './routes';

// Screens
import {
  Login,
  Landing,
  Register,
  OnBoardingNavigation,
  ForgotPassword,
  HomeNavigation,
} from '../screens';
import { theme } from '../theme';
import { CalendarScreen } from '../screens/Calendar/Calendar';
import { TasksScreen } from '../screens/Tasks/Tasks';
import { Profile } from '../screens/profile/Profile';
import { AddTask } from '../screens/Tasks/AddTask';

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
          component={OnBoardingNavigation}
          name={Routes.OnBoarding}
        />
        <StackWithSafeArea.Screen
          options={noHeader}
          component={HomeNavigation}
          name={Routes.Home}
        />
        <StackWithSafeArea.Screen
          options={noHeader}
          component={CalendarScreen}
          name={Routes.Calendar}
        />
        <StackWithSafeArea.Screen
          options={noHeader}
          component={TasksScreen}
          name={Routes.Tasks}
        />
        <StackWithSafeArea.Screen
          options={noHeader}
          component={AddTask}
          name={Routes.AddTask}
        />
        <StackWithSafeArea.Screen
          options={noHeader}
          component={Profile}
          name={Routes.Profile}
        />
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
      <StackWithoutSafeArea.Screen
        options={noHeader}
        component={Login}
        name={Routes.Login}
      />
      <StackWithoutSafeArea.Screen
        options={noHeader}
        component={Register}
        name={Routes.Register}
      />
      <StackWithoutSafeArea.Screen
        options={noHeader}
        component={ForgotPassword}
        name={Routes.ForgotPassword}
      />
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
    backgroundColor: theme.colors.background,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
