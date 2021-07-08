<template>
  <div>
    <div class="pt-118">
      <div class="helpcenter-contain">
        <div class="helpcenter-contain-top">
          <div class="helpcenter-contain-top-1 flex-between-center">
            <div>
              <div class="top-1-title">
                <span>MacCMS</span>
                <span class="pro">Pro</span>
                <span>帮助中心</span>
              </div>
              <div class="f18-c666666 fw200 mt30">
                您对平台有任何疑问，可以与工作人员联系
              </div>
            </div>
            <div class="top-img">
              <img src="~/assets/images/helpCenter/main.png" />
            </div>
          </div>
        </div>
        <div class="helpcenter-contain-bottom">
          <div class="helpcenter-contain-bottom-item flex-between-center">
            <div class="img-text">
              <img src="~/assets/images/helpCenter/img1.png" />
              <span>一键搭建平台，直接<span @click="goToPage('/')" class="f18-cF7502D">下载</span>免费影视源码</span>
            </div>
            <div class="img-text">
              <img src="~/assets/images/helpCenter/img2.png" />
              <span
                >需要二次开发，可以直接访问<span class="f18-cF7502D" @click="goToPage('/document')">开发文档</span
                >页面，帮助您了解开发文档</span
              >
            </div>
          </div>
          <div class="helpcenter-contain-bottom-item flex-between-center">
            <div class="img-text">
              <img src="~/assets/images/helpCenter/img3.png" />
              <span>发送邮件到<a href="mailto:ceo@maccms.pro" class="f18-cF7502D">ceo@maccms.pro</a>告知系统问题或者疑问</span>
            </div>
            <div class="img-text">
              <img src="~/assets/images/helpCenter/img4.png" />
              <span
                >通过在<a href="https://github.com/maccmspro/maccms10" target="_blank" class="f18-cF7502D">maccmspro/pro</a
                >代码仓库提交issues来<a href="https://github.com/maccmspro/maccms10/issues" target="_blank" class="f18-cF7502D"
                  >报告Bug</a
                ></span
              >
            </div>
          </div>
          <div class="helpcenter-contain-bottom-item flex-between-center">
            <div class="img-text">
              <img src="~/assets/images/helpCenter/img5.png" />
              <span>咨询其他问题，请发送邮件<a href="mailto:help@maccms.pro" class="f18-cF7502D">help@maccms.pro</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <commonFoot />
  </div>
</template>

<script>
import commonHead from '@/components/common/commonHead.vue';
import commonFoot from '@/components/common/commonFoot.vue';
export default {
  components: {
    commonHead,
    commonFoot
  },
  head() {
    return {
      title: 'MacCMS Pro-帮助中心'
    };
  },
  methods: {
    goToPage(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style lang="less" scoped>
.f18-c666666 {
  font-size: 18px;
  color: #666666;
}
.helpcenter-contain {
  min-width: 1388px;
  background: #f7f8fa;
  padding-bottom: 50px;
  .helpcenter-contain-top {
    height: 420px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .helpcenter-contain-top-1 {
      .top-1-title {
        font-size: 38px;
        color: #596371;
        font-weight: 500;
        .pro {
          font-size: 40px;
          color: #ffffff;
          background: linear-gradient(270deg, #f53e2d 0%, #fe6232 100%);
          border-radius: 14px 17px 17px 0px;
          padding: 0 15px 0 18px;
        }
      }
      .top-img {
        width: 446px;
        img {
          width: 100%;
        }
      }
    }
  }
  .helpcenter-contain-bottom {
    height: 400px;
    background-color: #ffffff;
    padding-top: 50px !important;
    .helpcenter-contain-bottom-item {
      padding: 31px 0 28px;
      user-select: none;
      .img-text {
        display: flex;
        align-items: center;
        min-width: 660px;
        img {
          width: 46px;
          margin-right: 11px;
        }
        .f18-cF7502D {
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
          &:active {
            opacity: 0.5;
          }
        }
      }
      &:not(:last-child) {
        border-bottom: 1px solid #f1f1f1;
      }
    }
  }
  @media screen and (min-width: 1201px) {
    .helpcenter-contain-top,
    .helpcenter-contain-bottom {
      padding: 0 260px;
    }
  }
  @media screen and (max-width: 1200px) {
    .helpcenter-contain-top,
    .helpcenter-contain-bottom {
      padding: 0 60px;
    }
  }
}
</style>
