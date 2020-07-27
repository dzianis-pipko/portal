import axios from 'axios'
import { TASKS_FETCH_START, TASKS_FETCH_SUCCESS, TASKS_FETCH_ERROR } from './actionTypes'

export function fetchTasks() {
   return async dispatch => {
      try {
         dispatch(tasksFetchStart())
         const response = await axios.get('https://redevcrm.herokuapp.com/tasks')
         const newTasksArray = []
         response.data.map(item => {
            return newTasksArray.push({
               key: item._id,
               text: item.text,
               theme: item.theme
            })
         })
         dispatch(tasksFetchSucces(newTasksArray))
      } catch (e) {
         dispatch(tasksFetchError(e))
      }
   }
}

const tasksFetchStart = () => {
   return {
      type: TASKS_FETCH_START
   }
}
const tasksFetchSucces = (newTasksArray) => {
   return {
      type: TASKS_FETCH_SUCCESS,
      newTasksArray
   }
}
const tasksFetchError = (e) => {
   return {
      type: TASKS_FETCH_ERROR,
      e
   }
}