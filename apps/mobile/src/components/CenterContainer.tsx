import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface CenterContainerProps {
  children: React.ReactNode;
  direction: 'horizontal' | 'vertical';
  style?: ViewStyle; // Additional style prop for flexibility
}

export const CenterContainer: React.FC<CenterContainerProps> = ({
  children,
  direction,
  style,
}) => {
  // Conditionally apply justifyContent and alignItems based on props
  const containerStyles = [
    styles.container,
    direction === 'horizontal' && { justifyContent: 'center' },
    direction === 'vertical' && { alignItems: 'center' },
    ...(Array.isArray(style) ? style : [style]), // Handle both single and array styles
  ];

  return <View style={containerStyles}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {},
});
