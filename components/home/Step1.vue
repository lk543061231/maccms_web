<template>
  <div class="home-top">
    <div class="top-content">
      <p class="p1 f32-c172335">免费开源MacCMS Pro版</p>
      <p class="p2 f60-c172335">已成为全球影视站长首选！</p>
      <p class="p3">
        <span class="p3-s1 f28-cF7502D">{{ packageTitle }}</span>
        <span class="p3-s3 f28-c172335">版本号 （{{ version }}）</span>
      </p>
      <p class="p4 f16-c172335">
        更新时间（2021-07-08)
        <span class="p3-s4 f16-c172335" v-if="packageTitle != 'Pro版'" @click="toLog">更新日志</span>
      </p>
      <div class="package-list">
        <el-popover placement="bottom" v-model="showPop" trigger="hover">
          <div class="home-upload-wrap">
            <div
              v-for="(item, index) in packageUploadList"
              :key="index"
              @touchstart.stop.prevent="popChildEnter(index, 1)"
              @mouseleave="popChildLeave(index, 1)"
              @mouseenter="popChildEnter(index, 1)"
            >
              <el-popover placement="right" v-model="item['showChildPop']" popper-class="area_popper">
                <div
                  class="home-upload-edition"
                  @touchstart.stop.prevent="popVersionEnter(index, 1)"
                  @mouseleave="popVersionLeave(index, 1)"
                  @mouseenter="popVersionEnter(index, 1)"
                  v-if="index != 0"
                >
                  <p class="hu-item" v-for="(el, eI) in packageVersion" :key="eI" @click="toDown(item, eI)">
                    {{ el }}
                  </p>
                </div>

                <div @mouseleave="popVersionLeave(index, 1)" @mouseenter="popVersionEnter(index, 1)" v-else class="home-upload-edition">
                  <p class="hu-item">近期将发布上线</p>
                </div>

                <p slot="reference" class="home-upload-item" @mouseleave="packLeave(item, index)" @mouseenter="packEnete(item, index)">
                  {{ item.label }}
                  <i :class="hoveIndex === index && 'move-ing'" class="el-icon-right"></i>
                </p>
              </el-popover>
            </div>
          </div>
          <p slot="reference" @mouseenter="popEnter(1)" @mouseleave="popLeave" class="pl-item f16-c172335 pl-item-1">安装包下载</p>
        </el-popover>

        <el-popover placement="bottom" v-model="showPopnext">
          <div class="home-upload-wrap">
            <div
              v-for="(item, index) in upgradePackageList"
              :key="index"
              @touchstart.stop.prevent="popChildEnter(index, 2)"
              @mouseleave="popChildLeave(index, 2)"
              @mouseenter="popChildEnter(index, 2)"
            >
              <el-popover placement="right" v-model="item['showChildPop']" popper-class="area_popper">
                <div
                  class="home-upload-edition"
                  @touchstart.stop.prevent="popVersionEnter(index, 2)"
                  @mouseleave="popVersionLeave(index, 2)"
                  @mouseenter="popVersionEnter(index, 2)"
                  v-if="index != 0"
                >
                  <p class="hu-item" v-for="(el, eI) in packageVersion" :key="eI" @click="toDown(item, eI)">
                    {{ el }}
                  </p>
                </div>

                <div @mouseleave="popVersionLeave(index, 2)" @mouseenter="popVersionEnter(index, 2)" v-else class="home-upload-edition">
                  <p class="hu-item">近期将发布上线</p>
                </div>

                <p slot="reference" class="home-upload-item" @mouseleave="packLeave(item, index)" @mouseenter="packEnete(item, index)">
                  {{ item.label }}
                  <i :class="hoveIndex === index && 'move-ing'" class="el-icon-right"></i>
                </p>
              </el-popover>
            </div>
          </div>
          <p slot="reference" @mouseenter="popEnter(2)" @mouseleave="popLeave" class="pl-item f16-c172335 pl-item-2">升级包下载</p>
        </el-popover>
        <el-popover placement="bottom" trigger="hover">
          <div class="home-deploy-wrap">
            <p class="home-deploy-1">支持系统：Windows、Mac、Linux部署环境：PHP（5.6+）+MySql(5.5+)</p>
            <p class="home-deploy-1">PHP必须在非安全模式下运行</p>
          </div>
          <p slot="reference" @mouseenter="popEnter(3)" class="pl-item f16-c172335 pl-item-2">部署详情</p>
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      showPop: false,
      showPopnext: false,
      showChildPop: false,

      hoveIndex: '',
      version: '2021.1000.2000',
      packageList: [
        { label: '安装包下载', value: 0 },
        { label: '升级包下载', value: 1 },
        { label: '部署详情', value: 2 }
      ],
      packageTitle: 'V10',
      packageVersion: ['官方下载', 'Github', 'Jsdelivr'],
      // 安装包
      packageUploadList: [
        {
          label: 'Pro版',
          version: '近期发布',
          officialDown: '',
          gitDown: '',
          jsDown: '',
          showChildPop: false
        },
        {
          label: 'V10',
          version: '2021.1000.2000',
          officialDown: 'https://down.maccms.pro/v10/maccms_v10_latest_full.zip',
          gitDown: 'https://github.com/maccmspro/',
          jsDown: 'https://cdn.jsdelivr.net/gh/maccmspro/download@master/maccms_v10_v2021.1000.2000_full.zip',
          showChildPop: false
        },
        {
          label: 'V8',
          version: '2021.1050',
          officialDown: 'https://down.maccms.pro/v8/maccms_v8_latest_full.zip',
          gitDown: 'https://github.com/maccmspro/',
          jsDown: 'https://cdn.jsdelivr.net/gh/maccmspro/download@master/maccms_v8_v2021.1050_full.zip',
          showChildPop: false
        }
      ],
      // 升级包
      upgradePackageList: [
        {
          label: 'Pro版',
          version: '近期发布',
          officialDown: '',
          gitDown: '',
          jsDown: '',
          showChildPop: false
        },
        {
          label: 'V10',
          version: '2021.1000.2000',
          officialDown: 'https://down.maccms.pro/v10/maccms_v10_latest_update.zip',
          gitDown: 'https://github.com/maccmspro/',
          jsDown: 'https://cdn.jsdelivr.net/gh/maccmspro/download@master/maccms_v10_v2021.1000.2000_update.zip',
          showChildPop: false
        },
        {
          label: 'V8',
          version: '2021.1050',
          officialDown: 'https://down.maccms.pro/v8/maccms_v8_latest_update.zip',
          gitDown: 'https://github.com/maccmspro/',
          jsDown: 'https://cdn.jsdelivr.net/gh/maccmspro/download@master/maccms_v8_v2021.1050_update.zip',
          showChildPop: false
        }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    toLog() {
      this.$router.push({
        path: '/document',
        query: {
          logType: this.packageTitle
        }
      });
    },
    packEnete(item, index) {
      this.packageTitle = item.label;
      this.version = item.version;
      this.hoveIndex = index;
    },
    packLeave(item, index) {
      this.hoveIndex = '';
    },
    toDown(item, eI) {
      if (eI == 0) {
        item.officialDown && window.open(item.officialDown);
      } else if (eI == 1) {
        item.gitDown && window.open(item.gitDown);
      } else {
        item.jsDown && window.open(item.jsDown);
      }
      this.showPop = false;
      this.showPopnext = false;
    },
    // 外层弹出框
    popEnter(type) {
      console.log(type);
      if (type == 1) {
        this.showPop = true;
        this.showPopnext = false;
      } else if (type == 2) {
        this.showPopnext = true;
        this.showPop = false;
      } else {
        this.showPop = false;
        this.showPopnext = false;
      }
    },
    popLeave() {
      // this.showPop=false
    },
    // 一级弹出框移入
    popChildEnter(index, type) {
      console.log('click');
      if (type == 1) {
        this.packageUploadList[index].showChildPop = true;
      } else {
        this.upgradePackageList[index].showChildPop = true;
      }
    },
    // 一级弹出框移出
    popChildLeave(index, type) {
      if (type == 1) {
        this.packageUploadList[index].showChildPop = false;
      } else {
        this.upgradePackageList[index].showChildPop = false;
      }
    },
    // 二级弹出框移入
    popVersionEnter(index, type) {
      if (type == 1) {
        this.packageUploadList[index].showChildPop = true;
      } else {
        this.upgradePackageList[index].showChildPop = true;
      }
    },
    // 二级弹出框移出
    popVersionLeave(index, type) {
      if (type == 1) {
        this.packageUploadList[index].showChildPop = false;
        this.showPop = false;
      } else {
        this.upgradePackageList[index].showChildPop = false;
        this.showPopnext = false;
      }
    }
  }
};
</script>

<style scoped lang="less">
.home-top {
  min-width: 1300px;
  width: 100%;
  height: 580px;
  background: url('@/assets/images/home/home4.png') no-repeat;
  background-size: 100% 100%;
  position: relative;
  padding-top: 1px;
  .top-content {
    width: 800px;
    margin: 200px;
    .p3 {
      margin-top: 50px;
      .p3-s1 {
        margin-right: 5px;
      }
    }
    .p4 {
      margin-top: 15px;
      .p3-s4 {
        margin-left: 10px;
        text-decoration: underline;
        cursor: pointer;
      }
    }
    .package-list {
      margin-top: 40px;
      display: flex;
      align-items: center;

      .pl-item {
        margin-right: 40px;
        padding: 13px 55px;
        border-radius: 24px;
        border: 1px solid #172335;
        cursor: pointer;
      }
      .pl-item-1 {
        border: none;
        color: #fff;
        padding: 14px 56px;
        background: linear-gradient(270deg, #f53e2d 0%, #fe6232 100%);
        box-shadow: 0px 5px 12px 0px rgba(253, 95, 49, 0.29);
        &:hover {
          background: linear-gradient(270deg, #dc3828 0%, #e5552d 100%);
        }
      }
      .pl-item-2 {
        &:hover {
          background: rgba(23, 35, 53, 0.08);
        }
      }
    }
  }
}
@media screen and (min-width: 1200px) {
  .home-top {
    height: 720px !important;
  }
}
@media screen and (max-width: 980px) {
  .home-top {
    height: 540px !important;
    .top-content {
      margin: 140px 50px !important;
    }
  }
}
@media screen and (min-width: 980px) and (max-width: 1200px) {
  .home-top {
    height: 540px !important;
    .top-content {
      margin: 140px 50px !important;
    }
  }
}
</style>
