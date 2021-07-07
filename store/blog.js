/** @format */
import { getArticleList, getArticleDetail, getInjectList } from '@/utils/api';
import request from '@/plugins/server';
import * as $utils from '@/utils/index.js';
const isDev = process.env.NODE_ENV !== 'production';
export default {
  state: () => ({
    blogList: [],
    blogDetail: {}
  }),
  mutations: {
    SET_BLOG_LIST: (state, data) => {
      state.blogList = data;
    },
    SET_BLOG_DETAIL: (state, data) => {
      state.blogDetail = data;
    }
  },
  actions: {
    /**
     * @msg:服务端渲染
     * @param {type}
     * @return: promise
     */
    async GetBlogDetailServer(store, { id }) {
      let query = 'id=' + id;
      const getBlogDetail = getArticleDetail(query).catch(() => Promise.resolve({}));

      const [res1] = await Promise.all([getBlogDetail]);
      console.log(res1, query, 'res1');
      if (res1.data.code == 1) {
        store.commit('SET_BLOG_DETAIL', res1.data.info.detail);
      }
    }
  }
};
