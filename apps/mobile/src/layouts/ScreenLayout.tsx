import { StyleSheet, View } from 'react-native';
import { Header } from './Header';
import { theme } from '../theme';

export const ScreenLayout = ({ headerTitle, children, right }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {headerTitle && <Header headerTitle={headerTitle} right={right} />}
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
