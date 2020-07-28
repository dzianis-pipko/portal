import { FETCH_CHEAT_SHEET_SECTION_START, FETCH_CHEAT_SHEET_SECTION_SUCCESS, FETCH_CHEAT_SHEET_SECTION_ERROR } from './actionTypes'
import axios from 'axios'

export function fetchCheatSheetSections() {
   return async dispatch => {
      try {
         dispatch(fetchCheatSheetSectionsStart())
         const response = await axios.get('https://redevcrm.herokuapp.com/CheatSheetSections')
         const newCheatSheetSectionsArray = []
         response.data.map(item => {
            return newCheatSheetSectionsArray.push({
               key: item._id,
               title: item.title,
               logo: item.logo,
               image: item.image
            })
         })
         dispatch(fetchCheatSheetSectionsSuccess(newCheatSheetSectionsArray))
      } catch (e) {
         dispatch(fetchCheatSheetSectionsError(e))
      }
   }
}

const fetchCheatSheetSectionsStart = () => {
   return {
      type: FETCH_CHEAT_SHEET_SECTION_START
   }
}
const fetchCheatSheetSectionsSuccess = (newCheatSheetSectionsArray) => {
   return {
      type: FETCH_CHEAT_SHEET_SECTION_SUCCESS,
      newCheatSheetSectionsArray
   }
}
const fetchCheatSheetSectionsError = (e) => {
   return {
      type: FETCH_CHEAT_SHEET_SECTION_ERROR,
      e
   }
}