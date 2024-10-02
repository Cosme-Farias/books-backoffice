// import { User } from "@/types/user"
// import { api,AUTH } from "@/config/constants"
// import { useState } from "react"
// import { useAppDispatch } from "@/store/hooks"

import { Session } from "@/services/session"
import { useAppDispatch } from "@/store/hooks"
import { login } from "@/store/slices/sessionSlice"

const useLogin = () => {
	const dispatch = useAppDispatch()

	const setSession = (session: Session) => {
		dispatch(login(session))
	}

	return setSession
}

export default useLogin
