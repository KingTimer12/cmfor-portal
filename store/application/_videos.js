import { createBaseStore } from 'src/store'
const endPoint = '/app/youtube'
const useVideos = () => createBaseStore('video', endPoint, {
    customParams: {
        live: null,
        latest: []
    },
    customActions: (set, _, helpers) => ({
        readLatest: async () => {
            const { api, startLoading, stopLoading } = helpers
            startLoading()
            try {
                const { data: { videos_id } } = await api.get(endPoint + '/latests')
                set(() => ({ latest: videos_id }))
            } catch (error) {
                console.error('Erro ao buscar vídeos mais recentes:', error.response.data);
            } finally {
                stopLoading();
            }
        },
        readLive: async () => {
            const { api, startLoading, stopLoading } = helpers
            startLoading()
            try {
                const { data: { video_id } } = await api.get(endPoint + '/live')
                set(() => ({ live: video_id }))
            } catch (error) {
                console.error('Erro ao buscar vídeos mais recentes:', error.response.data);
            } finally {
                stopLoading();
            }
        }
    })
});
export { useVideos }
