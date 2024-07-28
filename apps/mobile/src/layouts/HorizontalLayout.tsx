import { StyleSheet, View } from 'react-native';

export function HorizontalLayout({ style, children }: any) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
