import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import quotations from '../helpers/quotes';

export default function Quotations() {
  let randomNumber = Math.floor(Math.random() * quotations.length);
  return (
    <View style={styles.displayStyle}>
      <Text style={styles.quoteStyle}>{quotations[randomNumber].quote}</Text>
      <Text style={styles.attrStyle}>{quotations[randomNumber].quotee}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  displayStyle: {
    height: 200,
    width: '100%',
    padding: 35,
  },
  quoteStyle: {
    fontStyle: 'italic',
    fontSize: 14,
    color: 'yellow',
  },
  attrStyle: {
    fontSize: 10,
    color: 'white',
  },
});
