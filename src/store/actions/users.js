import axios from 'axios'
import { FETCH_USERS_START, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from './actionTypes'

export function fetchUsers() {
   return async dispatch => {
      try {
         dispatch(fetchUsersStart())
         const response = await axios.get('https://redevcrm.herokuapp.com/users')
         const tableUsers = []
         response.data.map(item => {
            return tableUsers.push({
               key: item.id,
               firstName: item.firstName,
               email: item.email,
               birthday: item.birthday,
               surname: item.lastName
            })
         })
         dispatch(fetchUsersSuccess(tableUsers))
      } catch (e) {
         dispatch(fetchUsersError(e))
      }
   }
}

export function fetchUsersStart() {
   return {
      type: FETCH_USERS_START
   }
}
export function fetchUsersSuccess(tableUsers) {
   return {
      type: FETCH_USERS_SUCCESS,
      tableUsers
   }
}
export function fetchUsersError(e) {
   return {
      type: FETCH_USERS_ERROR,
      e
   }
}