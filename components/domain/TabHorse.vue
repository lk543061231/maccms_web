<template>
  <div>
    <div class="error" v-if="showTxt">
      <div class="img-div">
        <img v-if="checkResult" src="~/assets/images/common/domain-success.png" />
        <img v-else src="~/assets/images/common/domain-error.png" />
      </div>
    </div>
    <div class="text-wrap" v-if="showTxt">
      <p class="text success-color" v-if="checkResult">
        恭喜您，域名通过大数据匹配特征没有被挂马
      </p>
      <p class="text error-color" v-else>
        检测网站已被挂马!
      </p>
      <div class="text error-color" v-if="showFakeResult">
        <p class="f-t">{{fakeMsg || '网站检测异常存在漏洞，请立即升级版本'}}</p>
        <p class="mt10 f16-c242424">当前网址已提供最新版本</p>
      </div>
    </div>
    <!-- 挂马检测 -->
    <div class="detection">
      <div class="detection-error" v-if="!checkResult">
        <div class="detection-error-top fw500">
          <span class="f18-c242424">Head 请求头/返回头</span>
          <span class="f18-cF7502D" style="margin-left: 14px">0.3883</span>
          <span class="f14-c242424">/秒</span>
        </div>
        <div class="detection-error-bottom">
          <div class="detection-error-bottom-left">
            <pre class="layui-code layui-box layui-code-view"
              >{{ detail.request_header }}
            </pre>
          </div>
          <div class="detection-error-bottom-right">
            <pre class="layui-code layui-box layui-code-view"
              >{{ detail.response_header }}
            </pre>
          </div>
        </div>
        <div class="detection-b">
          <p class="f16-c242424">特征标题：{{ detail.inject_name }}</p>
          <div>
            <p class="f14-c242424 mt10 ">匹配特征内容</p>
            <pre class="layui-code layui-box layui-code-view"
              >{{ detail.response_body }}
            </pre>
          </div>
        </div>
        <div class="xiufu">
          <div class="x-left">
            <i class="el-icon-warning-outline"></i>
            <span>修复方案</span>
          </div>
          <div class="x-right">
            下载最新更新包能够自动修复
          </div>
        </div>
        <div class="xiufu-blog" @click="goToBlog">
          <span>后门清理教程：</span>
          <span>https://www.maccms.pro/blog/3</span>
        </div>
      </div>
      <div class="detection-success" v-if="showList">
        <div class="detection-success-top flex-between-center">
          <div class="detection-success-top-left fw500">
            <span class="f18-c172335">挂马站点总数：</span>
            <span class="f18-cF7502D">{{ total }}</span>
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
            <span style="font-size:12px;color:#666;margin-left:10px">(随机展示部分域名)</span>
          </p>
          <div class="detection-list">
            <div class="detection-item" v-for="(e, i) in inJEctList" :key="i" @click="toHref(e)">
              {{ e }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!checkResult || showFakeResult">
      <DownPack></DownPack>
    </div>
    <sampleDialog :visiable.sync="visiable" />
  </div>
</template>

<script>
import SampleDialog from './SampleDialog.vue';
import DownPack from './DownPack.vue';
import { checkSiteInject, getInjectList,getIsfake } from '@/utils/api';
import { mapActions, mapState } from 'vuex';
export default {
  components: { DownPack, SampleDialog },
  props: {
    domainVal: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      hoveIndex: '',
      visiable: false,
      showTxt: false,
      checkResult: true,
      checkTime: '',
      detail: {},
      total: '',
      checkUrl: '',
      showFakeResult:false,
      fakeMsg:'',
      showList:true
    };
  },
  computed: {
    ...mapState('domain', ['inject']),
    inJEctList() {
      return this.inject.list || [];
    }
  },
  created() {
    this.getInject();
    this.checkTime = this.$utils.formatTime();
  },
  mounted() {},
  watch: {},
  methods: {
    ...mapActions('domain', ['GetInject']),
    toHref(url) {
      if (url.indexOf('http') == -1) {
        url = 'http://' + url.trim();
      }
      this.$emit('update:domainVal', url);
      this.checkUrl = url;
      this.check()
    },
    goToBlog() {
      this.$router.push({
        path: `/blog/3`
      });
    },
    async getInject() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      // getInjectList().then(res => {
      //   loading.close();
      //   if (res.data.code == 0) {
      //     this.inJEctList = res.data.data.list;
      //     this.total = res.data.data.total;
      //   }
      // });
      await this.GetInject();
      loading.close();
    },
    check() {
      this.getFake()
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      let t = new Date().getTime();
      checkSiteInject({ url: this.domainVal || this.checkUrl, t: t }).then(res => {
        loading.close();
        if (res.data.code == 0) {
          this.checkTime = this.$utils.formatTime();
          this.checkResult = res.data && !res.data.data.is_inject;
          this.detail = res.data.data;
        } else {
          this.checkResult = false;
        }
        // if(!this.checkResult){
          
        // }
        this.showList=false
        this.showTxt = true;
      });
    },
    getFake() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      let t = new Date().getTime();
      getIsfake({ url: this.domainVal || this.checkUrl, t: t }).then(res => {
        loading.close();
        var fakeResult=''
        if (res.data.code == 1) {
          fakeResult = !res.data.info.is_fake;
        } else {
          fakeResult = false;
        }
        this.fakeMsg=res.data.msg
        if(!fakeResult){
          this.showFakeResult=true
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
.error {
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
          cursor: pointer;
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
  .f-b{

  }
}
.detection-error {
  .detection-error-top {
    padding-bottom: 23px;
    border-bottom: 1px solid #eaeaea;
  }
  .detection-error-bottom {
    // margin-top: 17px;
    display: flex;
    justify-content: space-between;
    .detection-error-bottom-left {
      padding: 16px 40px;
      width: 525px;
      // height: 570px;
      color: #666666;
      background: #fbfbfb;
      width: 48%;
      font-size: 14px;
      text-align: left;
      pre {
        line-height: 25px;
      }
    }
    .detection-error-bottom-right {
      padding: 16px 40px;
      color: #666666;
      font-size: 14px;
      width: 48%;
      background: #fbfbfb;
      text-align: left;
      pre {
        line-height: 25px;
      }
    }
  }
  .detection-b {
    margin-top: 30px;
    pre {
      color: #666;
      font-size: 14px;
    }
  }
  .xiufu {
    color: #f64a36;
    font-size: 14px;
    display: flex;
    align-items: center;
    .x-left {
      margin-right: 10px;
      font-size: 16px;
    }
  }
  .xiufu-blog {
    font-size: 12px;
    margin-top: 10px;
    color: #999;
    cursor: pointer;
    span {
      &:nth-child(2) {
        // margin-left: 10px;
      }
    }
  }
}
.fw500 {
  text-align: left;
}
</style>
