<template>
  <div class="pt-118 page-wrap">
    <div class="domain-top">
      <div class="logo-img">
        <img src="~/assets/images/domain/logo-white.png" alt="macCms" />
      </div>
      <div class="search-div">
        <div class="tab-div">
          <p class="tab-title" :class="{ active: activeIndex == 1 }" @click="choiceSearch(1)">
            域名真伪
          </p>
          <p class="tab-title" :class="{ active: activeIndex == 2 }" @click="choiceSearch(2)">
            漏洞检测
          </p>

          <p class="tab-title" :class="{ active: activeIndex == 3 }" @click="choiceSearch(3)">
            挂马检测
          </p>
        </div>
        <div class="input-div">
          <el-input v-model="domainVal" :placeholder="palceHolder"></el-input>

          <div class="btn global-btn-hover1" @click="check">检测一下</div>
        </div>
        <div class="tip">
          {{
            activeIndex == 1
              ? '市面已有很多假冒MACCMS平台，为保证您能找到正版网址可输入即可辨别真伪哦！'
              : activeIndex == 2
              ? '快速检测网站当前使用版本是否存在漏洞'
              : '因.la版本挂马问题而自研大数据全网采集系统指纹识别MacCMS并实时监测被挂马的网站第一时间云端同步预警'
          }}
        </div>
      </div>
    </div>
    <div class="domain-bottom">
      <div>
        <div v-if="activeIndex == 1">
          <TabUrl ref="tabUrl" :checkResult="checkResult" :domainVal="domainVal"></TabUrl>
        </div>
        <div v-if="activeIndex == 2">
          <TabBug ref="tabBug" :checkResult="checkResult" :domainVal="domainVal"></TabBug>
        </div>
        <div v-if="activeIndex == 3">
          <TabHorse ref="horse" :code="String(code)" :domainVal.sync="domainVal" :checkResult="checkResult"></TabHorse>
        </div>
      </div>
      <div class="update"></div>
    </div>
    <commonFoot />
  </div>
</template>

<script>
import { getIsfake, checkSiteInject, getInjectList } from '@/utils/api';
import commonHead from '@/components/common/commonHead.vue';
import commonFoot from '@/components/common/commonFoot.vue';

import { TabUrl, TabBug, TabHorse } from '@/components/domain';
export default {
  components: {
    commonHead,
    commonFoot,
    TabUrl,
    TabBug,
    TabHorse
  },
  head() {
    return {
      title: 'MacCMS Pro-域名检测',
    };
  },
  data() {
    return {
      inputCheck: false,
      activeIndex: 1,
      domainVal: '',
      checkResult: '',
      code: 0,
      showTxt: false,
      palceHolder: '请输入检测域名',
      resMsg: '',
      checkTime: ''
    };
  },
  created() {
    let query = this.$route.query;
    if (query && query.activeIndex) {
      this.activeIndex = query.activeIndex;
      this.palceHolder =
        query.activeIndex == 1 || query.activeIndex == 3 ? '请输入检测域名' : '检测域名请携带http或者https协议，默认携带http';
    }
    this.showTxt = false;
  },
  watch: {
    $route: function(val) {
      this.activeIndex = val.query.activeIndex;
      this.palceHolder = val.query.activeIndex == 1 ? '请输入检测域名' : '检测域名请携带http或者https协议，默认携带http';
    },
    domainVal:function(val){
      console.log(val)
      if((val=='' || !val) && this.activeIndex==3){
        this.$refs.horse.checkResult=true
        this.$refs.horse.showTxt=false
      }else{
        this.check()
      }
    }
  },
  methods: {
    check() {
      if (this.activeIndex == 1) {
        this.$refs.tabUrl && this.$refs.tabUrl.check();
      } else {
        // 漏洞检测
        if (!this.domainVal) {
          return;
        } else if (this.domainVal.indexOf('http') == -1) {
          this.domainVal = 'http://' + this.domainVal.trim();
        }
        if (this.activeIndex == 2) {
          this.$refs.tabBug && this.$refs.tabBug.check();
        } else if (this.activeIndex == 3) {
          this.$refs.horse && this.$refs.horse.check();
        }
      }
    },
    choiceSearch(i) {
      // this.activeIndex = i;
      // this.palceHolder = i == 1 ? '请输入检测域名' : '检测域名请携带http或者https协议，默认携带http';
      this.$router.push({
        path: '/domainDetection',
        query: {
          activeIndex: i
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
.flex-center {
  display: flex;
  align-items: center;
}
.page-wrap {
  background: #fff;
  .domain-top {
    width: 100%;
    height: 400px;
    background: url('~/assets/images/domain/domain-bg.png');
    background-size: contain;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .logo-img {
      width: 103px;
      height: 58px;
      margin-bottom: 38px;
      img {
        width: 100%;
      }
    }
    .search-div {
      .tab-div {
        .flex-center();
        margin-bottom: 16px;
        .tab-title {
          font-size: 16px;
          font-weight: 400;
          color: #ffeae0;
          cursor: pointer;
          & + .tab-title {
            margin-left: 24px;
          }
        }
        .active {
          font-size: 20px;
          font-weight: 500;
          color: #ffffff;
        }
      }
    }
    .input-div {
      .flex-center;
      margin-bottom: 19px;
      /deep/.el-input {
        width: 700px;
        height: 50px;
        margin-right: 15px;
        border-radius: 25px;
        overflow: hidden;
        color: #f7502d;
        // border: 1px solid #e1e1e1;
        .el-input__inner {
          // position: relative;
          padding-left: 30px;
          height: 50px;
          border-radius: 25px;
          // top: -1px;
          // left: -1px;
          &:focus {
            border: 1px solid #e5552d !important;
          }
        }
      }
      .btn {
        width: 120px;
        height: 50px;
        line-height: 50px;
        background: rgba(255, 255, 255, 0);
        text-align: center;
        border-radius: 25px;
        border: 1px solid #ffffff;
        font-size: 14px;
        font-weight: 400;
        color: #ffffff;
        cursor: pointer;
        user-select: none;
        transition: opacity 0.3s;
        &:active {
          opacity: 0.6;
        }
      }
    }
    .tip {
      font-size: 12px;
      font-weight: 400;
      color: #ffeae0;
    }
  }
  /deep/ .domain-bottom {
    width: 100%;
    // height: 618px;
    // text-align: center;
    padding: 40px 0;
    background: #f7f8fa;
    .success,
    .error {
      .flex-center;
      justify-content: center;
      flex-direction: column;
    }
    .img-div {
      width: 220px;
      img {
        width: 100%;
      }
    }
    .text {
      margin-top: 20px;
      font-size: 24px;
      font-weight: 500;
      color: #242424;
      text-align: center;
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
  }
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
</style>
