<template>
  <div v-if="showTxt">
    <div class="error">
      <div class="img-div">
        <img v-if="checkResult" src="~/assets/images/common/domain-success.png" />
        <img v-else src="~/assets/images/common/domain-error.png" />
      </div>
    </div>
    <div class="text-wrap">
      <p class="text success-color" v-if="checkResult">
        恭喜您，检测的网站版本不存在漏洞
      </p>
      <div class="text error-color" v-else>
        <p v-if="code == 1002">
          {{ resMsg || '输入地址错误，无法进行检测' }}
        </p>
        <div v-else>
          <p class="p-1">当前网址已提供最新版本</p>
          <p>高危！网站版本异常存在后门漏洞挂马风险 请立即升级版本</p>
        </div>
      </div>
    </div>
    <div v-if="!checkResult">
      <DownPack></DownPack>
    </div>
  </div>
</template>

<script>
import DownPack from './DownPack.vue';
import { getIsfake } from '@/utils/api';
export default {
  components: { DownPack },
  props: {
    domainVal: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      hoveIndex: '',
      showTxt: false,
      checkResult: false,
      code: '',
      resMsg: ''
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    check() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      let t = new Date().getTime();
      getIsfake({ url: this.domainVal, t: t }).then(res => {
        loading.close();
        this.code = String(res.data.code);
        if (res.data.code == 1) {
          this.checkResult = !res.data.info.is_fake;
        } else {
          this.checkResult = false;
        }
        this.resMsg = res.data.msg;
        this.showTxt = true;
      });
    }
  }
};
</script>

<style scoped lang="less">
.text {
  margin-top: 20px;
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
  margin-top: 60px;
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
