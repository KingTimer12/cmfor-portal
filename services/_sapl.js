import axios from 'axios'
import { settings } from 'src/settings'

const { API_SAPL_URL } = settings
const apiSAPL = axios.create({ baseURL: API_SAPL_URL })
export { apiSAPL }
