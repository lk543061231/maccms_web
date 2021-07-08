<template>
  <div class="pt-118 page-wrap">
    <div class="domain-top">
      <div class="tag-wrap">
        <div class="tag-item" v-for="(item, index) in tagList" :key="index">
          <div class="tag-top">
            <span class="tag-title">{{ item.title | NumberQ }}</span>
            <span class="tag-label"> / {{ item.unit }}</span>
          </div>
          <p class="tag-label">{{ item.label }}</p>
        </div>
        <!-- <img src="~/assets/images/domain/logo-white.png" alt="macCms" /> -->
      </div>
      <div class="search-div">
        <!-- <div class="tab-div">
          <p class="tab-title" :class="{ active: activeIndex == 1 }" @click="choiceSearch(1)">
            域名真伪
          </p>
          <p class="tab-title" :class="{ active: activeIndex == 2 }" @click="choiceSearch(2)">
            漏洞检测
          </p>

          <p class="tab-title" :class="{ active: activeIndex == 3 }" @click="choiceSearch(3)">
            挂马检测
          </p>
        </div> -->
        <div class="input-div">
          <el-select v-model="activeIndex" placeholder="请选择" @change="choiceSearch">
            <el-option v-for="item in options" :key="item.key" :label="item.title" :value="item.key"> </el-option>
          </el-select>
          <el-input class="input" v-model="domainVal" :placeholder="palceHolder"> </el-input>

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
          <TabUrl ref="tabUrl" :domainVal="domainVal"></TabUrl>
        </div>
        <div v-if="activeIndex == 2">
          <TabBug ref="tabBug" :domainVal="domainVal"></TabBug>
        </div>
        <div v-if="activeIndex == 3">
          <TabHorse ref="horse" :domainVal.sync="domainVal"></TabHorse>
        </div>
      </div>
      <div class="update"></div>
    </div>
    <commonFoot />
  </div>
</template>

<script>
import commonHead from '@/components/common/commonHead.vue';
import commonFoot from '@/components/common/commonFoot.vue';
import { mapState } from 'vuex';
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
      title: 'MacCMS Pro-域名检测'
    };
  },
  data() {
    return {
      activeIndex: 1,
      options: [
        { key: 1, title: '域名真伪' },
        { key: 2, title: '漏洞检测' },
        { key: 3, title: '挂马检测' }
      ],
      domainVal: '',
      palceHolder: '请输入检测域名'
    };
  },
  created() {
    let query = this.$route.query;
    this.initCheck(query);
  },
  computed: {
    ...mapState('domain', ['inject']),
    tagList() {
      return [
        {
          title: this.inject.today_num,
          unit: '个',
          label: '今日被挂马新增'
        },
        {
          title: this.inject.today_repair_num,
          unit: '个',
          label: '今日修复站点'
        },
        {
          title: this.inject.total,
          unit: '个',
          label: '被挂马站点总数'
        },
        {
          title: this.inject.checked_num,
          unit: '个',
          label: '监测域名数量'
        }
      ];
    }
  },
  watch: {
    $route: function(val) {
      this.initCheck(val.query);
    },

    domainVal: function(val) {
      console.log(val);
      if (this.activeIndex == 3) {
        if (val == '' || !val) {
          this.$refs.horse.checkResult = true;
          this.$refs.horse.showTxt = false;
        } else {
          this.check();
        }
      }
    }
  },
  methods: {
    initCheck(query) {
      if (query && query.activeIndex) {
        this.activeIndex = Number(query.activeIndex);
        this.palceHolder =
          query.activeIndex == 1 || query.activeIndex == 3 ? '请输入检测域名' : '检测域名请携带http或者https协议，默认携带http';
      }
    },
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
      console.log(i);
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
    // .logo-img {
    //   width: 103px;
    //   height: 58px;
    //   margin-bottom: 38px;
    //   img {
    //     width: 100%;
    //   }
    // }
    .tag-wrap {
      margin-bottom: 50px;
      width: 1200px;
      height: 140px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .tag-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        .tag-top {
          margin-bottom: 10px;
          .tag-title {
            font-size: 40px;
            font-family: DINAlternate-Bold, DINAlternate;
            font-weight: bold;
            color: #ffffff;
            line-height: 47px;
          }
        }
        .tag-label {
          font-size: 16px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffeae0;
          line-height: 22px;
        }

        &::after {
          content: '';
          display: block;
          position: absolute;
          width: 1px;
          height: 80px;
          background: #ffd3bc;

          right: 0;
          top: 0px;
        }
        &:nth-child(4) {
          &::after {
            width: 0;
          }
        }
      }
    }
    .search-div {
      // .tab-div {
      //   .flex-center();
      //   margin-bottom: 16px;
      //   .tab-title {
      //     font-size: 16px;
      //     font-weight: 400;
      //     color: #ffeae0;
      //     cursor: pointer;
      //     & + .tab-title {
      //       margin-left: 24px;
      //     }
      //   }
      //   .active {
      //     font-size: 20px;
      //     font-weight: 500;
      //     color: #ffffff;
      //   }
      // }
    }
    .input-div {
      .flex-center;
      margin-bottom: 19px;
      position: relative;
      /deep/ .el-select {
        position: absolute;
        width: 120px;
        top: 0;
        left: 0;
        background: #f2f2f2;
        z-index: 2;
        height: 60px;
        border-radius: 30px;
        .el-input {
          // width: 120px;
          // height: 60px;
          // border-top-left-radius: 30px;
          // border-bottom-left-radius: 30px;
          .el-input__inner {
            width: 120px;
            height: 60px;
            border-top-left-radius: 30px;
            border-bottom-left-radius: 30px;
            border-right: none;
            position: relative;
            text-align: center;
            &:focus {
              border-color: #dcdfe6;
            }
          }
          &::after {
            content: '';
            display: block;
            position: absolute;
            width: 1px;
            height: 40px;
            background-color: #596371;
            opacity: 0.2;
            right: 0;
            top: 10px;
          }
        }
      }
      /deep/.input {
        width: 700px;
        height: 60px;

        margin-right: 15px;
        border-radius: 30px;
        overflow: hidden;
        color: #f7502d;
        // border: 1px solid #e1e1e1;
        .el-input__inner {
          // position: relative;
          // padding-left: 30px;
          height: 60px;
          border-radius: 30px;
          padding-left: 125px;
          // top: -1px;
          // left: -1px;
          // &:focus {
          //   border: 1px solid #e5552d !important;
          // }
          &:focus {
            border-color: #dcdfe6;
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
