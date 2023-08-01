// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Pressable } from 'react-native';
import ModalInput from './components/ModalInput';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const summonModal = () => {
    setModalVisible(true);
  };

  const dismissModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ModalInput visible={modalVisible} dismissModal={dismissModal} />
      <StatusBar barStyle='light-content' />
      <Pressable style={styles.tempPressable} onPress={() => summonModal()}>
        <Text style={styles.btnTextStyle}>NEW ENTRY</Text>
      </Pressable>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#181a32',
  },
  mainTextStyle: {
    color: 'orangered',
    fontSize: 20,
  },
  secondaryTextStyle: {
    color: 'whitesmoke',
  },
  tempPressable: {
    width: '75%',
    height: 60,
    backgroundColor: '#3bb130',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    margin: 20,
    borderRadius: 15,
  },
  btnTextStyle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});
