import { StyleSheet, View } from 'react-native';

import { theme } from '@/src/theme';
import { Header } from '@/src/components';

export const ScreenLayout = ({ headerTitle, children, right }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {headerTitle ? (
          <Header headerTitle={headerTitle} right={right} />
        ) : null}
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
