import { StyleSheet, Image, View } from 'react-native';
import { ScreenLayout } from '../../layouts';
import { Button, ProgressBar, Subheading, Switch } from 'react-native-paper';
import React from 'react';
import { Images } from '../../assets';
import QuestionItem from '../../components/QuestionItem';
import { AppleLogo } from '../../assets/icons/AppleLogo';
import Wind from '../../assets/icons/Wind';
import { theme } from '../../theme';
// import { Image } from 'react-native-svg';

export function Step2({ navigation }) {
  return (
    <ScreenLayout headerTitle="Question 1">
      <View style={{alignItems: 'center'}}>
        <View style={{width: 200, marginVertical: 16}}>
          <ProgressBar progress={0.5} color={theme.colors.primary}/>
        </View>
      </View>
      <Image
        source={Images.AC}
      />
      <Subheading>
        This is the description about why maintenance of AC is important.
      </Subheading>
      <QuestionItem.Item
        icon={Wind}
        text="Do you have an AC?"
        input={() => (
          <Switch value={true} onValueChange={() => {}} />
        )}
      />

      <QuestionItem.Item
        text="How many AC(s)?"
      />

      <Button
        mode="contained"
        style={styles.submitButton}
        onPress={() => navigation.navigate('Step3')}
      >
        Next
      </Button>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  submitButton: {
    borderRadius: 20,
  },
});
