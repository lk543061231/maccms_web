<template>
  <transition name="loading">
    <div class="loading-wrap">
      <div class="loading-inner">
        <img src="~/assets/images/common/loading.png" alt="" />
        <p class="f20-c172335">内容加载中 请稍后...</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.loading-wrap {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 100;
  .loading-inner {
    text-align: center;
    img {
      width: 200px;
      margin-bottom: 20px;
    }
  }
}
.loading-enter-active,
.loading-leave-active {
  transition: opacity 0.5s;
}
.loading-enter,
.loading-leave-active {
  opacity: 0;
}
</style>
