import { apiWordpress } from 'src/services';
import { createBaseStore } from 'src/store'
const usePosts = () => createBaseStore('post', '/posts', { api: apiWordpress });
export { usePosts }