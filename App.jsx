// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Pressable } from 'react-native';
import ModalInput from './components/ModalInput';
import TaskList from './components/TaskList';
import getUniqueKey from './helpers/getUniqueKey';
// import allTasks from './helpers/testTasks';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [allTasks, setAllTasks] = useState([
    { task: 'Testing1', taskDone: false, id: 999 },
    { task: 'Testing2', taskDone: true, id: 998 },
    { task: 'Testing3', taskDone: true, id: 997 },
    { task: 'Testing4', taskDone: false, id: 996 },
    { task: 'Testing1', taskDone: true, id: 995 },
    { task: 'Testing2', taskDone: true, id: 994 },
    { task: 'Testing3', taskDone: true, id: 993 },
    { task: 'Testing4', taskDone: false, id: 992 },
  ]);

  const summonModal = () => {
    setModalVisible(true);
  };

  const dismissModal = () => {
    setModalVisible(false);
  };

  const addTaskHandler = (enteredText) => {
    let newKey = getUniqueKey(allTasks);
    console.log(newKey, enteredText, '✅');
  };

  return (
    <View style={styles.container}>
      <ModalInput
        visible={modalVisible}
        addTaskHandler={addTaskHandler}
        dismissModal={dismissModal}
      />
      <StatusBar barStyle='light-content' />
      <View style={styles.topViewStyle}>
        <Text style={styles.mainTextStyle}>OrganiZer</Text>
        <Pressable style={styles.tempPressable} onPress={() => summonModal()}>
          <Text style={styles.btnTextStyle}>NEW ENTRY</Text>
        </Pressable>
        <Pressable
          style={styles.showTasksBtn}
          onPress={() => console.log('show tasks pressed')}
        >
          <Text style={styles.btnTextStyle}>Show Tasks</Text>
        </Pressable>
      </View>
      <View style={styles.taskContainer}>
        <TaskList allTasks={allTasks} />
      </View>
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
  taskContainer: {
    flex: 2,
    width: '100%',
  },
  mainTextStyle: {
    color: 'orangered',
    fontSize: 44,
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
    margin: 8,
    borderRadius: 15,
  },
  showTasksBtn: {
    width: '75%',
    height: 60,
    backgroundColor: '#7caec6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    margin: 8,
    borderRadius: 15,
  },
  btnTextStyle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  topViewStyle: {
    marginTop: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
