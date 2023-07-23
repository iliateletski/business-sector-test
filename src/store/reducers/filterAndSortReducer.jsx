const defaultState = {
    sortParam: '', 
    query: ''
}

const SET_SORT_PARAM = 'SET_SORT_PARAM'
const SET_QUERY = 'SET_QUERY'

export const filterAndSortReducer = (state = defaultState, action) => {
    switch(action.type) {
        case SET_SORT_PARAM: return {...state, sortParam: action.payload}
        case SET_QUERY: return {...state, query: action.payload}
        default: return state
    }
}

export const setSortParamAction = (payload) => ({type: SET_SORT_PARAM, payload})
export const setQueryAction = (payload) => ({type: SET_QUERY, payload})