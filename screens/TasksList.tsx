
import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native';
import {connect, useDispatch} from 'react-redux'
import {fetchTasks} from '../redux/actions/actions';
import { ListItem } from 'react-native-elements'

  function TasksList( props: any ) {
    const dispatch = useDispatch();
    
    useEffect(() => {
      props.dispatch(fetchTasks())
    }, [])

    const goAddTask = () => {
      props.navigation.navigate('AddTask')
    }

    return (
        <View>
          <Button onPress={() => goAddTask()} title="Add task"/>
          <View>
          {
              props.tasks.map((task: any) => (
                <ListItem key={task.id} bottomDivider onPress={() => {
                  props.navigation.navigate('TaskDetails', {
                    taskId: task.id
                  })
                }}>
                <ListItem.Content>
                  <ListItem.Title>{task.title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
              ))
            }
          </View>
        </View>
    )
}

export default connect((state) => {
  return state
})(TasksList)

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });
  