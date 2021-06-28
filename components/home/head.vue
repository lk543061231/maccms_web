
<template>
  <div class="page-wrap">
    <div class="head_container flex-between-center" ref="head">
      <div class="left flex-between-center">
        <div class="logo">
          <img src="~/assets/images/home/logo.png" alt="maccms-pro" />
        </div>
        <div class="menu">
          <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            text-color="#596371"
            active-text-color="#F7502D"
            @select="subMenuSelect"
          >
            <el-menu-item
              index="1"
              @click="toIndex"
              ref="indexmenu"
              >首页</el-menu-item
            >
            <el-submenu index="2" @click.native="toApplication" ref="submenu">
              <template slot="title">应用市场</template>
              <el-menu-item index="2-1">开发者中心</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">开发文档</el-menu-item>
            <el-menu-item index="4">域名真伪</el-menu-item>
            <el-menu-item index="5">资源库</el-menu-item>
            <el-menu-item index="6">帮助中心</el-menu-item>
          </el-menu>
        </div>
      </div>
      <div class="right flex-between-center">
        <el-dropdown  @visible-change="visibleChange">
          <div class="language">
            <img :src="languageSrc" alt="language" />
          </div>
          <el-dropdown-menu slot="dropdown" >
            <el-dropdown-item style="width:100px">
              <!-- <img src="~/assets/images/home/language.png" alt="中国"> -->
              <span >中文简体</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <span>Deutsch</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <span>English</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <span>English</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="user" @click.stop="clickUser">
          <!-- <img src="~/assets/images/common/common-user.png" alt="user" /> -->
          <img :src="userSrc" alt="user" />
        </div>
        <div class="primary-btn register">
          注册
          <i class="el-icon-right"></i>
        </div>
      </div>
    </div>
    <div class="body-container">
      <nuxt-child></nuxt-child>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      languageSrc: require("~/assets/images/common/common-qiu.png"),
      userSrc: require("~/assets/images/common/common-user.png"),
    };
  },
  methods: {
    visibleChange(bol) {
      bol
        ? (this.languageSrc = require("~/assets/images/common/common-qiu-active.png"))
        : (this.languageSrc = require("~/assets/images/common/common-qiu.png"));
    },
    clickUser(){
      this.userSrc = require("~/assets/images/common/common-user-active.png")
    },
    subMenuSelect(index, indexPath) {
      if (index != 1) {
        this.$message.info("敬请期待");
      }
      // 去除应用市场的激活样式
      if(this.$refs.submenu.$el.firstChild.className.indexOf("is-active")!=-1){
        this.$refs.submenu.$el.firstChild.className = "el-submenu__title"
      }
      if(index == "2-1"){
        this.$router.push({
          path:""
        })
      }
    },
    toIndex(){
      this.$router.push({
        name: "index"
      });
    },
    toApplication() {
      this.$message.info("敬请期待");
      let menuList = document.getElementsByClassName("el-menu-item");
      menuList = Array.prototype.slice.call(menuList);
      menuList.map(item => {
        if(item.className.indexOf("is-active")!=-1){
          item.className = "el-menu-item";
          item.style = "color:#596371;border-bottom:none;"
        }
      });
      this.$refs.submenu.$el.firstChild.className = "el-submenu__title is-active"
      
      return;
      this.$router.push({
        path: "/applicationMarket"
      });
    }
  },
  created() {
  },
  mounted() {
    document.addEventListener("scroll", e => {
      var scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      console.log(scrollTop);
      let head = this.$refs.head;
      if (scrollTop > 110) {
        console.log(head.className);
        head.className = "head_container flex-between-center slideUp";
      } else {
        head.className = "head_container flex-between-center";
      }
    });

    document.addEventListener("click", e=>{
      this.userSrc = require("~/assets/images/common/common-user.png")
    })
  }
};
</script>

<style lang="less" scoped>
.primary-btn(@w:100px;@h:40px;@br:20px) {
  width: @w;
  height: @h;
  line-height: @h;
  border-radius: @br;
  background: linear-gradient(270deg, #f53e2d 0%, #fe6232 100%);
  box-shadow: 0px 5px 12px 0px rgba(253, 95, 49, 0.29);
  color: #ffffff;
  text-align: center;
}
.head_container {
  width: 100%;
  min-width: 1630px;
  height: 118px;
  padding: 32px 58px 32px 62px;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  .left {
    .logo {
      width: 103px;
      height: 58px;
      margin-right: 95px;
      img {
        width: 100%;
      }
    }
    .menu {
      /deep/.el-menu--horizontal {
        border-bottom: none;
        background-color: transparent;
        .el-menu-item,
        .el-submenu__title {
          margin: 0 20px;
          padding: 0;
          font-size: 16px;
          &:hover {
            background-color: transparent;
          }
          &:focus {
            background-color: transparent;
          }
        }
        .is-active {
          font-size: 20px;
          font-weight: 500;
          border: none;
          color: #f7502d !important;
          &::after {
            content: "";
            display: block;
            position: absolute;
            width: 90%;
            height: 3px;
            background: #f7502d;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 10px;
          }
        }
        .focusing{
          border: none !important;
        }
      }
    }
  }
  .right {
    width: 220px;
    .language,
    .user {
      cursor: pointer;
      width: 30px;
      height: 30px;
      img {
        width: 100%;
      }
    }
    .register {
      cursor: pointer;
      .primary-btn();
      font-size: 14px;
    }
  }
}

.slideUp {
  position: fixed;
  background-color: #ffffff;
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.06);
}
</style>
