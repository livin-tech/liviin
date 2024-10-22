import { ScreenLayout } from '../../layouts';
import { CenterContainer, Spacer } from '../../components';
import CalendarRound from '../../assets/icons/components/CalendarRound';
import { Headline } from 'react-native-paper';
import { PropertyCarousel } from './propertyCarousel';
import { Calendar, DateData } from 'react-native-calendars';
import { theme } from '../../theme';
import { View, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { Routes } from '../../navigation';

const PROPERTY_DATA_MOCK = {
  0: ['2024-07-01', '2024-07-02', '2024-07-03'],
  1: ['2024-07-09', '2024-07-05', '2024-07-06'],
  2: ['2024-07-14', '2024-07-08', '2024-07-09'],
  3: ['2024-07-01', '2024-07-02', '2024-07-03'],
  4: ['2024-07-01', '2024-07-02', '2024-07-03'],
  5: ['2024-07-01', '2024-07-02', '2024-07-03'],
};

export const CalendarScreen = ({ navigation }) => {
  const [currentDate, setCurrentDate] = useState<DateData>({
    dateString: '2024-07-01',
    day: 1,
    month: 7,
    year: 2024,
    timestamp: new Date().getTime(),
  });
  const [selectProperty, setSelectProperty] = useState(0);

  const [selected, setSelected] = useState(PROPERTY_DATA_MOCK[selectProperty]);

  const markedDates = selected.reduce((acc, x) => {
    acc[x] = {
      selected: true,
      selectedColor: theme.colors.primary,
    };
    return acc;
  }, {});

  useEffect(() => {
    setSelected(PROPERTY_DATA_MOCK[selectProperty]);
  }, [selectProperty]);


  return (
    <ScreenLayout headerTitle="Maintenance calendar">
      <CenterContainer direction="vertical">
        {/* == Calendar ==  */}
        <CalendarRound />
        <Headline style={{ marginVertical: 16 }}>
          {new Date(currentDate.timestamp).toLocaleString('default', {
            month: 'long',
          })}{' '}
          {currentDate.year}
        </Headline>

        {/* == Property Carousel == */}
        <PropertyCarousel
          selectedProperty={selectProperty}
          onPropertySelect={(x) => setSelectProperty(x)}
        />

        {/* == Calendar View == */}
        <View style={styles.container}>
          <Calendar
            style={styles.calendar}
            onDayPress={(day) => {
              if (selected.includes(day.dateString)) {
                navigation.navigate(Routes.Tasks, {
                  propertyName: 'House ' + day.day,
                });
              }
            }}
            onVisibleMonthsChange={(x) => setCurrentDate(x[0])}
            markedDates={{ ...markedDates }}
            theme={{
              arrowColor: 'black',
              dayTextColor: '#1D1B20',
              todayTextColor: '#1D1B20',
            }}
          />
        </View>
      </CenterContainer>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 16,
  },
  calendar: {
    borderWidth: 1,
    borderColor: theme.colors.disabled,
    borderRadius: 16,
    padding: 8,
  },
});
