import axios from 'axios'
import { QUOTES_PATCH_SUCCESS } from './actionTypes'
import { fetchQuotes } from './quotes'

export const quotesPatchFetch = ({ key, text }) => {

   return async dispatch => {
      try {
         const response = await axios.patch(`https://redevcrm.herokuapp.com/quotes/${key}`, { text })
         dispatch(quotesPatchSuccess(response.data))
         dispatch(fetchQuotes())
      } catch (e) {
         console.log(e);
      }
   }
}

const quotesPatchSuccess = quotesObj => ({
   type: QUOTES_PATCH_SUCCESS,
   payload: quotesObj
})