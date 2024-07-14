import React from 'react';
import {
  Text as PaperText,
  TextProps as PaperTextProps,
} from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

// Utils
import { theme } from '../theme';

// Styles
const styles = StyleSheet.create({
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  h2: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  h3: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  h4: {
    fontSize: 22,
    fontWeight: '500',
    color: theme.colors.text,
  },
  body1: {
    fontSize: 16,
    color: theme.colors.text,
  },
  body2: {
    fontSize: 14,
    color: theme.colors.text,
  },
  caption: {
    fontSize: 12,
    color: theme.colors.text,
  },
});

// PropTypes
interface StyledTextProps extends Omit<PaperTextProps, 'theme'> {
  variant?: keyof typeof styles;
  theme?: object;
  color?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  translationKey?: string;
}

// Component
export const StyledText: React.FC<StyledTextProps> & {
  H1: React.FC<StyledTextProps>;
  H2: React.FC<StyledTextProps>;
  H3: React.FC<StyledTextProps>;
  H4: React.FC<StyledTextProps>;
  Body1: React.FC<StyledTextProps>;
  Body2: React.FC<StyledTextProps>;
  Caption: React.FC<StyledTextProps>;
} = ({
  variant = 'body1',
  style,
  color,
  bold,
  italic,
  underline,
  children,
  translationKey,
  ...props
}) => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  // Determine content to render based on translationKey
  const content = translationKey ? t(translationKey) : children;
  return (
    <PaperText
      style={[
        styles[variant],
        color && { color },
        bold && { fontWeight: 'bold' },
        italic && { fontStyle: 'italic' },
        underline && { textDecorationLine: 'underline' },
        style,
      ]}
      {...props}
    >
      {content}
    </PaperText>
  );
};

// Variants
StyledText.H1 = (props) => <StyledText {...props} variant="h1" />;
StyledText.H2 = (props) => <StyledText {...props} variant="h2" />;
StyledText.H3 = (props) => <StyledText {...props} variant="h3" />;
StyledText.H4 = (props) => <StyledText {...props} variant="h4" />;
StyledText.Body1 = (props) => <StyledText {...props} variant="body1" />;
StyledText.Body2 = (props) => <StyledText {...props} variant="body2" />;
StyledText.Caption = (props) => <StyledText {...props} variant="caption" />;
