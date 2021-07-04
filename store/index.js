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
    routerName: '',
    isMobile: '',
    menuList: [
        { label: '首页', value: 0, name: 'index' },
        { label: '应用市场', value: 1, name: 'applicationMarket' },
        { label: '开发文档', value: 2, name: 'devDocument' },
        { label: '域名检测', value: 3, name: 'domainDetection' },
        { label: '资源库', value: 4, name: 'resource' },
        { label: '博客', value: 5, name: 'blog-blog' },
        { label: '帮助中心', value: 6, name: 'helpCenter' },
    ],
    showMenuIndex: 0
})

export const mutations = {
    SET_LANG(state, locale) {
        if (state.locales.includes(locale)) {
            state.locale = locale
        }
    },
    setRouter(state, routerName) {
        state.routerName = routerName
    },
    updateRouter(state, data) {
        let list = state.menuList

        list.forEach((item, index) => {
            if (item.name == data) {
                state.showMenuIndex = index
            }
        })
    },
    updatedIsMobile(state, isMobile) {
        state.isMobile = isMobile
    }
}