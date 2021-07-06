<template>
  <div v-if="showTxt">
    <div class="error" >
      <div class="img-div">
        <img v-if="checkResult" src="~/assets/images/common/domain-success.png" />
        <img v-else src="~/assets/images/common/domain-error.png" />
      </div>
    </div>
    <div class="text-wrap">
      <p class="text success-color" v-if="checkResult">
        恭喜您，域名通过大数据匹配特征没有被挂马
      </p>
      <p class="text error-color" v-else>
        您的域名通过大数据匹配，已经被挂马!
      </p>
    </div>
    <!-- 挂马检测 -->
    <div class="detection">
      <div class="detection-success" v-if="checkResult">
        <div class="detection-success-top flex-between-center">
          <div class="detection-success-top-left fw500">
            <span class="f18-c172335">挂马站点总数：</span>
            <span class="f18-cF7502D">200002</span>
            <span class="f12-cC7C7C7" style="margin-left: 10px">(全网大数据扫描实时动态更新）</span>
          </div>
          <div class="detection-success-top-right f14-c172335" @click="visiable = true">
            <span>特征样本提交</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
        <div class="detection-success-bottom">
          <p class="f16-c242424 fw500">
            <span>检测时间：</span>
            <span>{{ checkTime }}</span>
          </p>
          <div class="detection-list">
            <div class="detection-item" v-for="(e, i) in inJEctList" :key="i">
              {{ e }}
            </div>
          </div>
        </div>
      </div>
      <div class="detection-error" v-else-if="!checkResult">
        <div class="detection-error-top fw500">
          <span class="f18-c242424">Head 请求头/返回头</span>
          <span class="f18-cF7502D" style="margin-left: 14px">0.3883</span>
          <span class="f14-c242424">/秒</span>
        </div>
        <div class="detection-error-bottom">
          <div class="detection-error-bottom-left">
            <pre class="layui-code layui-box layui-code-view">
cookie:PHPSESSID=vrcumdiciv2c9grrjkjcb5a5ko; 
Hm_lvt_eeefc29d9170f544beeda563028e2687=1625198886; 
Hm_lpvt_eeefc29d9170f544beeda563028e2687=1625198886; 
Hm_lvt_8bf597d1c539847203a70f79408f01a8=1625198886; 
Hm_lpvt_8bf597d1c539847203a70f79408f01a8=1625198886; 
Ant=https%253A%252F%252Fbaidu.com
accept-language:zh-CN,zh;q=0.9
accept-encoding:gzip, deflate, br
referer:https://www.aicesu.cn/http/
sec-fetch-dest:empty
sec-fetch-mode:cors
sec-fetch-site:same-origin
origin:https://www.aicesu.cn
user-agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) 
AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 
Safari/537.36sec-ch-ua-mobile:?0
x-requested-with:XMLHttpRequest
sec-ch-ua:" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"
                </pre
            >
            <p class="f16-c242424">匹配特征内容</p>
            <pre class="layui-code layui-box layui-code-view">
x-requested-with:XMLHttpRequest
sec-ch-ua:" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"
                </pre
            >
          </div>
          <div class="detection-error-bottom-right">
            <pre class="layui-code layui-box layui-code-view">
HTTP/1.1 302 Moved Temporarily
Server: bfe/1.0.8.18
Date: Fri, 02 Jul 2021 04:08:30 GMT
Content-Type: text/html
Content-Length: 161
Connection: keep-alive
Location: http://www.baidu.com/
                </pre
            >
          </div>
        </div>
      </div>
    </div>
    <div class="btns-div" v-if="!checkResult">
      <DownPack :code="code"></DownPack>
    </div>
    <sampleDialog :visiable.sync="visiable" />
  </div>
</template>

<script>
import SampleDialog from './SampleDialog.vue';
import DownPack from './DownPack.vue';
import {  checkSiteInject, getInjectList } from '@/utils/api';
import { timestampToTime } from '@/utils/index.js';
export default {
  components: { DownPack, SampleDialog },
  props: {
    code: {
      type: String,
      default: ''
    },
    domainVal:{
      type:String,
      default:''
    }
  },
  data() {
    return {
      inJEctList: [],
      hoveIndex: '',
      visiable: false,
      showTxt: false,
      checkResult: false,
      checkTime:''
    };
  },
  computed: {},
  created() {
    this.getInject();
  },
  mounted() {},
  watch: {},
  methods: {
    getInject() {
      getInjectList().then(res => {
        if (res.data.code == 0) {
          this.inJEctList = res.data.data;
        }
      });
    },
    check() {
      const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
      });
      let t = new Date().getTime();
      checkSiteInject({ url: this.domainVal, t: t }).then(res => {
        loading.close();
        if (res.data.code == 0) {
          this.checkTime = timestampToTime(new Date().getTime());
          this.checkResult = res.data && !res.data.data.is_inject;
        } else {
          this.checkResult = false;
        }
        this.showTxt = true;
      });
    }
  }
};
</script>

<style scoped lang="less">
.error{
  text-align: center; 
}
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
.detection {
  padding: 30px 40px;
  margin: 30px auto 0;
  width: 1200px;
  min-height: 374px;
  background: #ffffff;
  .detection-success {
    .detection-success-top {
      padding-bottom: 23px;
      border-bottom: 1px solid #eaeaea;
      .detection-success-top-left {
        display: flex;
        align-items: center;
      }
      .detection-success-top-right {
        cursor: pointer;
        user-select: none;
        &:active {
          opacity: 0.6;
        }
      }
    }
    .detection-success-bottom {
      margin-top: 20px;
      .detection-list {
        margin-top: 23px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .detection-item {
          width: 270px;
          height: 50px;
          line-height: 50px;
          color: #666666;
          font-size: 16px;
          text-align: left;
          padding-right: 10px;
          margin-bottom: 8px;
        }
      }
    }
  }
}
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
.detection-error {
  .detection-error-top {
    padding-bottom: 23px;
    border-bottom: 1px solid #eaeaea;
  }
  .detection-error-bottom {
    margin-top: 17px;
    display: flex;
    .detection-error-bottom-left {
      width: 525px;
      height: 570px;
      color: #666666;
      font-size: 14px;
      pre {
        line-height: 25px;
      }
    }
    .detection-error-bottom-right {
      color: #666666;
      margin-left: 80px;
      font-size: 14px;
      pre {
        line-height: 25px;
      }
    }
  }
}
.fw500{
  text-align: left;
}
</style>
