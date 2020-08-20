import axios from 'axios'
import { LOGIN_USER, LOGOUT_USER } from './actionTypes'

export const userPostFetch = ({ email, password }) => {
   return async dispatch => {
      try {
         const response = await axios.post('https://redevcrm.herokuapp.com/users/login', { email, password })
         localStorage.setItem("token", response.data)
         dispatch(loginUser(response.data))
      } catch (e) {
         console.log(e);
      }
   }
}

const loginUser = userObj => ({
   type: LOGIN_USER,
   payload: userObj
})

export const logoutUser = () => ({
   type: LOGOUT_USER
})
