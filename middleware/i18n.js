export default function ({req, isHMR, app, store, route, params, error, redirect}) {
  // if (isHMR) {
  //   // ignore if called from hot module replacement
  //   return
  // } // if url does not have language, redirect to english
  // else if (!params.lang) {
  //   return redirect('/zh' + route.fullPath)
  // }
  // // based on directory structure _lang/xxxx, en/about has params.lang as "en"
  // const locale = params.lang || 'zh'
  // store.commit('SET_LANG', locale) // set store
  if (req && req.headers) {
    const deviceAgent = (req.headers['user-agent'] || req.headers['User-Agent']).toLowerCase()
    const agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/)
    let isMobile = false
    if (agentID) {
      isMobile = true
    } else {
      isMobile = false
    }
    store.commit('updatedIsMobile', isMobile)
  }

  // app.i18n.locale = store.state.locale
}
