<template>
  <div>
    <div class="home-step">
      <div class="step-list">
        <img src="@/assets/images/home/home-p1.png" class="p1-img" />
        <div class="step-item" v-for="(item, index) in stepList" :key="index">
          <p class="si-s1">{{ item.title }}</p>
          <p class="si-s2">{{ item.subTitle }}</p>
          <img class="si-img" :src="item.img" />
        </div>
      </div>
    </div>
    <div class="content bg1">
      <img src="@/assets/images/home/home-p2.png" class="p2-img" />
      <p class="f38-c172335">Pro版UI设计 交互体验大更新</p>
      <p class="f20-c172335 mt20">永久免费开源专业影视MacCMS Pro版</p>
      <p class="f20-c8F8F8F mt30">
        新版本默认模版对应用户体验，UI，UX都是的最先反馈出平台高留存的核心因素，能够大幅度提神站长的盈利目标。
      </p>
      <div class="con-list mt30">
        <div class="con-item" v-for="(item, index) in conList" :key="index">
          <div class="con-img-wrap">
            <img class="con-img" :src="item.img" />
          </div>
          <span class="f16-c8F8F8F">{{ item.label }}</span>
        </div>
      </div>
      <img class="mt30" src="@/assets/images/home/home2.png" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      stepList: [
        { title: '99%', subTitle: '占有率', img: require('@/assets/images/home/home-s1.png') },
        { title: '300W+', subTitle: '安装量', img: require('@/assets/images/home/home-s2.png') },
        { title: '12年', subTitle: '技术沉淀', img: require('@/assets/images/home/home-s3.png') }
      ],
      conList: [
        { label: '增加API开发文档', img: require('@/assets/images/home/home-con1.png') },
        { label: '提升二次开发的效率', img: require('@/assets/images/home/home-con2.png') },
        { label: 'WebPack等原生开发', img: require('@/assets/images/home/home-con3.png') },
        { label: '支持APP开发', img: require('@/assets/images/home/home-con4.png') }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {}
};
</script>

<style scoped lang="less">
.home-step {
  width: 100%;
  height: 170px;
  display: flex;
  align-items: center;
  background-color: #fa773a;
  .step-list {
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding: 0 100px;
    position: relative;
    .p1-img {
      position: absolute;
      width: 300px;
      height: 220px;
      top: -150px;
      left: 0;
    }
    .step-item {
      display: flex;
      align-items: center;
      // margin-right: 200px;
      position: relative;
      .si-s1 {
        font-size: 50px;
        color: #fff;
        margin-right: 10px;
      }
      .si-s2 {
        font-size: 16px;
        color: #fff;
        margin-right: 30px;
      }
      .si-img {
        width: 80px;
        height: 70px;
      }
      &::after {
        content: '';
        display: block;
        position: absolute;
        width: 1px;
        height: 70px;
        background-color: #fc996b;
        right: -50%;
      }
      &:last-child {
        margin-right: 0;
        &::after {
          display: none;
        }
      }
    }
  }
}
.content {
  min-width: 1300px;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  align-items: center;
  .con-list {
    display: flex;
    .con-item {
      display: flex;
      align-items: center;
      margin-right: 36px;
      .con-img-wrap {
        padding: 6px;
        border-radius: 6px;
        background: #f6e8e7;
        margin-right: 10px;
        .con-img {
          width: 16px;
          height: 16px;
        }
      }
    }
  }
  .to-look {
    width: 207px;
    height: 55px;
    background: linear-gradient(270deg, #f53e2d 0%, #fe6232 100%);
    box-shadow: 0px 5px 12px 0px rgba(253, 95, 49, 0.29);
    border-radius: 28px;
    text-align: center;
    line-height: 55px;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
  }
  .look-img {
    width: 1000px;
    height: 700px;
  }
  .move-ing {
    animation: moveIng 2s infinite;
  }
  @keyframes moveIng {
    0% {
      transform: translate(-5px);
    }
    25% {
      transform: translate(5px);
    }
    50% {
      transform: translate(-5px);
    }
    75% {
      transform: translate(5px);
    }
    100% {
      transform: translate(-5px);
    }
  }
}

.bg1 {
  background: url('@/assets/images/home/home1.png') no-repeat;
  background-size: 103% 100%;
  width: 100%;
  height: 1000px;
  position: relative;
  img {
    width: 1123px;
    height: 650px;
  }
  .p2-img {
    width: 250px;
    height: 250px;
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>
