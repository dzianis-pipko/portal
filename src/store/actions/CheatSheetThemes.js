import { FETCH_CHEAT_SHEET_THEMES_START, FETCH_CHEAT_SHEET_THEMES_SUCCESS, FETCH_CHEAT_SHEET_THEMES_ERROR } from './actionTypes'
import axios from 'axios'

export function fetchCheatSheetThemes() {
   return async dispatch => {
      try {
         dispatch(fetchCheatSheetThemesStart())
         const response = await axios.get('https://redevcrm.herokuapp.com/CheatSheetThemes')
         const newCheatSheetThemesArray = []
         response.data.map(item => {
            return newCheatSheetThemesArray.push({
               key: item._id,
               title: item.title,
               keyword: item.keyword,
               image: item.image,
               сheatSheetSectionId: item.сheatSheetSectionId
            })
         })

         dispatch(fetchCheatSheetThemeSuccess(newCheatSheetThemesArray))

      } catch (e) {
         dispatch(fetchCheatSheetThemeError(e))
      }
   }
}

const fetchCheatSheetThemesStart = () => {
   return {
      type: FETCH_CHEAT_SHEET_THEMES_START
   }
}
const fetchCheatSheetThemeSuccess = (newCheatSheetThemesArray) => {
   return {
      type: FETCH_CHEAT_SHEET_THEMES_SUCCESS,
      newCheatSheetThemesArray
   }
}
const fetchCheatSheetThemeError = (e) => {
   return {
      type: FETCH_CHEAT_SHEET_THEMES_ERROR,
      e
   }
}