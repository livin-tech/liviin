import LottieView from 'lottie-react-native';
import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from './Home';
import { AppBar } from './AppBar';
import { Terms } from '../terms/Terms';
import { Routes } from '../../navigation';
import { Header } from '../../layouts';

const Drawer = createDrawerNavigator();

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
    <Drawer.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{
        header: ({ navigation, route }) => {
          if (route.name === Routes.Home) {
            return <AppBar navigation={navigation} />;
          }
          return null;
          // return <Header headerTitle="" />;
        },
      }}
    >
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Terms} component={Terms}  />
    </Drawer.Navigator>
  );
};
