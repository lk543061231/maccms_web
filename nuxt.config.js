import path from 'path'
import fs from 'fs'
module.exports = {
    proxy: {
        '/yapi': {
            target: 'https://www.maccms.pro',
            pathRewrite: {
                '^/yapi': '/yapi'
            },
            secure: false,
            changeOrigin: true
        }
    },
    head: {
        title: 'MacCMS Pro',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'MacCms Pro版12年技术沉淀，打造免费开源专业影视平台提供给全球站长,影视站点市场占有率高达99%、安装量超过300W+，深受许多站长的喜爱。' },
            { hid: 'og:description', property: 'og:description', content: '' },
            {hid:'og:title',property:'og:title',content:'MacCMS Pro'},
            {hid:'apple-mobile-web-app-title',name:'apple-mobile-web-app-title',content:'MacCMS Pro'},
            {hid:'og:site_name',property:'og:site_name',content:'MacCMS Pro'},
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    css: [
        'element-ui/lib/theme-chalk/index.css',
        './assets/css/common.less',
    ],
    plugins: [
        '@/plugins/element-ui',
        '~/plugins/i18n.js',
    ],
    components: true,
    buildModules: [],
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        // https://go.nuxtjs.dev/content
        '@nuxt/content',
    ],
    router: {
        middleware: 'i18n' // middleware all pages of the application
    },
    axios: {
        proxy: true
    },
    pwa: {
        manifest: {
            lang: 'en'
        }
    },
    content: {},
    build: {
        transpile: [/^element-ui/],
    }
}