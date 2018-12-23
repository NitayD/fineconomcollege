import Immutable from 'immutable'
import * as ActionType from 'actions/main_news'

export const initialState = Immutable.fromJS({
  data: false
})

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionType.INIT_NEWS:
      return state.merge(action.payload)
    default:
      return state
  }
}
