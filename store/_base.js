// useBase.js
import { create } from 'zustand';
import { api } from 'src/services';
import { useLoading } from 'src/store/helpers';
import { devtools } from '@csark0812/zustand-expo-devtools';

const defaultPagination = {
  page: 1,
  pageCount: 1,
  rowCount: 0,
};

const storesCache = {};

/**
 * @param {string} baseName
 * @param {string} url - Endpoint da API
 * @param {{ pluralRename?: string, api?: @import("axios").AxiosInstance, customActions?: Object }} params
 */
const createBaseStore = (baseName, url, params = { pluralRename: null, api: api, customActions: {} }) => {
  const { startLoading, stopLoading } = useLoading();
  const pluralName = params.pluralRename || `${baseName}s`;

  if (!storesCache[baseName])
    storesCache[baseName] = create(
      devtools(
        (set) => ({
          [baseName]: null,
          [pluralName]: [],
          pagination: defaultPagination,
      
          readPage: async (requestParams = {}) => {
            try {
              startLoading();
              const { data: response } = await params.api.get(url, { params: requestParams });
              set({
                [pluralName]: response.data || response,
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
              const { data: response } = await params.api.get(url + '/all', { params: requestParams });
              set(() => ({
                [pluralName]: response["data"],
              }), true);
            } catch (error) {
              console.error(`Erro ao buscar ${baseName}:`, error);
            } finally {
              stopLoading();
            }
          },
      
          read: async (id) => {
            try {
              startLoading();
              const { data: response } = await params.api.get(`${url}/${id}`);
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
        }),
        {
          name: `${baseName}Store`
        }
      )
    );

  return storesCache[baseName]();
};

export { createBaseStore };