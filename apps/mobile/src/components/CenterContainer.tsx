import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface CenterContainerProps {
  children: React.ReactNode;
  horizontal?: boolean;
  vertical?: boolean;
  style?: ViewStyle; // Additional style prop for flexibility
}

export const CenterContainer: React.FC<CenterContainerProps> = ({
  children,
  horizontal = false,
  vertical = true,
  style,
}) => {
  // Conditionally apply justifyContent and alignItems based on props
  const containerStyles = [
    styles.container,
    horizontal && { justifyContent: 'center' },
    vertical && { alignItems: 'center' },
    ...(Array.isArray(style) ? style : [style]), // Handle both single and array styles
  ];

  return <View style={containerStyles}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
