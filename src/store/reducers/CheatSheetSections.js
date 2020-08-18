import { FETCH_CHEAT_SHEET_SECTION_START, FETCH_CHEAT_SHEET_SECTION_SUCCESS, FETCH_CHEAT_SHEET_SECTION_ERROR } from '../actions/actionTypes'

const initialState = {
   currentCheatSheetSections: [],
   loader: false,
   error: null
}

export default function CheatSheetSectionsReducer(state = initialState, action) {
   switch (action.type) {
      case FETCH_CHEAT_SHEET_SECTION_START:
         return { ...state, loader: true }
      case FETCH_CHEAT_SHEET_SECTION_SUCCESS:
         return { ...state, loader: false, currentCheatSheetSections: action.newCheatSheetSectionsArray }
      case FETCH_CHEAT_SHEET_SECTION_ERROR:
         return { ...state, loader: false, error: action.error }
      default:
         return state
   }
}