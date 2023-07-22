import { createStore } from 'redux'
import { paginationReducer } from './reducers/paginationReducer'
import { composeWithDevTools } from '@redux-devtools/extension';
 
export const store = createStore(paginationReducer, composeWithDevTools())