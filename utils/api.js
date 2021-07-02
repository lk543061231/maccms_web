import request from '@/plugins/server'

export const getVerifyCode = () => {
  return request({
    url: '/user/getVerifyCode',
    method: 'get'
  })
}
export function getIsfake (data) {
  return request({
    url: 'yapi/maccms/isfake',
    method: 'post',
    data: data
  })
}