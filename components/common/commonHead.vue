/*
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
            class=""
            mode="horizontal"
            text-color="#596371"
            active-text-color="#F7502D"
          >
            <el-menu-item
              index="1"
              @click="$router.push({ name: 'index-home' })"
              >首页</el-menu-item
            >
            <el-submenu index="2">
              <template slot="title">应用市场</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item
              index="3"
              @click="$router.push({ name: 'index-devDocument' })"
              >开发文档</el-menu-item
            >
            <el-menu-item index="4">域名真伪</el-menu-item>
            <el-menu-item index="5">资源库</el-menu-item>
            <el-menu-item index="6">帮助中心</el-menu-item>
          </el-menu>
        </div>
      </div>
      <div class="right flex-between-center">
        <el-dropdown trigger="click" @visible-change="visibleChange">
          <div class="language">
            <img :src="languageSrc" alt="language"/>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <!-- <img src="~/assets/images/home/language.png" alt="中国"> -->
              <span>中文简体</span>
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
        <div class="user">
          <img src="~/assets/images/home/user.png" alt="user" />
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
      languageSrc:require("~/assets/images/home/language.png")
    };
  },
  methods:{
    visibleChange(bol){
      bol?this.languageSrc = require("~/assets/images/home/user.png"):this.languageSrc = require("~/assets/images/home/language.png");
    }
  },
  created() {
    this.$router.push({ name: "index-home" });
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
          &:hover{
            background-color: transparent;
          }
          &:focus{
            background-color: transparent;
          }
        }
        .is-active {
          font-size: 20px;
          font-weight: 500;
          border: none;
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
