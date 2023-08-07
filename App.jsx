// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Pressable } from 'react-native';
import ModalInput from './components/ModalInput';
import TaskList from './components/TaskList';
import getUniqueKey from './helpers/getUniqueKey';
import startingTasks from './helpers/testTasks';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [allTasks, setAllTasks] = useState(startingTasks);

  const summonModal = () => {
    setModalVisible(true);
  };

  const dismissModal = () => {
    setModalVisible(false);
  };

  const addTaskHandler = (enteredText) => {
    let newKey = getUniqueKey(allTasks);
    setAllTasks((currentAllTasks) => [
      ...currentAllTasks,
      { task: enteredText, taskDone: false, id: newKey },
    ]);
  };

  const changeUndoneToDone = (taskId) => {
    let shallowCopy = [...allTasks];
    shallowCopy.forEach((task) => {
      if (task.id === taskId) task.taskDone = true;
    });
    setAllTasks(shallowCopy);
  };

  const deleteTaskHandler = (deleteId) => {
    setAllTasks((currentAllTasks) => {
      return currentAllTasks.filter((task) => task.id !== deleteId);
    });
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
        {/* <Pressable
          style={styles.showTasksBtn}
          onPress={() => console.log('show tasks pressed')}
        >
          <Text style={styles.btnTextStyle}>Show Tasks</Text>
        </Pressable> */}
      </View>
      <View style={styles.taskContainer}>
        <TaskList
          allTasks={allTasks}
          deleteTaskHandler={deleteTaskHandler}
          setAllTasks={setAllTasks}
          changeUndoneToDone={changeUndoneToDone}
        />
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
