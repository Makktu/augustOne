import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function TaskItem({ taskData, deleteTask, taskDone }) {
  return (
    <View style={styles.taskItemStyle}>
      <Text style>{taskData.task}</Text>
      <Text>{taskDone ? <Text>Done! ✅</Text> : <Text>Not Done 😢</Text>}</Text>
      <Text>{taskData.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  taskItemStyle: {
    width: '100%',
    height: 100,
    backgroundColor: '#0bec5e',
    margin: 5,
    borderRadius: 4,
    padding: 20,
  },
});
