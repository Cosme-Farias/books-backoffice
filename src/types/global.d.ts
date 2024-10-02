interface SuccessResponse {
	success: true
}

interface ErrorResponse {
	success: false
	message: string
}

type ApiResponse = SuccessResponse | ErrorResponse;
