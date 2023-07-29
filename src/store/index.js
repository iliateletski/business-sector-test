import { configureStore } from '@reduxjs/toolkit'

import appSlice from './appReducer'

export const store = configureStore({
	reducer: appSlice
})
