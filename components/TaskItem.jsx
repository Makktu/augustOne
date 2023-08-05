import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

export default function TaskItem({ taskData, deleteTask, taskDone }) {
  return (
    <Pressable
      onPress={() => {
        console.log('delete pressed');
        if (taskDone) {
          deleteTask(taskData.id);
        } else if (!taskDone) {
          taskDone = true;
        }
      }}
    >
      <View
        style={[taskDone ? styles.taskItemStyle : styles.undoneTaskItemStyle]}
      >
        <View style={styles.mainPanel}>
          <Text style={styles.taskTextStyle}>{taskData.task}</Text>
        </View>
        <View style={styles.doneStyle}>
          {taskDone ? (
            <Text style={styles.taskTextStyle}>✅</Text>
          ) : (
            <Text style={styles.taskTextStyle}>😢</Text>
          )}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  taskItemStyle: {
    width: '98%',
    height: 100,
    backgroundColor: '#1f9f4e',
    margin: 5,
    borderRadius: 4,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  undoneTaskItemStyle: {
    width: '98%',
    height: 100,
    backgroundColor: '#ab2121',
    margin: 5,
    borderRadius: 4,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  taskTextStyle: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
  },
  mainPanel: {
    justifyContent: 'center',
  },
  doneStyle: {
    justifyContent: 'center',
  },
});
