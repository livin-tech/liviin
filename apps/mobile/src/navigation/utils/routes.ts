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
  Help: 'Help',
};

export const RoutesWithoutSafeAreaView = {
  OnBoarding: 'OnBoarding',
  OnBoardingStep1: 'Step1',
  OnBoardingStep2: 'Step2',
  OnBoardingStep3: 'Step3',
  Home: 'Home',
  Calendar: 'Calender',
};

export const Routes = {
  ...RoutesWithSafeAreaView,
  ...RoutesWithoutSafeAreaView,
};
