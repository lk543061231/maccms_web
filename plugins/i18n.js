import Vue from 'vue'
import VueI18n from 'vue-i18n'

import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import ElementLocale from 'element-ui/lib/locale'

Vue.use(VueI18n)

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  let lang = 'zh'
  if (!process.server) {
    lang = window.localStorage.getItem('VueI18n-lang') || 'zh'
    
    const setHtmlFontSize = function() {
      const deviceWidth = document.documentElement.clientWidth

      let isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)

      if (isMobile || deviceWidth <= 900) {
        isMobile = true
      } else {
        isMobile = false
      }
      store.commit('updatedIsMobile', isMobile)
    }

    // setHtmlFontSize()

    if (window.addEventListener) {
      window.addEventListener(
        'resize',
        function() {
          setHtmlFontSize()
        },
        false
      )
    }
  }
  app.i18n = new VueI18n({
    locale: lang,
    fallbackLocale: 'zh',
    messages: {
      en: {
        ...require('~/locales/en.json'),
        ...enLocale
      },
      zh: {
        ...require('~/locales/zh.json'),
        ...zhLocale
      }
    }
  })
  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }
    return `/${app.i18n.locale}/${link}`
  }

  Vue.filter('T', (value) => {
    return app.i18n.t(value)
  })

  ElementLocale.i18n((key, value) => app.i18n.t(key, value))
}
