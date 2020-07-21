import axios from 'axios'
import { QUOTES_DELETE_SUCCESS } from './actionTypes'
import { fetchQuotes } from './quotes'

export const quotesDeleteFetch = (id) => {
   return async dispatch => {
      try {
         const response = await axios.delete(`https://redevcrm.herokuapp.com/quotes/${id}`)
         console.log('DELETE', response.data);
         dispatch(quotesDeleteSuccess(response.data))
         dispatch(fetchQuotes())
      } catch (e) {
         console.log(e);
      }
   }
}

const quotesDeleteSuccess = quotesObj => ({
   type: QUOTES_DELETE_SUCCESS,
   payload: quotesObj
})