import { SHOW_TASKS, 
    SUCCESS_SHOW_TASKS,
    SHOW_TASK_TO_EDIT, 
    SUCCESS_SHOW_TASK_TO_EDIT, 
    ADD_TASK,
    DELETE_TASK,
    UPDATE_TASK 
} from "../actions/actionsTypes";

const initialState = {
    tasks: [],
    task: {}
}

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_TASKS: 
            return {
                ...state
            }
        case SUCCESS_SHOW_TASKS:
            return {
                ...state,
                tasks: action.payload
            }
        case SHOW_TASK_TO_EDIT: 
            return {
                ...state
            }
        case SUCCESS_SHOW_TASK_TO_EDIT:
            return {
                ...state,
                task: action.payload
            }
        case ADD_TASK:
            const tasks = state.tasks.concat(action.payload)
            return {
                ...state,
                tasks
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload)
            }
        case UPDATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task)
            }
        default:
            return state;
    }
}