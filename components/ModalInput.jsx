import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Modal,
  Pressable,
} from 'react-native';
import Quotations from './Quotations';

export default function ModalInput({ visible, dismissModal }) {
  const [enteredText, setEnteredText] = useState('');
  const [quoteShowing, setQuoteShowing] = useState(true);

  const textInputHandler = (enteredText) => {
    setEnteredText(enteredText);
  };

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.container}>
        <View style={styles.quoteArea}>
          {quoteShowing ? <Quotations /> : null}
        </View>
        <TextInput
          style={styles.textInputStyle}
          value={enteredText}
          placeholder='Enter Something'
          placeholderTextColor='#504c4c'
          onChangeText={() => {
            setQuoteShowing(false);
            textInputHandler();
          }}
        />
        <Pressable
          style={styles.saveBtnStyle}
          onPress={() => {
            setEnteredText('');
            setQuoteShowing(true);
            dismissModal();
          }}
        >
          <Text style={styles.cancelBtnStyle}>SAVE</Text>
        </Pressable>
        <Pressable
          style={styles.btnStyle}
          onPress={() => {
            setEnteredText('');
            setQuoteShowing(true);
            dismissModal();
          }}
        >
          <Text style={styles.cancelBtnStyle}>CANCEL</Text>
        </Pressable>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#181a1a',
  },
  btnStyle: {
    width: '75%',
    height: 60,
    backgroundColor: '#f30909',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    margin: 20,
    borderRadius: 15,
  },
  saveBtnStyle: {
    width: '75%',
    height: 60,
    backgroundColor: '#317720',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    margin: 20,
    borderRadius: 15,
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    width: '100%',
    padding: 4,
    fontSize: 22,
    color: 'white',
  },
  cancelBtnStyle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  quoteArea: {
    height: 200,
    width: '100%',
  },
});
