import axios from 'axios'
import { settings } from 'src/settings'

const { API_URL } = settings
const api = axios.create({ baseURL: API_URL })
export { api }
