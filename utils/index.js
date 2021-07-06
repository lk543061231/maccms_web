import moment from 'moment';
export function timestampToTime(timestamp, type = 'YY-MM-DD hh:mm:ss') {
  return moment(timestamp).format(type);
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
