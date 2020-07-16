import { FETCH_LEEDS_START, FETCH_LEEDS_SUCCES, FETCH_LEEDS_ERROR } from '../actions/actionTypes'

const initialState = {
   leedsArray: [],
   loader: false,
   error: null
}

export default function leedsReducer(state = initialState, action) {
   switch (action.type) {
      case FETCH_LEEDS_START:
         return {
            ...state, loader: true
         }
      case FETCH_LEEDS_SUCCES:
         return {
            ...state, loader: false, leedsArray: action.newLeedsArray
         }
      case FETCH_LEEDS_ERROR:
         return {
            ...state, loader: false, error: action.error
         }
      default:
         return state
   }
}