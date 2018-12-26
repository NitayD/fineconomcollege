import Immutable from 'immutable'
import * as ActionType from 'actions/categoryes'

export const initialState = Immutable.fromJS({
  data: []
})

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionType.INIT_CATEGORY:
      return state.merge(action.payload)
    case ActionType.INIT_CATEGORYES:
      return state.merge(action.payload)
    default:
      return state
  }
}
