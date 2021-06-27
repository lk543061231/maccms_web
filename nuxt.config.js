import path from 'path'
import fs from 'fs'
module.exports = {
    // server: {
    //     https: {
    //         key: fs.readFileSync(path.resolve(__dirname, 'ca.key')),
    //         cert: fs.readFileSync(path.resolve(__dirname, 'ca.crt'))
    //     }
    // },
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'MacCMS Pro',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'MacCms Pro版12年技术沉淀，打造免费开源专业影视平台提供给全球站长,影视站点市场占有率高达99%、安装量超过300W+，深受许多站长的喜爱。' },
            { hid: 'og:image', property: 'og:image', content: '/static/logo.png' },
            { hid: 'og:title', property: 'og:title', content: 'MacCms Pro版12年技术沉淀，打造免费开源专业影视平台提供给全球站长,影视站点市场占有率高达99%、安装量超过300W+，深受许多站长的喜爱。' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'element-ui/lib/theme-chalk/index.css',
        './assets/css/common.less',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/element-ui'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        // https://go.nuxtjs.dev/content
        '@nuxt/content',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: [/^element-ui/],
    }
}