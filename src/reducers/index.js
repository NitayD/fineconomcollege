import { combineReducers } from 'redux'

import popup from './popup'
import specialty from './specialty'
import main_news from './main_news'

export default combineReducers({
  popup,
  specialty,
  main_news
})
