<template>
  <div class="notice" v-if="showNotice" @click.self="showNotice = false">
    <div class="notice-wrap">
      <img class="n7-img" src="@/assets/images/home/home-n7.png" />
      <img class="n1-img" src="@/assets/images/home/home-n1.png" @click="showNotice = false" />
      <p class="p1">重要公告 谨防假冒</p>

      <p class="p2 mt20">近期发现不法份子冒充MacCMS官方进行假冒，小伙伴们务必小心！可以通过下方链接进入官网群频道</p>
      <p class="p3 mt10">
        <i class="el-icon-warning-outline"></i>
        以下是冒充官方假冒信息（擦亮双眼 请勿轻信）
      </p>
      <img class="n2-img" src="@/assets/images/home/home-n2.png" />
      <div class="img-wrap ">
        <img class="n5-img" src="@/assets/images/home/home-n5.png" />
        <img class="n3-img" src="@/assets/images/home/home-n3.png" />
      </div>
      <img class="n6-img mt10" src="@/assets/images/home/home-n6.png" />
      <img class="n8-img " src="@/assets/images/home/home-n8.png" />
      <img class="n4-img " src="@/assets/images/home/home-n4.png" @click="jump" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      showNotice: false
    };
  },
  computed: {},
  created() {},
  mounted() {
    let href = window.location.href;
    if (href.indexOf('maccms.pro') != -1) {
      this.showNotice = true;
    } else {
      this.showNotice = false;
    }
  },
  watch: {},
  methods: {
    jump() {
      window.open('https://t.me/maccms_news');
    }
  }
};
</script>

<style scoped lang="less">
.notice {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
  .notice-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 12px;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
    .n7-img {
      position: absolute;
      top: -40px;
      left: 50%;
      width: 72px;
      height: 72px;
      transform: translateX(-36px);
    }
    .n1-img {
      position: absolute;
      top: 10px;
      right: 20px;
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
    .p1 {
      font-size: 20px;
      color: #333;
      font-weight: 500;
    }
    .p2 {
      color: #596371;
      font-size: 16px;
    }
    .p3 {
      color: #ff172a;
      font-size: 16px;
      width: 100%;
    }
    .n2-img {
      width: 100%;
      margin-top: 10px;
    }
    .img-wrap {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 70px;
      margin-top: 7px;
      img {
        width: 225px;
      }
    }
    .n6-img {
      width: 100%;
      margin-top: 7px;
    }
    .n8-img {
      // width: 100%;
      width: 460px;
      margin-top: 16px;
    }
    .n4-img {
      width: 300px;
      cursor: pointer;
      margin-top: 24px;
    }
  }
}
</style>
