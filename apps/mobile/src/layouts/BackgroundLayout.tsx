import React, { ReactNode } from 'react';
import { Dimensions, StyleSheet, View, ImageBackground } from 'react-native';

import { Images } from '../assets';

interface BackgroundLayoutProps {
  children: ReactNode;
}

export const BackgroundLayout: React.FC<BackgroundLayoutProps> = ({
  children,
}) => (
  <View style={styles.container}>
    <ImageBackground
      style={styles.backgroundImage}
      source={Images.PrimaryBackground}
    >
      <View style={styles.overlay}>{children}</View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'contain' based on your requirement
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Optional: Overlay with a semi-transparent background
    alignItems: 'center',
  },
});
