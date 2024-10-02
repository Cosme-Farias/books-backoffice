import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import { RootState } from '../store'
import { User } from '@/types/user'
import { Session } from '@/services/session'

interface SessionState {
	user: User | null,
	token: string | null
}

const initialState: SessionState = {
	user: null,
	token: null
}

export const sessionSlice = createSlice({
	name: 'session',
	initialState,
	reducers: {
		login: (state,{ payload }: PayloadAction<Session>) => {
			return { ...state,token: payload.token,user: payload.user }
		}
	},
})

export const { login } = sessionSlice.actions

export default sessionSlice.reducer