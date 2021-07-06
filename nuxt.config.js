import path from 'path';
import fs from 'fs';
import autoprefixer from 'autoprefixer';
import pxtorem from 'postcss-pxtorem';
module.exports = {
  // devServer: {
  proxy: {
    '/api': {
      target: 'https://www.maccms.pro',
      pathRewrite: {
        '^/api': '/'
        // '^/dapi': '/dapi',
      },
      changeOrigin: true
    }
  },
  // },

  head: {
    // title: 'MacCMS Pro',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'MacCms Pro版12年技术沉淀，打造免费开源专业影视平台提供给全球站长,影视站点市场占有率高达99%、安装量超过300W+，深受许多站长的喜爱。'
      },
      { hid: 'og:description', property: 'og:description', content: '' },
      { hid: 'og:title', property: 'og:title', content: 'MacCMS Pro' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'MacCMS Pro' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'MacCMS Pro' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ src: '/rem.js', type: 'text/javascript', charset: 'utf-8' }]
  },
  css: [
    'element-ui/lib/theme-chalk/index.css',
    './assets/css/common.less'
    // './assets/css/global.css',
    // './assets/css/code.css',
    // './assets/css/layer.css',
    // './assets/css/layui.css'
  ],
  plugins: [
    '@/plugins/element-ui',
    '~/plugins/i18n.js',
    '~/plugins/localStorage.js',
    { src: '~/plugins/codeEdit', ssr: false },
    { src: '~/plugins/router', ssr: false }
  ],
  components: true,
  buildModules: [],
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],
  router: {
    middleware: 'i18n' // middleware all pages of the application
  },
  axios: {
    proxy: true,
    prefix: '/',
    credentials: true
  },
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  content: {},
  build: {
    transpile: [/^element-ui/],
    postcss: {
      plugins: [
        autoprefixer(),
        pxtorem({
          rootValue: 192,
          propList: ['*'],
          replace: true
          // 该项仅在使用 Circle 组件时需要
          // 原因参见 https://github.com/youzan/vant/issues/1948
          // selectorBlackList: ['van-circle__layer'],
        })
      ]
    }
  }
};
