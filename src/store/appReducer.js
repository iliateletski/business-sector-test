import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	sortParam: '',
	query: '',
	totalCount: 0
}

const appSlice = createSlice({
	name: 'appReducer',
	initialState,
	reducers: {
		setSortParam(state, action) {
			state.sortParam = action.payload
		},
		setQuery(state, action) {
			state.query = action.payload
		},
		setTotalCount(state, action) {
			state.totalCount = action.payload
		}
	}
})

export const { setSortParam, setQuery, setTotalCount } = appSlice.actions
export default appSlice.reducer
