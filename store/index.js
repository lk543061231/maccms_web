let isMobile = false
if (!process.server) {
  const deviceWidth = document.documentElement.clientWidth

  isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
  if (isMobile || deviceWidth <= 900) {
    isMobile = true
  } else {
    isMobile = false
  }
}

export const state = () => ({
  locales: ['en', 'zh'],
  locale: 'zh',
  isMobile
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
  updatedIsMobile (state, isMobile) {
    state.isMobile = isMobile
  }
}
