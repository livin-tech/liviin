import LottieView from 'lottie-react-native';
import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from './Home';
import { AppBar } from './AppBar';

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
      initialRouteName="Home"
      screenOptions={{
        header: ({ navigation }) => <AppBar navigation={navigation} />,
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      {/*<Drawer.Screen name="Settings" component={SettingsScreen} />*/}
    </Drawer.Navigator>
  );
};
