import { apiWordpress } from 'src/services';
import { createBaseStore } from 'src/store'
const endPoint = '/pages'
const usePages = () => createBaseStore('page', endPoint, {
    api: apiWordpress,
    customActions: (set, _, helpers) => ({
        readPages: async (params) => {
            const { api, startLoading, stopLoading } = helpers
            startLoading()
            try {
                const { data } = await api.get(endPoint, { params: params })
                set(() => ({ page: data[0].content.rendered }))
            } catch (error) {
                console.error('Erro ao buscar comissões mais recentes:', error.response.data);
            } finally {
                stopLoading();
            }
        }
    })
});
export { usePages }
