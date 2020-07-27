import { TASKS_POST_SUCCESS } from '../actions/actionTypes'

const initialState = {
   currentTasks: {}
}

export default function tasksPostReducer(state = initialState, action) {
   switch (action.type) {
      case TASKS_POST_SUCCESS:
         return { ...state, currentTasks: action.currentTasks }
      default:
         return state
   }
}