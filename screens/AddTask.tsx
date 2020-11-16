import React, {useState} from 'react'
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'
import {connect, useDispatch} from 'react-redux'
import {fetchAddTask} from '../redux/actions/actions'

function AddTask(props: any) {

    const dispatch = useDispatch();

    const [task, setTask] = useState({ title: ''})

    const addNewTask = () => {
        props.dispatch(fetchAddTask(task))
        props.navigation.navigate('TasksList')
    }

    return (
        <View style={styles.container}>
            <View>
                <TextInput style={styles.input} placeholder='Task Title' onChangeText={(title) => setTask({...task, title: title})}/>
            </View>
            <View>
                <Button color='#19AC52' onPress={() => addNewTask()} title="Add Task"/>
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
})(AddTask)