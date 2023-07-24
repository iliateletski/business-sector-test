import appSlice from './appReducer'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
	reducer: appSlice
})
