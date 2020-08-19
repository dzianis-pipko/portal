import { FETCH_CHEAT_SHEET_THEMES_START, FETCH_CHEAT_SHEET_THEMES_SUCCESS, FETCH_CHEAT_SHEET_THEMES_ERROR } from '../actions/actionTypes'

const initialState = {
   currentCheatSheetThemes: [],
   loader: false,
   error: null
}

export default function CheatSheetThemeReducer(state = initialState, action) {
   switch (action.type) {
      case FETCH_CHEAT_SHEET_THEMES_START:
         return { ...state, loader: true }
      case FETCH_CHEAT_SHEET_THEMES_SUCCESS:
         return { ...state, loader: false, currentCheatSheetThemes: action.newCheatSheetThemesArray }
      case FETCH_CHEAT_SHEET_THEMES_ERROR:
         return { ...state, loader: false, error: action.error }
      default:
         return state
   }
}
