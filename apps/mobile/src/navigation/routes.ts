export const RouteNavigators = {
  WithSafeAreaNavigator: 'WithSafeAreaNavigator',
  WithoutSafeAreaNavigator: 'WithoutSafeAreaNavigator',
};

export const RoutesWithSafeAreaView = {
  Landing: 'Landing',
  Login: 'Login',
  Register: 'Register',
  ForgotPassword: 'ForgotPassword',
};

export const RoutesWithoutSafeAreaView = {
  OnBoarding: 'OnBoarding',
};

export const Routes = {
  ...RoutesWithSafeAreaView,
  ...RoutesWithoutSafeAreaView,
};
