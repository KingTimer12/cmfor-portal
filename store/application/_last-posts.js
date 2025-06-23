import { apiWordpress } from 'src/services';
import { createBaseStore } from 'src/store'
const endPoint = '/posts'
const useLastPosts = () => createBaseStore('lastPost', endPoint, { api: apiWordpress });
export { useLastPosts }
