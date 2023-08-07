import { StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';

export default function AlertMessage({ alertMessage }) {
  return <Text style={styles.errorStyle}>{alertMessage}</Text>;
}

const styles = StyleSheet.create({
  errorStyle: {
    fontSize: 22,
    color: 'orange',
    marginBottom: 20,
  },
});
