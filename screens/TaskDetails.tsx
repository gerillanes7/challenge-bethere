import React, {useEffect, useState} from 'react'
import {Text, View, Button, TextInput, StyleSheet, Alert} from 'react-native'
import {connect, useDispatch} from 'react-redux'
import {fetchTaskToEdit, fetchDeleteTask, fetchUpdateTask} from '../redux/actions/actions'

function TaskDetails(props: any) {
    
    const dispatch = useDispatch();

    const [task, setTask] = useState({
        id: '',
        userId: '',
        title: ''
    })


    const taskId = props.route.params.taskId

    useEffect(() => {
        props.dispatch(fetchTaskToEdit(taskId))
    }, [])

    useEffect(() => {
        setTask({...task, id: props.task.id, userId: props.task.userId, title: props.task.title})
    }, [props.task])

    const deleteTask = () => {
        props.dispatch(fetchDeleteTask(taskId))
        props.navigation.navigate('TasksList')
    }

    const updateTask = () => {
        const updateTask = {
            id: task.id,
            userId: task.userId,
            title: task.title
        }

        props.dispatch(fetchUpdateTask(updateTask, taskId))
        props.navigation.navigate('TasksList')
    }
    

    return (
        <View style={styles.container}>
            <View>
                <TextInput style={styles.input} value={task.id || ''} editable={false}/>
            </View>
            <View>
                <TextInput style={styles.input} value={task.userId || ''} keyboardType='numeric' onChangeText={(userId) => setTask({...task, userId: userId})}/>
            </View>
            <View>
                <TextInput style={styles.input} value={task.title || ''} onChangeText={(title) => setTask({...task, title: title})}/>
            </View>
            <View>
                <Button color='#19AC52' onPress={() => updateTask()} title="Update Task" />
            </View>
            <View>
                <Button color='#E37399' onPress={() => deleteTask()} title="Delete Task" />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35
    },
    input: {
        height: 50,
        backgroundColor: '#e8e8e8',
        marginBottom: 10,
        padding: 10,
        borderRadius: 13
    }
  });

export default connect((state) => {
    return state
})(TaskDetails)