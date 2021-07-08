import axios from 'axios';

import { Message, Notification } from 'element-ui'; // 这里使用了element-ui的消息提示方法，也可自行定义

axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.post['Content-Type'] = 'text/plain;charset=UTF-8';
axios.defaults.headers['referer'] = '/blog';
let service = axios.create({
  // baseURL: '/',
  timeout: 15000
});
// 请求拦截 可在请求头中加入token等
service.interceptors.request.use(
  config => {
    // console.log(config, 'config');
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截 对响应消息作初步的处理
service.interceptors.response.use(
  resp => {
    // console.log(resp);
    //   if (resp.data) {
    //     if (resp.data.code !== '0') {
    //       Message({
    //         type: 'error',
    //         message: resp.data.msg,
    //         duration: 5000
    //       })
    //     }
    //     return { code: resp.data.code, data: resp.data.data, msg: resp.data.message }
    //   } else {
    return resp;
    //   }
  },
  error => {
    // console.log(error);
    if (error.response) {
      Message({
        type: 'error',
        message: '网络请求错误',
        duration: 5000
      });
    }
  }
);

export default service;
