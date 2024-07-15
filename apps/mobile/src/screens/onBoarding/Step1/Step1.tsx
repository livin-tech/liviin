import { StyleSheet, Touchable, TouchableOpacity, View } from 'react-native';
import { Button, Card, Checkbox, Divider, Menu, ProgressBar, Subheading, Text } from 'react-native-paper';
import { theme } from '../../../theme';
import QuestionItem from '../../../components/QuestionItem';
import { Icons } from '../../../assets';
import { ScreenLayout } from '../../../layouts';
import React from 'react';
import { LeftArrow } from '../../../assets/icons/LeftArrow';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LANGS } from '../../../utils';
// import {[Calendar](#calendar), [CalendarList](#calendarlist), [Agenda](#agenda)} from 'react-native-calendars';

export function Step1({navigation}) {
  const [type, setType] = React.useState('');
  const [meter, setMeter] = React.useState('MTs');
  const [visible, setVisibility] = React.useState(false);

  return (
    <ScreenLayout headerTitle="Your property is...">
      <KeyboardAwareScrollView>
        <View>
          <View style={{alignItems: 'center'}}>
            <View style={{width: 200, marginVertical: 16}}>
              <ProgressBar progress={0.5} color={theme.colors.primary}/>
            </View>
          </View>
          <Subheading>
            Answer the following questions and then proceed the next question
          </Subheading>
          <Card style={styles.card}>
            <Card.Content>
              <Subheading>Is this a house or apartment?</Subheading>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Checkbox.Item mode="android" color={theme.colors.primary} label="House"
                               status={type === 'APT' ? 'checked' : 'unchecked'} onPress={() => setType('APT')}/>
                <Checkbox.Item mode="android" color={theme.colors.primary} label="Apartment"
                               status={type === 'HSE' ? 'checked' : 'unchecked'} onPress={() => setType('HSE')}/>
              </View>


            </Card.Content>
          </Card>
          <QuestionItem.ItemTextInput
            theme={theme}
            label="e.g beach house"
            // placeholder="e.g beach house"
            heading="Name of the property"
          />
          <QuestionItem.Item icon={Icons.MeasureTape} text="How many">
            <Menu
              visible={visible}
              onDismiss={() => setVisibility(false)}
              anchor={
                <TouchableOpacity
                  // mode="outlined"
                  onPress={() => setVisibility(true)}
                  // color={theme.colors.background}
                  style={styles.buttonContainer}
                >
                  <Text style={styles.marginRight}>{meter}</Text>
                  <Icons.ArrowDownSmall/>
                </TouchableOpacity>
              }
            >
              {['MTs', 'FTs'].map((lang, index) => (
                <React.Fragment key={index}>
                  <Menu.Item onPress={() => {
                    setMeter(lang)
                    setVisibility(false)
                  }} title={lang}/>
                  {index < LANGS.length - 1 && <Divider/>}
                </React.Fragment>
              ))}
            </Menu>
          </QuestionItem.Item>
          <QuestionItem.Item icon={Icons.Bed} text="Rooms"/>
          <QuestionItem.Item icon={Icons.Bathroom} text="Bathrooms"/>
          <Button
            mode="contained"
            style={styles.submitButton}
            onPress={() => navigation.navigate('Step2')}
          >
            Next
          </Button>
        </View>
      </KeyboardAwareScrollView>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
    padding: 12,
  },
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
  submitButton: {
    borderRadius: 20,
    marginTop: 20 * 2
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.backdrop,
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    marginLeft: 4
  },
  marginRight: {
    marginRight: 10,
    fontSize: 12
  },
});
