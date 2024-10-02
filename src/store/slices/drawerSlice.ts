import { createSlice } from '@reduxjs/toolkit'

interface DrawerState {
	isOpen: boolean
}

const initialState: DrawerState = {
	isOpen: false
}

export const drawerSlice = createSlice({
	name: 'drawer',
	initialState,
	reducers: {
		toogleDrawer: (state) => {
			return { ...state,isOpen: !state.isOpen }
		}
	},
})

export const { toogleDrawer } = drawerSlice.actions

export default drawerSlice.reducer