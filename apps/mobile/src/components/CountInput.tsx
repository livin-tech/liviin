import { useEffect, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity, View, Text } from 'react-native';

import { theme } from '@/src/theme';

export const CountInput = ({ onValueChange }: any) => {
  const [count, setCount] = useState('0');

  useEffect(() => {
    onValueChange && onValueChange(count);
  }, [count]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          const val = Number.parseInt(count);
          !!val && setCount((val - 1).toString());
        }}
      >
        <Text style={{ color: '#FFF' }}>-</Text>
      </TouchableOpacity>
      <TextInput
        onBlur={() => !count && setCount('0')}
        maxLength={3}
        keyboardType="numeric"
        style={styles.input}
        value={count}
        onChangeText={(e) => setCount(e)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount((Number.parseInt(count) + 1).toString())}
      >
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
