/** @format */
import { getArticleList, getArticleDetail, getInjectList } from '@/utils/api';
import request from '@/plugins/server';
import * as $utils from '@/utils/index.js';
const isDev = process.env.NODE_ENV !== 'production';
export default {
  state: () => ({
    activeNav: {
      menu: 0,
      sub: -1
    }
  }),
  mutations: {
    SET_ACTIVE_NAV: (state, data) => {
      window.scrollTo(0, 0);
      state.activeNav = data;
    }
  },
  actions: {
    /**
     * @msg:服务端渲染
     * @param {type}
     * @return: promise
     */
  }
};
