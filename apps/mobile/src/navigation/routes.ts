export const RouteNavigators = {
  WithSafeAreaNavigator: 'WithSafeAreaNavigator',
  WithoutSafeAreaNavigator: 'WithoutSafeAreaNavigator',
};

export const RoutesWithSafeAreaView = {
  Landing: 'Landing',
  Login: 'Login',
  SignUp: 'SignUp',
  Register: 'Register',
  ForgotPassword: 'ForgotPassword',
  Terms: 'Terms',
  Profile: 'Profile',
  FAQs: 'FAQs',
  Tasks: 'Tasks',
  AddTask: 'AddTask',
};

export const RoutesWithoutSafeAreaView = {
  OnBoarding: 'OnBoarding',
  Home: 'Home',
  Calendar: 'Calender',
};

export const Routes = {
  ...RoutesWithSafeAreaView,
  ...RoutesWithoutSafeAreaView,
};
