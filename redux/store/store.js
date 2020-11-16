import {applyMiddleware, createStore} from 'redux'
import tasksReducer from '../reducers/TasksReducer'
import thunk from 'redux-thunk'

export const store = createStore(tasksReducer, applyMiddleware(thunk));