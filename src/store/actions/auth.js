import axios from 'axios'
import { LOGIN_USER } from './actionTypes'

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



// export const userPostFetch = ({ email, password }) => {
//    return dispatch => {
//       axios.post('https://redevcrm.herokuapp.com/users/login', { email, password })
//          .then(({ status, data }) => {
//             if (status === 200) {
//                localStorage.setItem("token", data)
//                dispatch(loginUser(data))
//             }
//          })
//    }
// }

// const loginUser = userObj => ({
//    type: 'LOGIN_USER',
//    payload: userObj
// })





// export const userPostFetch = ({ email, password }) => {
//    console.log('User', email, password);
//    return dispatch => {
//       return fetch("https://redevcrm.herokuapp.com/users/login", {
//          method: "POST",
//          headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//          },

//          body: JSON.stringify({ email, password })

//       })
//          .then(resp => {
//             console.log('Token', resp);
//             return resp.json()
//          })

//          .then(token => {
//             console.log('Token', token);
//             if (token) {
//                localStorage.setItem("token", token)
//                dispatch(loginUser(token))

//             }


//          })
//    }
// }

