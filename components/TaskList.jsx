import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import TaskItem from './TaskItem';

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { task: 'Testing1', taskDone: false, id: 999 },
    { task: 'Testing2', taskDone: false, id: 998 },
    { task: 'Testing3', taskDone: false, id: 997 },
    { task: 'Testing4', taskDone: false, id: 996 },
  ]);
  return (
    <View>
      <FlatList
        data={tasks}
        renderItem={(taskData) => {
          return <TaskItem taskData={taskData} id={taskData.id} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
