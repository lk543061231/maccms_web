import Vue from 'vue';

import * as utils from '~/utils/index.js';

const com = {
  install(Vue) {
    Vue.prototype.$utils = utils;
    Vue.prototype.$bus = new Vue();

    Object.keys(utils).map(key => {
      Vue.filter(key, utils[key]);
    });
  }
};
Vue.use(com);
