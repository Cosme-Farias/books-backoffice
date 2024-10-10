import { configureStore } from '@reduxjs/toolkit'
import { drawerSlice,sessionSlice,toastSlice } from './slices'

export const store = configureStore({
	reducer: {
		session: sessionSlice,
		drawer: drawerSlice,
		toast: toastSlice
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch