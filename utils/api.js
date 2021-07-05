import request from '@/plugins/server';

let baseUrl = '/api';
// let baseUrl = 'https://www.maccms.pro'

// 是否有漏洞
export function getIsfake(data) {
  return request({
    url: baseUrl + '/yapi/maccms/isfake',
    method: 'post',
    data: data
  });
}

// 挂马
export function checkSiteInject(data) {
  return request({
    url: baseUrl + '/dapi/maccmspro/check_site_inject',
    method: 'post',
    data: data
  });
}
// 挂马列表
export function getInjectList(data) {
  return request({
    url: baseUrl + '/dapi/maccmspro/inject_site_list',
    method: 'post'
  });
}

// 博客列表
export function getArticleList(data) {
  return request({
    url: baseUrl + '/api/article/list?' + data,
    method: 'get'
  });
}
// 博客详情
export function getArticleDetail(id) {
  return request({
    url: baseUrl + '/api/article/detail?' + id,
    method: 'get'
  });
}
