import axios from 'axios'
import { FETCH_QUOTES_START, FETCH_QUOTES_SUCCES, FETCH_QUOTES_ERROR } from './actionTypes'

export function fetchQuotes() {
   return async dispatch => {
      try {
         dispatch(fetchQuotesStart())
         const response = await axios.get('https://redevcrm.herokuapp.com/quotes')
         const newQuotesArray = []
         response.data.map(item => {
            return newQuotesArray.push({
               key: item._id,
               author: item.author,
               quote: item.text
            })
         })
         console.log('FETCH-QUOTES', response.data);
         dispatch(fetchQuotesSuccess(newQuotesArray))
      } catch (e) {
         dispatch(fetchQuotesError(e))
      }
   }
}

const fetchQuotesStart = () => {
   return {
      type: FETCH_QUOTES_START
   }
}
const fetchQuotesSuccess = (newQuotesArray) => {
   return {
      type: FETCH_QUOTES_SUCCES,
      newQuotesArray
   }
}
const fetchQuotesError = (e) => {
   return {
      type: FETCH_QUOTES_ERROR,
      e
   }
}