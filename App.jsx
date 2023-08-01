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
      <Text style={styles.mainTextStyle}>OrganiZer</Text>
      <Pressable style={styles.tempPressable} onPress={() => summonModal()}>
        <Text style={styles.btnTextStyle}>NEW ENTRY</Text>
      </Pressable>
      {
        // * SHOW TASKS
      }
      <Pressable
        style={styles.showTasksBtn}
        onPress={() => console.log('show tasks pressed')}
      >
        <Text style={styles.btnTextStyle}>Show Tasks</Text>
      </Pressable>
      {
        // * SHOW TASKS
      }
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
    fontSize: 30,
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
  showTasksBtn: {
    width: '75%',
    height: 60,
    backgroundColor: '#7caec6',
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
