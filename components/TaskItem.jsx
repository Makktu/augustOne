import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function TaskItem({ taskData, deleteTask, taskDone }) {
  return (
    <View
      style={[taskDone ? styles.taskItemStyle : styles.undoneTaskItemStyle]}
    >
      <View style={styles.mainPanel}>
        <Text style={styles.taskTextStyle}>{taskData.task}</Text>

        {/* <Text style={{ fontSize: 8 }}>{taskData.id}</Text> */}
      </View>
      <View style={styles.doneStyle}>
        {taskDone ? (
          <Text style={styles.taskTextStyle}>✅</Text>
        ) : (
          <Text style={styles.taskTextStyle}>😢</Text>
        )}
      </View>
    </View>
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
