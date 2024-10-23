import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Utils
import { theme } from '@/src/theme';
import { DrawerNavigator } from './DrawerNavigator';
import { RouteNavigators, Routes, noHeader } from '../utils';

// Screens
import {
  FAQs,
  Help,
  Login,
  Tasks,
  SignUp,
  AddTask,
  Landing,
  Register,
  Profile,
  ForgotPassword,
  CalendarScreen,
  OnBoardingNavigation,
} from '@/src/screens';

// Stack Navigators
const StackWithSafeArea = createNativeStackNavigator();
const StackWithoutSafeArea = createNativeStackNavigator();

// Navigator for screens with SafeAreaView
const WithSafeAreaNavigator = () => {
  StatusBar.setBarStyle('dark-content', true);
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* <StackWithSafeArea.Navigator initialRouteName={Routes.OnBoarding}> */}
      <StackWithSafeArea.Navigator initialRouteName={Routes.Home}>
        <StackWithSafeArea.Screen
          options={noHeader}
          component={OnBoardingNavigation}
          name={Routes.OnBoarding}
        />
        <StackWithSafeArea.Screen
          options={noHeader}
          component={DrawerNavigator}
          name={Routes.Home}
        />
        <StackWithSafeArea.Screen
          options={noHeader}
          component={CalendarScreen}
          name={Routes.Calendar}
        />
        <StackWithSafeArea.Screen
          options={noHeader}
          component={Tasks}
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
        component={SignUp}
        name={Routes.SignUp}
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
      <StackWithoutSafeArea.Screen
        options={noHeader}
        component={FAQs}
        name={Routes.FAQs}
      />
      <StackWithoutSafeArea.Screen
        options={noHeader}
        component={Help}
        name={Routes.Help}
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
      // initialRouteName={RouteNavigators.WithoutSafeAreaNavigator}
      initialRouteName={RouteNavigators.WithSafeAreaNavigator}
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
