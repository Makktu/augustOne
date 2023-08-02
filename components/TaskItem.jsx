import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function TaskItem({ taskData, deleteTask }) {
  return (
    <View style={styles.taskItemStyle}>
      <Text style>{taskData.task}</Text>
      <Text>{taskData.taskDone}</Text>
      <Text>{taskData.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  taskItemStyle: {
    width: '100%',
    height: 100,
    backgroundColor: 'cyan',
  },
});
