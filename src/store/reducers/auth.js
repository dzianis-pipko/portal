import { LOGIN_USER } from '../actions/actionTypes'

const initialState = {
   currentUser: {}
}

export default function authReducer(state = initialState, action) {
   switch (action.type) {
      case LOGIN_USER:
         return { ...state, currentUser: action.payload }
      default:
         return state;
   }
}