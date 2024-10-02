import { API_URL } from "@/config/constants";
import axios from "axios";

const api = axios.create({
	baseURL: API_URL,
});

const setBearerToken = (token: string) => {
	api.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

export { api,setBearerToken }
