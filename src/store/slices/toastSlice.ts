import { createSlice,PayloadAction } from '@reduxjs/toolkit';

interface ToastState {
	message: string;
	type: ToastType;
	isVisible: boolean;
};
type ToastType = 'success' | 'error' | 'warning' | 'info'

const initialState: ToastState = {
	message: "",
	isVisible: false,
	type: 'success'
}

export const toastSlice = createSlice({
	name: 'toast',
	initialState,
	reducers: {
		showToast: (state,{ payload }: PayloadAction<{ message: string,type: ToastType }>) => {
			return { ...state,isVisible: true,message: payload.message,type: payload.type }
		},
		closeToast: (state) => {
			return { ...state,isVisible: false }
		}
	},
})

export const { showToast,closeToast } = toastSlice.actions

export default toastSlice.reducer