import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import LottieView from 'lottie-react-native';
import { Home } from './Home';
import { AppBar } from './AppBar';
import { Terms } from '../terms/Terms';
import { Routes } from '../../navigation';
import { FAQs } from '../FAQs';
import { theme } from '../../theme';
import { Images } from '../../assets';

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
        },
        drawerActiveTintColor: theme.colors.primary,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Terms} component={Terms} />
      <Drawer.Screen name={Routes.FAQs} component={FAQs} />
    </Drawer.Navigator>
  );
};

// Custom drawer content with logo and footer
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* Drawer navigation items */}
      <DrawerItemList {...props} />

      {/* Footer with logo and copyright at the bottom */}
      <View style={styles.footer}>
        <View style={styles.logoContainer}>
          <Image source={Images.Logo} />
        </View>
        <Text style={styles.copyrightText}>© 2024 Liviin </Text>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
  },
  footer: {
    marginTop: 250,
    padding: 20,
  },
  copyrightText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#777',
  },
});
