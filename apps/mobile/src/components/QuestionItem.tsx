import {
  Text,
  Card,
  Headline,
  Paragraph,
  TextInput,
  TextInputProps,
  DefaultTheme,
} from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { CountInput } from './CountInput';
import React from 'react';
import { theme as AppTheme } from '../theme';
import { StyledText } from './StyledText';

interface ItemProps {
  icon?: React.ElementType;
  text: string;
  children?: React.ReactNode;
  input?: () => React.JSX.Element;
}

function Item({
  icon: Icon,
  text,
  input: Input = CountInput,
  onInputValueChange,
  children,
}: any) {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.cardContent}>
          <View style={styles.subContent}>
            {Icon && (
              <View style={styles.icon}>
                <Icon />
              </View>
            )}
            <Paragraph style={styles.text}>{text}</Paragraph>
            {children}
          </View>
          {Input.name === 'CountInput' ? (
            // @ts-ignore
            <Input onValueChange={onInputValueChange} />
          ) : (
            Input()
          )}
        </View>
      </Card.Content>
    </Card>
  );
}

function ItemTextInput({
  heading,
  theme = AppTheme,
  children,
  ...props
}: Partial<TextInputProps> & { heading: string }) {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Paragraph>{heading}</Paragraph>
        <TextInput style={styles.textInput} {...props} />
        {children}
      </Card.Content>
    </Card>
  );
}

export default {
  Item,
  ItemTextInput,
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    borderRadius: 12,
    backgroundColor: 'rgba(210, 216, 190, 0.1)',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: 'transparent',
    fontSize: 13,
  },
  text: {
    marginLeft: 8,
  },
  icon: {
    backgroundColor: '#FFF',
    borderRadius: 30,
    padding: 4,
  },
});
