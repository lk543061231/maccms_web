import moment from 'moment';
export function formatTime(timestamp, type = 'YYYY-MM-DD hh:mm:ss') {
  return moment(timestamp * 1000).format(type);
  // let timeType = type || 'yy-mm-dd hh-mm-ss'
  // var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  // var Y = date.getFullYear() + '-';
  // var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  // var D = date.getDate() + ' ';
  // var h = date.getHours() + ':';
  // var m = date.getMinutes() + ':';
  // var s = date.getSeconds();
  // if (timeType == 'yy-mm-dd hh-mm-ss') {
  //     return Y + M + D + h + m + s;
  // } else if (timeType == 'yy-mm-dd') {
  //     return Y + M + D;
  // }
}
/**
 * 异常处理
 * @param {boolean} condition
 * @param {string} msg
 */
export function assert(condition, msg) {
  if (!condition) throw new Error(`[Apior] ${msg}`);
}

export function NumberQ(value) {
  if (!value) {
    return '--';
  }

  const intPartFormat = value.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); // 将整数部分逢三一断
  return intPartFormat;
}
