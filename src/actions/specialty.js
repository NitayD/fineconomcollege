export const LOAD_SPECIALTY_DATA = Symbol('LOAD_SPECIALTY_DATA')
export const LOADED_SPECIALTY_DATA = Symbol('LOADED_SPECIALTY_DATA')
export const FAIL_LOAD_SPECIALTY_DATA = Symbol('FAIL_LOAD_SPECIALTY_DATA')

import allSpecialityes from 'components/abiturientam/specialnosti.json'

export function loadSpecialtyData (code) {
  return dispatch => {
    dispatch({
      type: LOAD_SPECIALTY_DATA
    })
    let result = false
    for (var i = 0; i < allSpecialityes.length; i++) {
      if (allSpecialityes[i].code === code) {
        result = true
        dispatch(loadedSpecialtyData(allSpecialityes[i]))
      }
    }
    if (!result) {
      dispatch(failLoadSpecialtyData())
    }
  }
}

function loadedSpecialtyData (data) {
  return {
    type: LOADED_SPECIALTY_DATA,
    payload: {
      data: data
    }
  }
}

function failLoadSpecialtyData () {
  return {
    type: FAIL_LOAD_SPECIALTY_DATA
  }
}
