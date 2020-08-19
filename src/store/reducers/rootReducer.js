import { combineReducers } from 'redux'
import authReducer from './auth'
import usersReducer from './users'
import leedsReducer from './leeds'
import quotesReducer from './quotes'
import quotesPostReducer from './quotesCreate'
import quotesDeleteReducer from './quotesDelete'
import quotesPatchReducer from './quotesPatch'
import tasksReducers from './tasks'
import tasksPostReducer from './tasksCreate'
import CheatSheetSectionsReducer from './CheatSheetSections'
import CheatSheetSectionsPostReducer from './CheatSheetSectionsCreate'
import CheatSheetThemeReducer from './CheatSheetThemes'
import CheatSheetThemesCreateReducer from './CheatSheetThemesCreate'
import renderOptionsReducer from './renderOptions'



export default combineReducers({
   auth: authReducer,
   users: usersReducer,
   leeds: leedsReducer,
   quotes: quotesReducer,
   quotesPost: quotesPostReducer,
   quotesDelete: quotesDeleteReducer,
   quotesPatch: quotesPatchReducer,
   tasks: tasksReducers,
   tasksPost: tasksPostReducer,
   cheatSheetSections: CheatSheetSectionsReducer,
   CheatSheetSectionsPost: CheatSheetSectionsPostReducer,
   CheatSheetTheme: CheatSheetThemeReducer,
   CheatSheetThemesCreate: CheatSheetThemesCreateReducer,
   renderOptions: renderOptionsReducer
})

