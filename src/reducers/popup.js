import Immutable from 'immutable'
import * as ActionType from 'actions/popup'

export const initialState = Immutable.fromJS({
  popupInnerComponent: false
})

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionType.OPEN_POPUP_WITH:
      return state.merge(action.payload)
    case ActionType.CLOSE_POPUP_WITH:
      return state.merge({
        popupInnerComponent: false
      })
    default:
      return state
  }
}
