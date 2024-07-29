export const RouteNavigators = {
  WithSafeAreaNavigator: 'WithSafeAreaNavigator',
  WithoutSafeAreaNavigator: 'WithoutSafeAreaNavigator',
};

export const RoutesWithSafeAreaView = {
  Landing: 'Landing',
  Login: 'Login',
  Register: 'Register',
  ForgotPassword: 'ForgotPassword',
  Terms: 'Terms',
  Profile: 'Profile',
  FAQs: 'FAQs',
};

export const RoutesWithoutSafeAreaView = {
  OnBoarding: 'OnBoarding',
  Home: 'Home',
  Calendar: 'Calender',
  Tasks: 'Tasks',
};

export const Routes = {
  ...RoutesWithSafeAreaView,
  ...RoutesWithoutSafeAreaView,
};
