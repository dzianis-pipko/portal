import axios from 'axios'
import { TASKS_POST_SUCCESS } from './actionTypes'
import { fetchTasks } from './tasks'

export function tasksPostFetch({ theme, text }) {
   return async dispatch => {
      try {
         const response = await axios.post('https://redevcrm.herokuapp.com/tasks', { theme, text })
         dispatch(tasksPostSuccess(response.data))
         dispatch(fetchTasks())
      } catch (e) {
         console.log(e);
      }
   }
}

const tasksPostSuccess = (currentTasks) => {
   return {
      type: TASKS_POST_SUCCESS,
      currentTasks
   }
}