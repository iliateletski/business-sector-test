const defaultState = {
    limit: 10,
    page: 1,
    totalCount: 0

}

const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT' 
const SET_LIMIT = 'SET_LIMIT' 
const SET_PAGE = 'SET_PAGE' 

export const paginationReducer = (state = defaultState, action) => {
    switch(action.type) {
        case SET_TOTAL_COUNT: return {...state, totalCount: action.payload}
        case SET_LIMIT: return {...state, limit: action.payload}
        case SET_PAGE: return {...state, page: action.payload}
        default: return state
    }
}

export const setTotalCountAction = (payload) => ({type: SET_TOTAL_COUNT, payload})
export const setLimitAction = (payload) => ({type: SET_LIMIT, payload})
export const setPageAction = (payload) => ({type: SET_PAGE, payload})