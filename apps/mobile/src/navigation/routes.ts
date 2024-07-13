export const RouteNavigators = {
  WithSafeAreaNavigator: 'WithSafeAreaNavigator',
  WithoutSafeAreaNavigator: 'WithoutSafeAreaNavigator',
};

export const RoutesWithSafeAreaView = {
  Landing: 'Landing',
};

export const RoutesWithoutSafeAreaView = {
  OnBoarding: 'OnBoarding',
};

export const Routes = {
  ...RoutesWithSafeAreaView,
  ...RoutesWithoutSafeAreaView,
};
