import { CHEAT_SHEET_THEMES_POST } from './actionTypes'
import axios from 'axios'
import { fetchCheatSheetThemes } from './CheatSheetThemes'

export const fetchCheatSheetThemesCreate = ({ title, keyword, image, select }) => {
   return async dispatch => {
      try {
         const newObjThemeImage = {
            title: title,
            keyword: keyword,
            image: image[0].response.imageUrl,
            сheatSheetSectionId: select
         }
         const response = await axios.post('https://redevcrm.herokuapp.com/CheatSheetThemes', newObjThemeImage)
         console.log(response.data);
         dispatch(CheatSheetThemesPost(response.data))
         dispatch(fetchCheatSheetThemes())

      } catch (e) {
         console.log(e);
      }
   }
}

const CheatSheetThemesPost = (cheatSheetThemesObj) => {
   return {
      type: CHEAT_SHEET_THEMES_POST,
      cheatSheetThemesObj
   }
}