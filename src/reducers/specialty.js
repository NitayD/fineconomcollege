import Immutable from 'immutable'
import * as ActionType from 'actions/specialty'

export const initialState = Immutable.fromJS({
  data: {},
  status: 'loaded'
})

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionType.LOAD_SPECIALTY_DATA:
      return state.merge({status: 'loading'})

    case ActionType.LOADED_SPECIALTY_DATA:
      return state.merge(state.merge({
        status: 'loaded'
      }), action.payload)

    case ActionType.FAIL_LOAD_SPECIALTY_DATA:
      return state.merge({
        status: 'fail'
      })
    default:
      return state
  }
}
