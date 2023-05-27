// Imports
import axios from 'axios'
import router from './router'

// Exports
export const ENVIRONMENT = import.meta.env.VITE_ENVIRONMENT
export const API_URL = import.meta.env.VITE_BASE_API_URL

// Axios
export const HTTP = axios.create({ baseURL: API_URL })
export const interceptRoutes = HTTP.interceptors.response.use(
  async (response) => response,
  async (error) => {
    const auth = useAuth()
    if (error.response.status === 401) {
      //alert the failure
      // router.push({ name: 'signin' })
    }
    if (error.response.status === 403) {
      //alert the failure
    }
    if (error.response.status === 500) {
      //anything unexpected
    }
    return Promise.reject(error)
  }
)
