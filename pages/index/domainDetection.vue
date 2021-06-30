<template>
  <div class="pt-118 page-wrap">
    <div class="domain-top">
      <div class="logo-img">
        <img src="~/assets/images/domain/logo-white.png" alt="macCms" />
      </div>
      <div class="search-div">
        <div class="tab-div">
          <p
            class="tab-title"
            :class="{ active: activeIndex == 1 }"
            @click="choiceSearch(1)"
          >
            域名真伪
          </p>
          <p
            class="tab-title"
            :class="{ active: activeIndex == 2 }"
            @click="choiceSearch(2)"
          >
            漏洞检测
          </p>
        </div>
        <div class="input-div">
          <div class="input-cls">
            <el-input
              v-model="domainVal"
              placeholder="请输入检测域名"
            ></el-input>
          </div>
          <div class="btn">检测一下</div>
        </div>
        <div class="tip">
          市面已有很多假冒MACCMS平台，为保证您能找到正版网址可输入即可辨别真伪哦！
        </div>
      </div>
    </div>
    <div class="domain-bottom">
      <!-- <div class="success">
        <div class="img-div">
          <img src="~/assets/images/common/domain-success.png" />
        </div>
        <p class="text success-color">此域名是官方域名</p>
      </div> -->
      <div class="error">
        <div class="img-div">
          <img src="~/assets/images/common/domain-error.png" />
        </div>
        <p class="text error-color">此域名是假冒域名!</p>
        <div class="btns-div">
          <p class="text">官方域名</p>
          <div class="btns flex-between-center">
            <div class="website-btn">www.maccms1.pro</div>
            <div class="website-btn">www.maccms1.pro</div>
            <div class="website-btn">www.maccms1.pro</div>
            <div class="website-btn">www.maccms1.pro</div>
          </div>
        </div>
      </div>
      <div class="update"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      activeIndex: 1,
      domainVal: "",
    };
  },
  methods: {
    choiceSearch(i) {
      this.activeIndex = i;
    },
  },
};
</script>

<style scoped lang="scss">
@mixin flex-center {
  display: flex;
  align-items: center;
}
.page-wrap {
  background: #fff;
  .domain-top {
    width: 100%;
    height: 400px;
    background: url("~/assets/images/domain/domain-bg.png");
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
        @include flex-center;
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
      @include flex-center;
      margin-bottom: 19px;
      .input-cls {
        width: 700px;
        height: 50px;
        margin-right: 15px;
        border-radius: 25px;
        overflow: hidden;
        color: #f7502d;
        border: 1px solid #e1e1e1;
        /deep/.el-input {
          width: 101%;
          .el-input__inner {
            position: relative;
            padding-left: 30px;
            height: 52px;
            top: -1px;
            left: -1px;
          }
        }
      }
      .btn {
        width: 120px;
        height: 50px;
        line-height: 50px;
        background: rgba(255, 255, 255, 0.3);
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
  .domain-bottom {
    width: 100%;
    height: 618px;
    padding-top: 40px;
    .success,
    .error {
      @include flex-center;
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
      .btns {
        margin-top: 30px;
        cursor: pointer;
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
    }
    .success-color {
      color: #48d5b5;
    }
    .error-color {
      color: #f64a36;
    }
  }
}
</style>