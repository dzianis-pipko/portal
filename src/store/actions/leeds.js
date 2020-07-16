import axios from 'axios'
import { FETCH_LEEDS_START, FETCH_LEEDS_SUCCES, FETCH_LEEDS_ERROR } from './actionTypes'


export function fetchLeeds() {
   return async dispatch => {
      try {
         dispatch(fetchLeedsStart())
         const response = await axios.get('https://redevcrm.herokuapp.com/leeds')
         const newLeedsArray = []
         response.data.map(item => {
            return newLeedsArray.push({
               key: item._id,
               id: item._id,
               communicationMethod: item.type,
               address: item.target
            })
         })
         dispatch(fetchLeedsSuccess(newLeedsArray))
      } catch (e) {
         dispatch(fetchLeedsError(e))
      }
   }
}

const fetchLeedsStart = () => {
   return {
      type: FETCH_LEEDS_START
   }
}
const fetchLeedsSuccess = newLeedsArray => {
   return {
      type: FETCH_LEEDS_SUCCES,
      newLeedsArray
   }
}
const fetchLeedsError = e => {
   return {
      type: FETCH_LEEDS_ERROR,
      e
   }
}