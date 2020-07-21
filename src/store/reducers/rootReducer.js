import { combineReducers } from 'redux'
import authReducer from './auth'
import usersReducer from './users'
import leedsReducer from './leeds'
import quotesReducer from './quotes'
import quotesPostReducer from './quotesCreate'
import quotesDeleteReducer from './quotesDelete'


export default combineReducers({
   auth: authReducer,
   users: usersReducer,
   leeds: leedsReducer,
   quotes: quotesReducer,
   quotesPost: quotesPostReducer,
   quotesDelete: quotesDeleteReducer
})

