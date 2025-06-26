import { apiWordpress } from 'src/services';
import { createBaseStore } from 'src/store'
const endPoint = '/posts'
const usePosts = () => createBaseStore('post', endPoint, { 
  api: apiWordpress,
  customActions: (set, _, helpers) => ({
      readPost: async (slug) => {
          const { api, startLoading, stopLoading } = helpers
          startLoading()
          try {
              const { data } = await api.get(endPoint, { params: { slug, _embed: true } })
              set(() => ({ post: data[0] }))
          } catch (error) {
              console.error('Erro ao buscar post:', error.response.data);
          } finally {
              stopLoading();
          }
      }
  })
});
export { usePosts }
