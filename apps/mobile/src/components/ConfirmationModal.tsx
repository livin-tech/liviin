import React from 'react';
import { Button, Divider, Headline, Modal, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export function ConfirmationModal({
  show,
  onDismiss,
  onConfirm,
  children,
}: any) {
  return (
    <Modal
      visible={show}
      onDismiss={onDismiss}
      contentContainerStyle={styles.container}
    >
      <Headline style={{ textAlign: 'center', fontFamily: 'Baskervville' }}>
        Ready!
      </Headline>
      <Divider style={{ marginVertical: 8 }} />
      {children}
      <Button
        mode="contained"
        style={{ borderRadius: 20, marginTop: 16 }}
        onPress={onConfirm}
      >
        Continue
      </Button>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    margin: 50,
    borderRadius: 10,
  },
});
