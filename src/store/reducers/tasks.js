import { TASKS_FETCH_START, TASKS_FETCH_SUCCESS, TASKS_FETCH_ERROR } from '../actions/actionTypes'

const initialState = {
   currentTasks: [],
   loader: false,
   error: null
}

export default function tasksReducers(state = initialState, action) {
   switch (action.type) {
      case TASKS_FETCH_START:
         return { ...state, loader: true }
      case TASKS_FETCH_SUCCESS:
         return { ...state, loader: false, currentTasks: action.newTasksArray }
      case TASKS_FETCH_ERROR:
         return { ...state, loader: false, error: action.error }
      default:
         return state
   }
}