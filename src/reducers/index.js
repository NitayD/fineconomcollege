import { combineReducers } from 'redux'

import popup from './popup'
import specialty from './specialty'
import main_news from './main_news'
import news_page from './news_page'
import categoryes from './categoryes'

export default combineReducers({
  popup,
  specialty,
  main_news,
  news_page,
  categoryes
})
