import { StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

import { ScreenLayout } from '@/src/layouts';

export const Help = () => {
  return (
    <ScreenLayout headerTitle="Help">
      <List.Section>
        <List.Accordion title="What is React Native?" style={styles.accordion}>
          <List.Item
            title="React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows, and UWP by enabling developers to use the React framework along with native platform capabilities."
            titleNumberOfLines={5} // Limit number of lines
          />
        </List.Accordion>

        <List.Accordion
          title="How do I install React Native Paper?"
          style={styles.accordion}
        >
          <List.Item
            title="You can install React Native Paper using npm or yarn. Use the command `npm install react-native-paper` or `yarn add react-native-paper`."
            titleNumberOfLines={5} // Limit number of lines
          />
        </List.Accordion>

        <List.Accordion
          title="Can I use React Native for both iOS and Android?"
          style={styles.accordion}
        >
          <List.Item
            title="Yes, React Native allows you to write your application using JavaScript and React, and then it renders using native components on both iOS and Android."
            titleNumberOfLines={5} // Limit number of lines
          />
        </List.Accordion>

        <List.Accordion
          title="What is React Native Paper?"
          style={styles.accordion}
        >
          <List.Item
            title="React Native Paper is a library that provides theming and components for building a Material Design compliant user interface in React Native applications."
            titleNumberOfLines={5} // Limit number of lines
          />
        </List.Accordion>
      </List.Section>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  accordion: {
    backgroundColor: '#fff',
  },
});
