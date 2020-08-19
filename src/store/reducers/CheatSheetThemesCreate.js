import { CHEAT_SHEET_THEMES_POST } from '../actions/actionTypes'

const initialState = {
   currentCheatSheetThemes: {}
}

export default function CheatSheetThemesCreateReducer(state = initialState, action) {
   switch (action.type) {
      case CHEAT_SHEET_THEMES_POST:
         return { ...state, currentCheatSheetThemes: action.cheatSheetThemesObj }
      default:
         return state
   }
}