import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function GoalsList() {
  const [tasks, setTasks] = useState([
    { task: 'Testing1', taskDone: false, id: 999 },
    { task: 'Testing2', taskDone: false, id: 998 },
    { task: 'Testing3', taskDone: false, id: 997 },
    { task: 'Testing4', taskDone: false, id: 996 },
  ]);
  return (
    <View>
      <Text>GoalsList</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
