import React from 'react';
import {
  Button as PaperButton,
  ButtonProps as PaperButtonProps,
} from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Utils
import { theme } from '../theme';

// Styles
const styles = StyleSheet.create({
  defaultButton: {
    borderRadius: 16,
  },
  outlinedButton: {
    borderWidth: 1,
    borderColor: theme.colors.background, // Default border color
  },
  textButton: {
    backgroundColor: 'transparent',
  },
});

// PropTypes
type OmitPaperButtonProps = Omit<PaperButtonProps, 'theme' | 'children'>;

interface StyledButtonProps extends OmitPaperButtonProps {
  variant?: 'contained' | 'outlined' | 'text'; // Button variant types
  translationKey?: string; // Translation key for fetching localized text
  svgIconLeft?: React.ReactNode; // Svg Left Icon
  svgIconRight?: React.ReactNode; // Svg Right Icon
  iconLeft?: string; // Material Left icon name
  iconRight?: string; // Material Right icon name
  children?: React.ReactNode; // Optional button content
}
// Component
export const StyledButton: React.FC<StyledButtonProps> = ({
  variant = 'contained',
  translationKey,
  svgIconLeft,
  svgIconRight,
  iconLeft,
  iconRight,
  children,
  ...props
}) => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  // Determine content to render based on translationKey
  const content = translationKey ? t(translationKey) : children;

  // Render svg left icon
  const renderSvgLeftIcon = svgIconLeft && (
    <View style={{ marginRight: 8 }}>{svgIconLeft}</View>
  );

  // Render svg right icon
  const renderSvgRightIcon = svgIconRight && (
    <View style={{ marginLeft: 8 }}>{svgIconRight}</View>
  );

  // Render material left icon if iconLeft is provided
  const renderLeftIcon = iconLeft && <Icon name={iconLeft} size={24} />;

  // Render material right icon if iconRight is provided
  const renderRightIcon = iconRight && <Icon name={iconRight} size={24} />;

  // Choose the provided Icons
  const LeftIcon = () => renderSvgLeftIcon || renderLeftIcon;
  const RightIcon = () => renderSvgRightIcon || renderRightIcon;

  const combinedStyles = [
    styles[`${variant}Button` as keyof typeof styles], // Access variant styles dynamically
    props.style,
  ];

  return (
    <PaperButton
      style={combinedStyles}
      uppercase={false}
      {...props}
      icon={() => (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <LeftIcon />
          <RightIcon />
        </View>
      )}
    >
      {content}
      {/* <StyledText color="white">{content}</StyledText> */}
    </PaperButton>
  );
};

// Button Variants
export const ContainedButton: React.FC<StyledButtonProps> = (props) => (
  <StyledButton {...props} variant="contained" />
);

export const OutlinedButton: React.FC<StyledButtonProps> = (props) => (
  <StyledButton {...props} variant="outlined" />
);

export const TextButton: React.FC<StyledButtonProps> = (props) => (
  <StyledButton {...props} variant="text" />
);
