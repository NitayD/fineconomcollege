export const INIT_ITEM_DATA = Symbol('INIT_ITEM_DATA')
export const INIT_ALL_DATA = Symbol('INIT_ALL_DATA')

export function initItemPageData (data) {
    return ( dispatch, store ) => {
        const news = [...store().news_page.toJS().allNewsData]
        if (news.find(el=>el.slug === data.slug ? true : false)) { return }
        dispatch({
            type: INIT_ITEM_DATA,
            payload: {
                allNewsData: [...news, data]
            }
        })
    }
}

export function initMainPageData (data) {
    return {
        type: INIT_ALL_DATA,
        payload: {
            allNewsData: data
        }
    }
}

