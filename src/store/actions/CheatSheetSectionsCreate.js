import axios from 'axios'
import { FETCH_CHEAT_SHEET_SECTION_POST_SUCCESS } from './actionTypes'
import { fetchCheatSheetSections } from './CheatSheetSections'

export const fetchCheatSheetSectionsPost = ({ title, logo, image }) => {
   return async dispatch => {
      try {
         const newObjImage = {
            title: title,
            logo: logo[0].response.imageUrl,
            image: image[0].response.imageUrl
         }
         const response = await axios.post('https://redevcrm.herokuapp.com/CheatSheetSections', newObjImage)
         console.log(response.data);
         dispatch(CheatSheetSectionsPost(response.data))
         dispatch(fetchCheatSheetSections())

      } catch (e) {
         console.log(e);
      }
   }
}

const CheatSheetSectionsPost = (CheatSheetSectionsObj) => {
   return {
      type: FETCH_CHEAT_SHEET_SECTION_POST_SUCCESS,
      CheatSheetSectionsObj
   }
}