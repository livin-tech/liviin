import React from 'react';
import { Button, Divider, Headline, Modal } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { HorizontalLayout } from '../layouts';

export function ConfirmationModal({
  show,
  onDismiss,
  onConfirm,
  children,
  dismissText = 'Cancel',
  confirmText = 'Confirm',
  headline = 'Ready!',
  showDivider = true,
}: any) {
  return (
    <Modal
      visible={show}
      onDismiss={onDismiss}
      contentContainerStyle={styles.container}
    >
      {headline ? (
        <Headline style={{ textAlign: 'center', fontFamily: 'Baskervville' }}>
          {headline}
        </Headline>
      ) : null}
      {showDivider ? <Divider style={{ marginVertical: 8 }} /> : null}
      {children}
      <HorizontalLayout style={{ justifyContent: 'space-evenly' }}>
        {dismissText && (
          <Button
            mode="contained"
            style={{ borderRadius: 20, marginTop: 16 }}
            onPress={onDismiss}
          >
            {dismissText}
          </Button>
        )}
        <Button
          mode="contained"
          style={{ borderRadius: 20, marginTop: 16 }}
          onPress={onConfirm}
        >
          {confirmText}
        </Button>
      </HorizontalLayout>
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
