import request from '@/plugins/server'

// let baseUrl = ''
let baseUrl = 'https://www.maccms.pro'
export function getIsfake(data) {
    return request({
        url: baseUrl + '/yapi/maccms/isfake',
        method: 'post',
        data: data
    })
}

export function checkSiteInject(data) {
    return request({
        url: baseUrl + '/dapi/maccmspro/check_site_inject',
        method: 'post',
        data: data
    })
}
export function getInjectList(data) {
    return request({
        url: baseUrl + '/dapi/maccmspro/inject_site_list',
        method: 'post',
    })
}

export function getArticleList(data) {
    return request({
        url: baseUrl + '/api/article/list?' + data,
        method: 'get',
    })
}

export function getArticleDetail(id) {
    return request({
        url: baseUrl + '/api/article/detail?' + id,
        method: 'get',
    })
}