import { createBaseStore } from 'src/store'
const endPoint = '/legislativo/eventos'
const useEvents = () => createBaseStore('evento', endPoint, {
    customParams: {
        eventosDoDia: []
    },
    customActions: (set, _, helpers) => ({
        readByDate: async (params) => {
            const { api, startLoading, stopLoading } = helpers
            startLoading()
            try {
                const { data: { data } } = await api.get(endPoint + '/by-date', { params })
                set(() => ({ eventosDoDia: data }))
            } catch (error) {
                console.error('Erro ao buscar eventos mais recentes:', error.response.data);
            } finally {
                stopLoading();
            }
        }
    })
});
export { useEvents }
