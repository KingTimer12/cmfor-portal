import axios from 'axios'
import { settings } from 'src/settings'

const { API_WORDPRESS_URL } = settings
const apiWordpress = axios.create({ baseURL: API_WORDPRESS_URL })

export { apiWordpress }
