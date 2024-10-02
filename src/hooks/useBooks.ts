import { fetchBooks } from "@/services/models/books"
import { handleError } from "@/utils/errorHandler"
import { useEffect,useState } from "react"
import { Book } from "../interfaces"

const useBooks = () => {
	const [elements,setElements] = useState<Book[]>([])
	const [count,setCount] = useState(0)
	const [loading,setLoading] = useState(false)
	const [error,setError] = useState("")

	const refetch = async () => {
		try {
			setLoading(true)

			const { count,elements } = await fetchBooks()

			setElements(elements)
			setCount(count)
		} catch (error) {
			const message = handleError(error)
			setError(message)
		} finally {
			setTimeout(() => {
				setError("")
			},3000)
			setLoading(false)
		}
	}

	useEffect(() => {
		refetch()
	},[])

	return { elements,count,loading,error,refetch }
}

export { useBooks }

