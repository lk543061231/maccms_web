<template>
  <div class="float-tooltip">
    <el-popover placement="left-start" trigger="hover" v-model="visiable">
      <p class="f14-cF7502D tip-text" @click="join">加入TG交流群</p>
      <div slot="reference">
        <div class="btn">
          <img
            :src="plane"
            @mouseenter="plane = require('~/assets/images/common/plane-a.png')"
            @mouseleave="plane = require('~/assets/images/common/plane.png')"
          />
        </div>
      </div>
    </el-popover>
    <div class="btn arrow" v-if="scrollTop>800">
      <img
        @click="toTop"
        :src="arrow"
        @mouseenter="arrow = require('~/assets/images/common/arrow-a.png')"
        @mouseleave="arrow = require('~/assets/images/common/arrow.png')"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visiable:false,
      plane: require("~/assets/images/common/plane.png"),
      arrow: require("~/assets/images/common/arrow.png"),
      showTop:false,
      scrollTop:''
    };
  },
  mounted(){
    document.addEventListener("scroll", e => {
      this.scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      console.log(this.scrollTop)
    });
  },
  methods:{
    join(){
      // this.visiable = false;
      window.open('https://t.me/maccms_news')
    },
    toTop(){
      this.arrow=require("~/assets/images/common/arrow.png")
      window.scrollTo(0,0)
    }
  }
};
</script>

<style scoped lang="scss">
.float-tooltip {
  position: fixed;
  z-index: 1000;
  bottom: 60px;
  right: 80px;
  width: 40px;
  padding: 6px 5px 4px;
  // min-height: 80px;
  background: #ffffff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.11);
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  .btn {
    padding: 0px 2px;
    width: 100%;
    cursor: pointer;
    img {
      width: 100%;
    }
  }
  .arrow{
    margin-top: 2px;
    border-top: 2px solid #CDD0D4;
    padding-top: 6px;
  }
}
.tip-text {
  text-align: center;
  color: #F7502D;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
}
</style>
