import Vue from 'vue';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// 全局进度条的配置
NProgress.configure({
  // showSpinner: true, // 加载微调器设置,默认为true
  // 使用缓动（CSS缓动字符串）和速度（以毫秒为单位）调整动画设置。（默认：ease和200）
  // easing: 'ease',
  showSpinner: false, // 是否显示加载ico
  speed: 2000
  // minimum: 0 // 更改启动时使用的最小百分比
});
Vue.prototype.$NProgress = NProgress;
export default ({ app, store }) => {
  app.router.beforeEach((to, from, next) => {
    // 设置条件
    console.log(to, from);
    NProgress.start();
    next();
    NProgress.done();
  });
};
