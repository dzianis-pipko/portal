import { RENDER_OPTIONS_SUCCESS } from '../actions/actionTypes'

const initialState = {
   currentRenderOptions: []
}

export default function renderOptionsReducer(state = initialState, action) {
   switch (action.type) {
      case RENDER_OPTIONS_SUCCESS:
         return { ...state, currentRenderOptions: action.newRenderOptionsArray }
      default:
         return state
   }
}