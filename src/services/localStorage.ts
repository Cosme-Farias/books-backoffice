import { Session } from "./session"

const storeSession = (session: Session) => {
	const dataString = JSON.stringify(session)
	localStorage.setItem("session",dataString)
}

export { storeSession }