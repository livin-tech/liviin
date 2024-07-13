import { TouchableOpacity, View, Text } from 'react-native';
import { StyleSheet, TextInput } from 'react-native';
import { theme } from '../theme';

export const CountInput = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: '#FFF' }}>-</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} defaultValue="0" />
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: '#FFF' }}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    borderRadius: 24,
  },
  button: {
    borderRadius: 60,
    backgroundColor: theme.colors.primary,
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 48,
    textAlign: 'center',
  },
});
