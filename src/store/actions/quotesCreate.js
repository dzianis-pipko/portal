import axios from 'axios'
import { QUOTES_POST_SUCCESS } from './actionTypes'

export const quotesPostFetch = ({ author, text }) => {
   return async dispatch => {
      try {
         const response = await axios.post('https://redevcrm.herokuapp.com/quotes', { author, text })
         dispatch(quotesPostSuccess(response.data))
      } catch (e) {
         console.log(e);
      }
   }
}

const quotesPostSuccess = quotesObj => ({
   type: QUOTES_POST_SUCCESS,
   payload: quotesObj
})