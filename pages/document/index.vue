<template>
  <div class="pt-118 page-wrap">
    <div class="dev-container">
      <div class="left" :class="isFixed && 'fixed'">
        <LeftNav :activeNav="activeNav" :activeVer="activeVer" @selectNav="selectNav" @selectVer="selectVer"></LeftNav>
      </div>

      <div class="right" :class="isFixed && 'ml'">
        <RightBegin :activeVer="activeVer" v-if="activeNav === 0"></RightBegin>
        <RightFaq :activeVer="activeVer" v-if="activeNav === 1"></RightFaq>
        <RightTem :activeVer="activeVer" v-if="activeNav === 2"></RightTem>
        <RightApi :activeVer="activeVer" v-if="activeNav === 3"></RightApi>
        <RightLog :activeVer="activeVer" v-if="activeNav === 4"></RightLog>
      </div>
    </div>
    <commonFoot />
  </div>
</template>

<script>
import { commonHead, commonFoot } from '@/components/common';

import { LeftNav, RightBegin, RightFaq, RightTem, RightApi, RightLog } from '@/components/document';
export default {
  components: { commonHead, commonFoot, LeftNav, RightBegin, RightFaq, RightTem, RightApi, RightLog },
  props: {},
  data() {
    return {
      activeNav: 0,
      activeVer: 0,
      isFixed: false
    };
  },
  computed: {},
  created() {},
  mounted() {
    document.addEventListener('scroll', e => {
      var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      if (scrollTop > 110) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    });
    let logType = this.$route.query.logType;
    if (logType) {
      this.getLog(logType);
    }
  },
  watch: {},
  methods: {
    getLog(logType) {
      if (logType == 'V10') {
        this.activeVer = 0;
      } else if (logType == 'V8') {
        this.activeVer = 1;
      }
      this.activeNav = 4;
    },
    selectNav(index) {
      window.scrollTo(0, 0);
      this.activeNav = index;
    },
    selectVer(val) {
      console.log(val, 'val');
      this.activeVer = val;
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped lang="less">
.dev-container {
  display: flex;
  background: #f7f8fa;
  // justify-content: space-between;
  padding: 30px 260px 50px 260px;
  .right {
    width: 1080px;
    // height: 550px;
    background: #fff;
    padding: 30px;
    /deep/ .c-d {
      .c-t {
        color: #242424;
        font-size: 18px;
        line-height: 20px;
        margin-bottom: 10px;
      }
      .c-pt {
        color: #666;
        font-size: 16px;
        line-height: 24px;

        word-wrap: break-word;
        white-space: pre-line;
      }
      .c-p {
        color: #666;
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 10px;
        /deep/.el-timeline {
          padding-left: 1px;
          .el-timeline-item {
            padding-bottom: 25px;
            .el-timeline-item__tail {
              border-color: #d8d8d8;
            }
            .el-timeline-item__node {
              border: 1px solid #f7502d;
              background: #ffffff;
            }
            .el-timeline-item__wrapper {
              .el-timeline-item__timestamp.is-top {
                padding-top: 2px;
                font-size: 16px;
                font-weight: 500;
                color: #242424;
              }
              .el-timeline-item__content {
                p {
                  font-size: 14px;
                  color: #596371;
                  line-height: 24px;
                }
              }
            }
          }
        }
        .why-txt {
          width: 100%;
          border: none;
        }
      }
    }
  }
}
.fixed {
  position: fixed;
  top: 135px;
  width: 220px;
}
.ml {
  margin-left: 270px;
}
@media screen and (min-width: 1200px) {
  .dev-container {
    padding: 30px 260px 50px 260px !important;
  }
}
@media screen and (max-width: 980px) {
  .dev-container {
    padding: 30px !important;
  }
}
</style>
