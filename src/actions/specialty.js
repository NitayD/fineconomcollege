export const LOAD_SPECIALTY_DATA = Symbol('LOAD_SPECIALTY_DATA')
export const LOADED_SPECIALTY_DATA = Symbol('LOADED_SPECIALTY_DATA')

export function loadSpecialtyData () {
  return dispatch => {
    dispatch({
      type: LOAD_SPECIALTY_DATA,
      payload: {
        popupInnerComponent: innerComponent
      }
    })
  }
}

function loadedSpecialtyData () {
  return dispatch => {
    dispatch({
      type: LOADED_SPECIALTY_DATA
    })
  }
}
