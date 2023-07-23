const defaultState = {
    posts: []
}

const SET_POSTS = 'SET_POSTS' 

export const postsReducer = (state = defaultState, action) => {
    console.log(action.type)
    switch(action.type) {
        case SET_POSTS: return {...state, posts: [...action.payload]}
        default: return state
    }
}

export const setPostsAction = (payload) => ({type: SET_POSTS, payload}) 