import { Button, Headline, Paragraph, Subheading } from 'react-native-paper';
import { Text, View } from 'react-native';
import { theme } from '../../theme';
import { RightArrowIcon } from '../../assets/icons/RightArrowIcon';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const Landing = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <View style={{ flex: 1 }}>
      <Text>{t('welcome')}</Text>
      <Text>{t('greeting', { name: 'Ameer' })}</Text>
      <Headline>This is a Headline</Headline>
      <Subheading>This is a sub-heading</Subheading>
      <Paragraph>This is a paragraph</Paragraph>
      <Text>This is a text</Text>
      <Button style={{backgroundColor: theme.colors.background, borderRadius: 20, padding: 8}}
              onPress={() => navigation.navigate('OnBoarding' as never)}>
        <RightArrowIcon/>
      </Button>
    </View>
  );
};
