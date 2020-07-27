
import { FETCH_QUOTES_START, FETCH_QUOTES_SUCCES, FETCH_QUOTES_ERROR } from '../actions/actionTypes'

const initialState = {
   quotesArray: [],
   loader: false,
   error: null
}

export default function quotesReducer(state = initialState, action) {
   switch (action.type) {
      case FETCH_QUOTES_START:
         return {
            ...state, loader: true
         }
      case FETCH_QUOTES_SUCCES:
         return {
            ...state, loader: false, quotesArray: action.newQuotesArray
         }
      case FETCH_QUOTES_ERROR:
         return {
            ...state, loader: false, error: action.error
         }
      default:
         return state
   }
} 