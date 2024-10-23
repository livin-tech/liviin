import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Paragraph, TextInput, TextInputProps } from 'react-native-paper';

import { CountInput } from './CountInput';
import { theme as AppTheme } from '@/src/theme';

interface ItemProps {
  children?: React.ReactNode;
  icon?: React.ElementType;
  input?: React.FC;
  onInputValueChange?: (value: string) => void;
  text: string;
}

function Item({
  icon: Icon,
  text,
  input: Input = CountInput,
  onInputValueChange,
  children,
}: ItemProps) {
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
            <Input />
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
