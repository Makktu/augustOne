import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({
  allTasks,
  deleteTaskHandler,
  changeUndoneToDone,
}) {
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
              deleteTask={deleteTaskHandler}
              changeUndoneToDone={changeUndoneToDone}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
