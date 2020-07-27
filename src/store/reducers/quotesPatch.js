import { QUOTES_PATCH_SUCCESS } from '../actions/actionTypes'

const initialState = {
   currentQuotes: {}
}

export default function quotesPatchReducer(state = initialState, action) {
   switch (action.type) {
      case QUOTES_PATCH_SUCCESS:
         return { ...state, currentQuotes: action.payload }
      default:
         return state;
   }
}