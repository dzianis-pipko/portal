import axios from 'axios'
import { QUOTES_DELETE_SUCCESS } from './actionTypes'
// import { fetchQuotes } from './quotes'

export const quotesDeleteFetch = () => {
   return async dispatch => {
      try {
         const response = await axios.post('https://redevcrm.herokuapp.com/quotes/:quoteId')
         dispatch(quotesDeleteSuccess(response.data))
         // dispatch(fetchQuotes())
      } catch (e) {
         console.log(e);
      }
   }
}

const quotesDeleteSuccess = quotesObj => ({
   type: QUOTES_DELETE_SUCCESS,
   payload: quotesObj
})