import { combineReducers } from 'redux'
import authReducer from './auth'
import usersReducer from './users'
import leedsReducer from './leeds'

export default combineReducers({
   auth: authReducer,
   users: usersReducer,
   leeds: leedsReducer
})

