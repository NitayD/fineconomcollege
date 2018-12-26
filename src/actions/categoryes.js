export const INIT_CATEGORY = Symbol('INIT_CATEGORY')
export const INIT_CATEGORYES = Symbol('INIT_CATEGORYES')

export function initCategory (data) {    
    return (dispatch, store) => {
        const categoryes = [...store().categoryes.toJS().data]
        if (categoryes.find(el=>el._id === data._id ? true : false)) { return }
        dispatch({
            type: INIT_CATEGORY,
            payload: {
                data: [ ...categoryes, data]
            }
        })
    }
}
export function initCategoryes (data) {    
    return dispatch => {
        dispatch({
            type: INIT_CATEGORYES,
            payload: {
                data: data
            }
        })
    }
}
