// useBase.js
import { create } from 'zustand';
import { api } from 'src/services';
import { useLoading } from 'src/store/helpers';

const defaultPagination = {
  page: 1,
  pageCount: 1,
  rowCount: 0,
};

/**
 * @param {string} baseName
 * @param {string} url - Endpoint da API
 * @param {{ pluralRename?: string, customActions?: Object }} params
 */
const useBase = (baseName, url, params = { pluralRename: null, customActions: {} }) => {
  const { startLoading, stopLoading } = useLoading(); // ✅ Agora está dentro de um custom Hook
  const pluralName = params.pluralRename || `${baseName}s`;

  const store = create((set, _) => ({
    [baseName]: null,
    [pluralName]: [],
    pagination: defaultPagination,

    readPage: async (requestParams = {}) => {
      try {
        startLoading();
        const { data: response } = await api.get(url, { params: requestParams });
        set({
          [pluralName]: response.data,
          pagination: response.pagination || defaultPagination,
        });
      } catch (error) {
        console.error(`Erro ao buscar ${baseName}:`, error);
      } finally {
        stopLoading();
      }
    },

    readAll: async (requestParams = {}) => {
      try {
        startLoading();
        const { data: response } = await api.get(url + '/all', { params: requestParams });
        console.log(response["data"])
        set({
          [pluralName]: response["data"],
        }, true);
      } catch (error) {
        console.error(`Erro ao buscar ${baseName}:`, error);
      } finally {
        stopLoading();
      }
    },

    read: async (id) => {
      try {
        startLoading();
        const { data: response } = await api.get(`${url}/${id}`);
        set({
          [baseName]: response.data,
        });
      } catch (error) {
        console.error(`Erro ao buscar ${baseName}:`, error);
      } finally {
        stopLoading();
      }
    },
    
    ...params.customActions,
  }));

  return store();
};

export { useBase };