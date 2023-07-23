const defaultState = {
    limit: 10,
    totalCount: 0
}

const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT' 
const SET_LIMIT = 'SET_LIMIT' 

export const paginationReducer = (state = defaultState, action) => {
    switch(action.type) {
        case SET_TOTAL_COUNT: return {...state, totalCount: action.payload}
        case SET_LIMIT: return {...state, limit: action.payload}
        default: return state
    }
}

export const setTotalCountAction = (payload) => ({type: SET_TOTAL_COUNT, payload})
export const setLimitAction = (payload) => ({type: SET_LIMIT, payload})