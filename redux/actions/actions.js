import {
    SHOW_TASKS, 
    SUCCESS_SHOW_TASKS, 
    SHOW_TASK_TO_EDIT, 
    SUCCESS_SHOW_TASK_TO_EDIT,
    ADD_TASK,
    DELETE_TASK,
    UPDATE_TASK
} from './actionsTypes'

const showTasks = payload => ({
    type: SHOW_TASKS,
    ...payload
})

const successShowTasks = payload => ({
    type: SUCCESS_SHOW_TASKS,
    ...payload
})

const showTaskToEdit = payload => ({
    type: SHOW_TASK_TO_EDIT,
    ...payload
})

const successShowTaskToEdit = payload => ({
    type: SUCCESS_SHOW_TASK_TO_EDIT,
    ...payload
})

const addTask = payload => ({
    type: ADD_TASK,
    ...payload
})

const deleteTask = payload => ({
    type: DELETE_TASK,
    ...payload
})

const updateTask = payload => ({
    type: UPDATE_TASK,
    ...payload
})

export const fetchTasks = () => (dispatch) => {
        dispatch({type: SHOW_TASKS})

        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(tasks => 
            dispatch({
                type: SUCCESS_SHOW_TASKS,
                payload: tasks
            }) 
        )
}

export const fetchTaskToEdit = (id) => (dispatch) => {
    dispatch({type: SHOW_TASK_TO_EDIT})

    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => response.json())
    .then(task =>
        dispatch({
            type: SUCCESS_SHOW_TASK_TO_EDIT,
            payload: task
        })
    )
}

export const fetchAddTask = (task) => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => response.json())
    .then(json => {
        dispatch({
            type: ADD_TASK,
            payload: json
        })
    })
}

export const fetchDeleteTask = id => dispatch => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    })
}

export const fetchUpdateTask = (task, id) => dispatch => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify(task),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => response.json())
    .then(tasks => {
        dispatch({
            type: UPDATE_TASK,
            payload: tasks
        })
    })
}