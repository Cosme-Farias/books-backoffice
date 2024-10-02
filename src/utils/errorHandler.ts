import axios from "axios";

export const handleError = (error: unknown): string => {
	if (axios.isAxiosError(error)) {
		return error.response?.data?.message || 'Error de red';
	} else if (error instanceof Error) {
		return error.message;
	} else {
		return 'Ha ocurrido un error inesperado';
	}
}