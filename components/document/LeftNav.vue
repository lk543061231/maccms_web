<template>
  <div class="">
    <div class="dev-container">
      <div class="left">
        <div class="l-top">
          <div class="lt-t">{{ activeVerItem }}版</div>
          <el-popover placement="bottom-end" width="150" trigger="hover">
            <div class="app-wrap">
              <p class="app-item" @click="selectVer(index)" v-for="(item, index) in verList" :key="index">
                {{ item }}
              </p>
            </div>
            <img slot="reference" src="~/assets/images/devDocument/dev-1.png" class="d1-img" />
          </el-popover>
        </div>
        <div class="l-list">
          <div class="nav-item" v-for="(item, index) in navList" :key="index">
            <div class="nav-con" :class="activeNav.menu == index && 'activeNav'" @click="selectNav(index)">
              <img v-if="activeNav.menu == index" class="nav-img" :src="item.aimg" />
              <img v-else class="nav-img" :src="item.img" />
              <div class="nav-tit">
                <p class="zh-t">{{ item.zhTitle }}</p>
                <p class="en-t">{{ item.enTitle }}</p>
              </div>
              <div class="icon-wrap" @click="toggleShowMore(index)" v-if="item.subMenu">
                <i v-if="item.showMore" class="el-icon-arrow-up"></i>
                <i v-else class="el-icon-arrow-down"></i>
              </div>
            </div>
            <div class="sub-menu" v-if="item.subMenu && item.showMore">
              <div
                @click="selectSub(subIndex)"
                class="sub-item"
                :class="{ active: activeNav.sub === subIndex }"
                v-for="(subItem, subIndex) in item.subMenu"
                :key="subIndex"
              >
                <p>{{ subItem.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
  components: {},
  props: {
    activeVer: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      verList: ['v10', 'v8'],
      navList: [
        {
          img: require('@/assets/images/devDocument/dev-5.png'),
          aimg: require('@/assets/images/devDocument/dev-5-a.png'),
          imgIndex: 5,
          zhTitle: '开始使用',
          enTitle: 'Getting Started'
        },
        {
          img: require('@/assets/images/devDocument/dev-4.png'),
          aimg: require('@/assets/images/devDocument/dev-4-a.png'),
          imgIndex: 4,
          zhTitle: '常见问题',
          enTitle: 'FAQ',
          subMenu: [
            {
              title: '入库接口说明'
            },
            {
              title: '多语言包支持说明'
            },
            {
              title: '定时任务'
            }
          ],
          showMore: false
        },
        {
          img: require('@/assets/images/devDocument/dev-3.png'),
          aimg: require('@/assets/images/devDocument/dev-3-a.png'),
          imgIndex: 3,
          zhTitle: '模板标签',
          enTitle: 'TempLate'
        },
        {
          img: require('@/assets/images/devDocument/dev-2.png'),
          aimg: require('@/assets/images/devDocument/dev-2-a.png'),
          imgIndex: 2,
          zhTitle: 'API文档',
          enTitle: 'API documentation'
        },
        {
          img: require('@/assets/images/devDocument/dev-6.png'),
          aimg: require('@/assets/images/devDocument/dev-6-a.png'),
          imgIndex: 5,
          zhTitle: '更新日志',
          enTitle: 'Change Log'
        }
      ]
    };
  },
  computed: {
    ...mapState('document', ['activeNav']),
    activeVerItem() {
      return this.verList[this.activeVer];
    }
  },
  created() {
    let logType = this.$route.query.logType;
    if (logType) {
      this.getLog(logType);
    }
  },
  mounted() {},
  watch: {},
  methods: {
    ...mapMutations({
      setActiveNav: 'document/SET_ACTIVE_NAV'
    }),
    getLog(logType) {
      if (logType == 'V10') {
        this.activeVer = 0;
      } else if (logType == 'V8') {
        this.activeVer = 1;
      }
      this.handleSetNav(4);
    },
    selectVer(val) {
      this.$emit('selectVer', val);
    },
    selectNav(val) {
      this.handleSetNav(val);
    },
    selectSub(i) {
      this.handleSetNav(this.activeNav.menu, i);
    },
    toggleShowMore(i) {
      this.navList[i].showMore = !this.navList[i].showMore;
    },
    handleSetNav(v, sub) {
      if (!sub && sub !== 0) {
        sub = -1;
      }
      let activeNav = {
        menu: v,
        sub: sub
      };
      this.setActiveNav(activeNav);
    }
  }
};
</script>

<style scoped lang="less">
.left {
  width: 220px;
  height: 550px;
  background: #fff;
  flex-shrink: 0;
  padding: 30px 15px;
  margin-right: 50px;
  .l-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 6px;
    border: 1px solid #ccc;
    padding: 10px 20px;
    .lt-t {
      font-size: 16px;
      color: #333;
    }
    .d1-img {
      display: block;
      width: 22px;
      height: 22px;
      cursor: pointer;
    }
  }
  .l-list {
    .nav-item {
      padding: 20px 0;

      cursor: pointer;
      position: relative;
      .nav-con {
        display: flex;

        align-items: flex-start;
        .nav-img {
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }
        .nav-tit {
          .zh-t {
            font-size: 16px;
            color: #242424;
          }
          .en-t {
            margin-top: 3px;
            font-size: 12px;
            color: #999;
          }
        }
        .icon-wrap {
          color: #f7502d;
          font-weight: bold;
          margin-left: 30px;
        }
      }
      .sub-menu {
        padding-left: 30px;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #596371;
        line-height: 20px;

        .sub-item {
          padding-top: 14px;
          &.active {
            color: #242424;
            font-weight: bold;
          }
        }
      }

      &::after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 1px;
        background: #eaeaea;
        bottom: 0px;
      }
      &:last-child {
        &::after {
          display: none;
        }
      }
    }
    .activeNav {
      .zh-t,
      .en-t {
        color: #f7502d !important;
      }
    }
  }
}
</style>
