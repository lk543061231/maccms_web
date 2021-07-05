<template>
  <div class="page-wrap">
    <div class="head_container flex-between-center" ref="head" :class="[slide && 'slideUp', showBoxShadow && 'showboxshadow']">
      <div class="left flex-between-center">
        <div class="logo">
          <img src="~/assets/images/home/logo.png" alt="maccms-pro" />
        </div>
        <div class="menu">
          <div class="menu-item" v-for="(item, index) in menuList" :key="index">
            <el-popover v-if="item.hasPop" placement="bottom" trigger="hover">
              <div class="app-wrap" v-if="index == 1">
                <p class="app-item">开发者中心</p>
              </div>
              <div class="app-wrap" v-else-if="index == 3">
                <p class="app-item" @click="changeRouter('domainDetection', 1)">域名真伪</p>
                <p class="app-item" @click="changeRouter('domainDetection', 2)">漏洞检测</p>
                <!-- <p class="app-item" @click="changeRouter('domainDetection',3)">挂马检测</p> -->
              </div>
              <p class="menu-name" slot="reference" @click="selectRouter(item, index)" :class="activeIndex == index && 'is-active'">
                {{ item.label }}
                <i class="el-icon-arrow-down"></i>
              </p>
            </el-popover>
            <p v-else class="menu-name" slot="reference" @click="selectRouter(item, index)" :class="activeIndex == index && 'is-active'">
              {{ item.label }}
            </p>
          </div>
        </div>
      </div>
      <div class="right flex-between-center">
        <el-dropdown @visible-change="visibleChange">
          <div class="language">
            <img :src="languageSrc" alt="language" />
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item style="width:100px">
              <span @click="changeLang('zh')">中文简体</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <span @click="changeLang('zh-tw')">中文繁体</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <span @click="changeLang('en')">English</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="user" @click.stop="clickUser">
          <!-- <img src="~/assets/images/common/common-user.png" alt="user" /> -->
          <img :src="userSrc" alt="user" />
        </div>
        <div class="primary-btn register" @click="register">
          注册
          <i class="el-icon-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBoxShadow: false,
      slide: false,
      activeIndex: 0,
      languageSrc: require('~/assets/images/common/common-qiu.png'),
      userSrc: require('~/assets/images/common/common-user.png'),
      noSildeRouters: ['blog', 'blog-id'],
      menuList: [
        { label: '首页', value: 0, name: 'index' },
        { label: '应用市场', value: 1, name: 'market', hasPop: true },
        { label: '开发文档', value: 2, name: 'document' },
        { label: '域名检测', value: 3, name: 'domainDetection', hasPop: true },
        { label: '资源库', value: 4, name: 'resource' },
        { label: '博客', value: 5, name: 'blog' },
        { label: '帮助中心', value: 6, name: 'helpCenter' }
      ]
    };
  },

  computed: {
    language() {
      return this.$i18n.locale === 'en';
    }
  },
  watch: {
    $route(newV) {
      this.checkRoute(newV);
    }
  },
  mounted() {
    this.checkRoute(this.$route);
    document.addEventListener('scroll', e => {
      var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      if (scrollTop > 110) {
        let routerName = this.$route.name;
        if (this.noSildeRouters.includes(routerName)) {
          this.showBoxShadow = true;
          return;
        }
        this.slide = true;
      } else {
        this.slide = false;
      }
    });

    document.addEventListener('click', e => {
      this.userSrc = require('~/assets/images/common/common-user.png');
    });
  },
  methods: {
    checkRoute(newV) {
      console.log(newV, 'newV');
      if (newV) {
        let name = newV.name;
        let index = this.menuList.findIndex(item => item.name === name);
        this.activeIndex = index;
      }
      if (this.noSildeRouters.includes(newV.name)) {
        this.showBoxShadow = true;
      } else {
        this.showBoxShadow = false;
      }
    },
    changeRouter(name, type) {
      this.$router.push({
        name: name,
        query: {
          activeIndex: type
        }
      });
    },
    goToPage(route) {
      this.$router.push({
        name: route
      });
    },

    visibleChange(bol) {
      bol
        ? (this.languageSrc = require('~/assets/images/common/common-qiu-active.png'))
        : (this.languageSrc = require('~/assets/images/common/common-qiu.png'));
    },
    selectRouter(item, index) {
      if (index != 0 && index != 3 && index != 2 && index != 5) {
        this.$message.info('敬请期待');
        return;
      }
      if (index == 5) {
        this.showBoxShadow = true;
      }
      this.$router.push({ name: item.name });
    },

    clickUser() {
      this.userSrc = require('~/assets/images/common/common-user-active.png');
    },
    register() {
      this.$message.info('敬请期待');
    },
    changeLang(lang) {
      this.$message.info('敬请期待');
    },
    subMenuSelect(index, indexPath) {
      if (index != 1) {
        this.$message.info('敬请期待');
      }
      // 去除应用市场的激活样式
      if (this.$refs.submenu.$el.firstChild.className.indexOf('is-active') != -1) {
        this.$refs.submenu.$el.firstChild.className = 'el-submenu__title';
      }
      if (index == '2-1') {
        this.$router.push({
          path: ''
        });
      }
    }
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
  min-width: 1300px;
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
      display: flex;
      height: 40px;
      align-items: center;
      flex-shrink: 0;
      .menu-name {
        cursor: pointer;
        margin-right: 50px;
        font-size: 16px;
        color: #596371;
        width: auto;
        position: relative;
        padding: 10px 0;
        line-height: 40px;
        &.is-active {
          font-size: 20px;
          font-weight: 500;
          border: none;
          color: #f7502d !important;
          &::after {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 3px;
            background: #f7502d;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 10px;
          }
        }
        &:hover {
          font-size: 20px;
          font-weight: 500;
          border: none;
          color: #f7502d !important;
          &::after {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
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
      display: flex;
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
.showboxshadow {
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.06);
}
.slideUp {
  position: fixed;
  background-color: #ffffff;
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.06);
}
:focus {
  outline: none;
}
</style>
