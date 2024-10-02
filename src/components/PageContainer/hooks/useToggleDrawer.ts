
import { useAppDispatch } from "@/store/hooks"
import { toogleDrawer as setDrawer } from "@/store/slices/drawerSlice"

const useToggleDrawer = () => {
	const dispatch = useAppDispatch()

	const toogleDrawer = () => {
		dispatch(setDrawer())
	}

	return toogleDrawer
}

export default useToggleDrawer
