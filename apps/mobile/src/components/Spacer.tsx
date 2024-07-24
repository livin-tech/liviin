import React from 'react';
import { View, StyleSheet } from 'react-native';

// Spacing constants
const SPACING_SIZES = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 22,
};

// Props for the Spacer component
interface SpacerProps {
  size?: keyof typeof SPACING_SIZES; // Size of the spacer
  horizontal?: boolean; // Apply horizontal spacing only
  vertical?: boolean; // Apply vertical spacing only
}

// Spacer component definition
const CustomSpacer: React.FC<SpacerProps> = ({
  size = 'md',
  vertical = true,
  horizontal = false,
}) => {
  const marginStyle = {
    marginHorizontal: horizontal ? SPACING_SIZES[size] : 0,
    marginVertical: vertical ? SPACING_SIZES[size] : 0,
  };

  return <View style={[styles.spacer, marginStyle]} />;
};

// Styles
const styles = StyleSheet.create({
  spacer: {
    width: '100%', // Ensure spacer takes up full width by default
  },
});

// Export a map of spacer sizes for easy usage
export const Spacer = {
  xs: () => <CustomSpacer size="xs" />,
  sm: () => <CustomSpacer size="sm" />,
  md: () => <CustomSpacer size="md" />,
  lg: () => <CustomSpacer size="lg" />,
  xl: () => <CustomSpacer size="xl" />,
};
