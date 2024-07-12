import { Button, Headline, Paragraph, Subheading } from 'react-native-paper';
import { Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../../theme';
import { RightArrow } from '../../assets/icons/RightArrow';
import React from 'react';

export const Landing = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Headline>This is a Headline</Headline>
      <Subheading>This is a sub-heading</Subheading>
      <Paragraph>This is a paragraph</Paragraph>
      <Text>This is a text</Text>
      <Button style={{backgroundColor: theme.colors.background, borderRadius: 20, padding: 8}}
              onPress={() => navigation.navigate('OnBoarding' as never)}>
        <RightArrow/>
      </Button>
    </View>
  )
}
