export const INIT_NEWS = Symbol('INIT_NEWS')

export function initNews (data) {    
  return dispatch => {
    dispatch({
      type: INIT_NEWS,
      payload: {
        data: data
      }
    })
  }
}
