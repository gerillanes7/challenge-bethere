import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import TasksList from './screens/TasksList';

import {applyMiddleware, createStore} from 'redux'
import {tasksReducer} from './redux/reducers/TasksReducer'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import TaskDetails from './screens/TaskDetails';
import AddTask from './screens/AddTask';

const store = createStore(tasksReducer, applyMiddleware(thunk));

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{title: 'Log in'}}/>
            <Stack.Screen name="TasksList" component={TasksList} options={{title: 'Tasks To Do'}}/>
            <Stack.Screen name="AddTask" component={AddTask} options={{title: 'Add new task'}}/>
            <Stack.Screen name="TaskDetails" component={TaskDetails} options={{title: 'Task Details'}}/>
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>

  );
}
