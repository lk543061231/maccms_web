<template>
  <div v-if="showTxt">
    <div class="error" >
      <div class="img-div">
        <img v-if="checkResult" src="~/assets/images/common/domain-success.png" />
        <img v-else src="~/assets/images/common/domain-error.png" />
      </div>
    </div>
    <div class="text-wrap" >
      <p class="text success-color" v-if="checkResult">此域名是官方域名</p>
      <p class="text error-color" v-else>此域名是假冒域名!</p>
    </div>
    <div class="btns-div" v-if="!checkResult">
      <p class="text">官方域名</p>
      <div class="btns flex-between-center">
        <div class="website-btn">maccms.com</div>
        <div class="website-btn">maccms.net</div>
        <div class="website-btn">maccms.pro</div>
        <div class="website-btn">macvideojs.com</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    domainVal:{
      type:String,
      default:''
    }
  },
  data() {
    return {
      showTxt: false,
      checkResult: false,
      passUrl: ['maccms.com', 'maccms.net', 'maccms.pro', 'macvideojs.com'],
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    check() {
      this.showTxt = true;
      this.checkResult = this.passUrl.some(item => {
        return this.domainVal.indexOf(item) != -1;
      });
    }
  }
};
</script>

<style scoped lang="less">
.text {
  padding-top: 20px;
  font-size: 24px;
  font-weight: 500;
  color: #242424;
  text-align: center;
}
.text-wrap {
  .success-color {
    color: #48d5b5;
  }
  .error-color {
    color: #f64a36;
    .p-1 {
      font-size: 16px;
      color: #333;
      margin-bottom: 5px;
    }
  }
}
.btns-div {
  margin: 60px auto 0;
  width: 1200px;
  background: #fff;
  padding-bottom: 30px;
  border-radius: 8px;
  .text-b {
    color: #666;
    font-size: 16px;
    font-weight: normal;
    text-align: center;
    margin-top: 15px;
  }
  .btns {
    margin-top: 30px;
    cursor: pointer;
    justify-content: center !important;
    .website-btn {
      width: 240px;
      height: 45px;
      line-height: 45px;
      text-align: center;
      background: #f8f8f8;
      border-radius: 28px;
      border: 1px solid #cccccc;
      font-size: 16px;
      font-weight: 400;
      color: #666666;
      margin-right: 30px;
      user-select: none;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        opacity: 0.8;
      }
      &:active {
        opacity: 0.6;
      }
    }
  }
  .pro {
    .website-btn {
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      &:hover {
        border: 1px solid #f7502d;
        color: #f7502d;
      }
    }
    .mlr {
      margin: 0 30px !important;
    }
    .b-img {
      width: 24px;
      height: 24px;
      margin-right: 5px;
    }
  }
}
</style>
