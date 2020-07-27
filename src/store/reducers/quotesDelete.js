import { QUOTES_DELETE_SUCCESS } from '../actions/actionTypes'

const initialState = {
   currentQuotes: {}
}

export default function quotesDeleteReducer(state = initialState, action) {
   switch (action.type) {
      case QUOTES_DELETE_SUCCESS:
         return { ...state, currentQuotes: action.payload }
      default:
         return state;
   }
}