import { Card, Paragraph, Subheading, TextInput, TextInputProps } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import { BedIcon } from '../../../assets/icons/BedIcon';
import { CountInput } from '../../../components/CountInput';
import React from 'react';
import { theme } from '../../../theme';

function Item({ icon: Icon, text, }) {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.cardContent}>
          <View style={styles.subContent}>
            <View style={styles.icon}>
              <Icon />
            </View>
            <Paragraph style={styles.text}>{text}</Paragraph>
          </View>
          <CountInput/>
        </View>
      </Card.Content>
    </Card>
  );
}

function ItemTextInput(props: TextInputProps) {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <TextInput
          style={styles.textInput}
          {...props}
        />
      </Card.Content>
    </Card>
  );
}

export default {
  Item,
  ItemTextInput
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    borderRadius: 12,
    backgroundColor: 'rgba(210, 216, 190, 0.1)',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  subContent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textInput: {
    backgroundColor: 'transparent',
    fontSize: 13,
  },
  text: {
    marginLeft: 8
  },
  icon: {
    backgroundColor: '#FFF',
    borderRadius: 30,
    padding: 4
  }
});
