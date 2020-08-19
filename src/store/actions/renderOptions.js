import { RENDER_OPTIONS_SUCCESS } from './actionTypes'
import axios from 'axios'

export const fetchRenderOptions = () => {
   return async dispatch => {
      try {
         const response = await axios.get('https://redevcrm.herokuapp.com/CheatSheetSections')
         const newRenderOptionsArray = []
         response.data.map(item => {
            return newRenderOptionsArray.push({
               id: item._id,
               title: item.title
            })
         })
         console.log('newRenderOptionsArray', newRenderOptionsArray);
         dispatch(renderOptionsSuccess(newRenderOptionsArray))
      } catch (e) {
         console.log(e);
      }
   }
}

const renderOptionsSuccess = (newRenderOptionsArray) => {
   return {
      type: RENDER_OPTIONS_SUCCESS,
      newRenderOptionsArray
   }
}