import { FETCH_CHEAT_SHEET_SECTION_POST_SUCCESS } from '../actions/actionTypes'

const initialState = {
   currentCheatSheetSections: {}
}

export default function CheatSheetSectionsPostReducer(state = initialState, action) {
   switch (action.type) {
      case FETCH_CHEAT_SHEET_SECTION_POST_SUCCESS:
         return { ...state, currentCheatSheetSections: action.CheatSheetSectionsObj }
      default:
         return state
   }
}