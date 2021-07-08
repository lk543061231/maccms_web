/** @format */
import { getArticleList, getArticleDetail, getInjectList } from '@/utils/api';
import request from '@/plugins/server';
import * as $utils from '@/utils/index.js';
const isDev = process.env.NODE_ENV !== 'production';
export default {
  state: () => ({
    inject: {}
  }),
  mutations: {
    SET_INJECT: (state, data) => {
      state.inject = data;
    }
  },
  actions: {
    /**
     * @msg:服务端渲染
     * @param {type}
     * @return: promise
     */
    async GetInject(store) {
      return new Promise((resolve, reject) => {
        getInjectList()
          .then(res => {
            if (res.data.code !== 0) {
              reject(new Error('error'));
            }
            store.commit('SET_INJECT', res.data.data);
            resolve(res.message);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
};
