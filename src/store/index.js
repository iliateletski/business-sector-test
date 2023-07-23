import { combineReducers, createStore } from 'redux'
import { paginationReducer } from './reducers/paginationReducer'
import { composeWithDevTools } from '@redux-devtools/extension';
import { postsReducer } from './reducers/postsReducer';
import { filterAndSortReducer } from './reducers/filterAndSortReducer';

const rootReducer = combineReducers({
    pagination: paginationReducer,
    posts: postsReducer,
    filterAndSort: filterAndSortReducer
})
 
export const store = createStore(rootReducer, composeWithDevTools())
