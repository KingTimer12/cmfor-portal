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
 * @param {{ pluralRename?: string, api?: @import("axios").AxiosInstance, customParams?: Object, customActions?: Object }} params
 */
const createBaseStore = (baseName, url, params = { pluralRename: null, api: api, customParams: {}, customActions: {} }) => {
  const { startLoading, stopLoading } = useLoading();
  const pluralName = params.pluralRename || `${baseName}s`;
  const apiUsed = params.api || api;

  if (!storesCache[baseName])
    storesCache[baseName] = create(
      devtools(
        (set, get) => {
            const actions = {
                readPage: async (requestParams = {}) => {
                    try {
                      startLoading();
                      const { data: response } = await apiUsed.get(url, { params: requestParams });
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
                      const { data: response } = await apiUsed.get(url + '/all', { params: requestParams });
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
                      const { data: response } = await apiUsed.get(`${url}/${id}`);
                      set({
                        [baseName]: response.data,
                      });
                    } catch (error) {
                      console.error(`Erro ao buscar ${baseName}:`, error);
                    } finally {
                      stopLoading();
                    }
                  },
            }

            const customActions = typeof params.customActions === 'function'
                ? params.customActions(set, get, { startLoading, stopLoading, baseName, pluralName, url, api: apiUsed })
                : {};

            return {
                [baseName]: null,
                [pluralName]: [],
                pagination: defaultPagination,
                ...params.customParams,
                ...actions,
                ...customActions,
              }
        },
        {
          name: `${baseName}Store`
        }
      )
    );

  return storesCache[baseName]();
};

export { createBaseStore };
