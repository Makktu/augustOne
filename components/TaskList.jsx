import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ allTasks }) {
  return (
    <View>
      <FlatList
        data={allTasks}
        renderItem={(taskData) => {
          return (
            <TaskItem
              taskData={taskData.item}
              taskDone={taskData.item.taskDone}
              id={taskData.item.id}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
