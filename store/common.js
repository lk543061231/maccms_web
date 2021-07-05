/** @format */

export default {
  state: () => ({
    locales: ['en', 'zh'],
    locale: 'zh',

    isMobile: ''
  }),
  mutations: {
    SET_LANG(state, locale) {
      if (state.locales.includes(locale)) {
        state.locale = locale;
      }
    },

    SET_IS_MOBILE(state, isMobile) {
      state.isMobile = isMobile;
    }
  },
  actions: {}
};
