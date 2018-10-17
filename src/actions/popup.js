export const OPEN_POPUP_WITH = Symbol('OPEN_POPUP_WITH')
export const CLOSE_POPUP_WITH = Symbol('CLOSE_POPUP_WITH')

export function openPopupWith (innerComponent) {
  return dispatch => {
    dispatch({
      type: OPEN_POPUP_WITH,
      payload: {
        popupInnerComponent: innerComponent
      }
    })
  }
}

export function closePopupWith () {
  return dispatch => {
    dispatch({
      type: CLOSE_POPUP_WITH
    })
  }
}
