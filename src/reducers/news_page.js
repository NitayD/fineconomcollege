import Immutable from 'immutable'
import * as ActionType from 'actions/news_page'

export const initialState = Immutable.fromJS({
  allNewsData: []
})

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionType.INIT_ITEM_DATA:
      return state.merge(action.payload)
    case ActionType.INIT_ALL_DATA:
      return state.merge(action.payload)
    default:
      return state
  }
}
