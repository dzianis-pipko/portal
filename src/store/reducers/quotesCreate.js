import { QUOTES_POST_SUCCESS } from '../actions/actionTypes'

const initialState = {
   currentQuotes: {}
}

export default function quotesPostReducer(state = initialState, action) {
   switch (action.type) {
      case QUOTES_POST_SUCCESS:
         return { ...state, currentQuotes: action.payload }
      default:
         return state;
   }
}