import { StyleSheet, View } from 'react-native';
import { Header } from './Header';
import { theme } from '../theme';

export const ScreenLayout = ({ headerTitle, children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header headerTitle={headerTitle} />
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
    padding: 12,
  },
  header: {
    marginBottom: 16,
  },
});
