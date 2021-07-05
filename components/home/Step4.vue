<template>
  <div class="content partner">
    <p class="f50-c242424">合作伙伴</p>
    <div class="partner-wrap">
      <img
        class="p-img mt30"
        v-for="(img, iIndex) in partnerList"
        :key="iIndex"
        :src="img.img"
        @mouseleave="mouseLeave(img, img.value)"
        @mouseenter="mouseEnter(img, img.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      partnerList: [
        { img: require('@/assets/images/home/home-i1.png'), value: 1 },
        { img: require('@/assets/images/home/home-i2.png'), value: 2 },
        // {img:require('@/assets/images/home/home-i3.png'),value:3},
        // {img:require('@/assets/images/home/home-i4.png'),value:4},
        { img: require('@/assets/images/home/home-i5.png'), value: 5 },
        // {img:require('@/assets/images/home/home-i6.png'),value:6},
        { img: require('@/assets/images/home/home-i7.png'), value: 7 }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    mouseEnter(img, value) {
      img.img = require('@/assets/images/home/home-i' + value + '-a.png');
    },
    mouseLeave(img, value) {
      img.img = require('@/assets/images/home/home-i' + value + '.png');
    }
  }
};
</script>

<style scoped lang="less">
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
.partner {
  min-width: 1200px;
  background: #f7f8fa;
  padding-bottom: 50px;
  .partner-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 300px;
    .p-img {
      cursor: pointer;
      width: 161px;
      height: 55px;
      margin-right: 50px;
    }
  }
}
</style>
