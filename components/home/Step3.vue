<template>
  <div class="home-top">
    <div class="content ">
      <p class="f38-c172335">首选优质插件和模版</p>
      <p class="f20-c172335 mt20">您可以下载部署Pro版将提供更多优质的插件模版</p>
      <p class="f20-c8F8F8F mt30">可以直接下载到本地，自行部署到服务器内后台会自动检测到最新版将直接可以免费使用。</p>
      <p class="f20-c172335 mt30">
        模版的UI和UX，插件的功能实用型都经过严格审核，可以更好的吸引用户满足所需功能。模版和插件库预期会累计提供上千款供您选择！
      </p>
      <p class="mt30 to-look" @mouseenter="lookMove = true" @mouseleave="lookMove = false">
        去看看
        <i class="el-icon-right" style="margin-left:5px" :class="lookMove && 'move-ing'"></i>
      </p>
      <img class="look-img" src="@/assets/images/home/home3.png" />
    </div>
    <div class="content bg2">
      <img src="@/assets/images/home/home-p3.png" class="p3-img" />
      <p class="f50-cffffff">产品优势</p>
      <div class="advantage-wrap mt20">
        <div class="adcantage-list" v-for="(item, index) in advantageList" :key="index">
          <div class="adcantage-item" v-for="(data, di) in item" :key="di">
            <img :src="data.img" class="ai-img" />
            <p class="ai-t">{{ data.title }}</p>
            <p class="ai-st">{{ data.subTitle }}</p>
          </div>
        </div>
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
      lookMove: false,
      advantageList: [
        [
          {
            title: '底层技术架构',
            subTitle: '10多年技术沉淀，有着丰富的经验和技术积累，并且能够随着流行趋势加入更多当下流行的功能',
            img: require('@/assets/images/home/home-adv1.png')
          },
          {
            title: '强大的后台功能',
            subTitle: '管理后台界面大方、操作简单、功能齐全、模块众多、双端管理，只要你会电脑或手机就会使用',
            img: require('@/assets/images/home/home-adv2.png')
          },
          {
            title: '丰富的系统标签',
            subTitle:
              '系统内置了丰富的cms标签并支持thinkphp框架标签完美融合，可以调取系统内所有的数据，只要你懂一些前端知识就可以快速的开发自己的模板功能',
            img: require('@/assets/images/home/home-adv3.png')
          }
        ],
        [
          {
            title: '部署安装简单',
            subTitle: '支持任何操作系统（Windows、Mac、Linux）在PHP+MYSQL环境下可以快速键安装部署',
            img: require('@/assets/images/home/home-adv4.png')
          },
          {
            title: '第三方支付接口',
            subTitle: 'MacCMS内置多种在线支付方案，支付宝、微信等等接口，轻松配置扩展即可拥有支付功能收取打赏不发愁',
            img: require('@/assets/images/home/home-adv5.png')
          },
          {
            title: '三层级推广模式',
            subTitle:
              'MacCMS内置三层级分销模块，会员推广赚取积分，提取服务，会员层级系统社交推广站点，合理的提高用户体验性与用户使用的粘合度',
            img: require('@/assets/images/home/home-adv6.png')
          }
        ]
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {}
};
</script>

<style scoped lang="less">
.content {
  min-width: 1300px;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  align-items: center;
  .con-list {
    display: flex;
    .con-item {
      display: flex;
      align-items: center;
      margin-right: 36px;
      .con-img-wrap {
        padding: 6px;
        border-radius: 6px;
        background: #f6e8e7;
        margin-right: 10px;
        .con-img {
          width: 16px;
          height: 16px;
        }
      }
    }
  }
  .to-look {
    width: 207px;
    height: 55px;
    background: linear-gradient(270deg, #f53e2d 0%, #fe6232 100%);
    box-shadow: 0px 5px 12px 0px rgba(253, 95, 49, 0.29);
    border-radius: 28px;
    text-align: center;
    line-height: 55px;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
  }
  .look-img {
    width: 1000px;
    height: 700px;
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
}
.bg2 {
  background: url('@/assets/images/home/home5.png') no-repeat;
  background-size: 103% 100%;
  width: 100%;
  // height: 700px;
  position: relative;
  .p3-img {
    position: absolute;
    top: -100px;
    left: 78px;
    width: 250px;
    height: 250px;
  }
  .advantage-wrap {
    .adcantage-list {
      display: flex;
      border-bottom: 1px solid #ff9767;
      .adcantage-item {
        color: #fffdfe;
        padding: 40px;
        border-right: 1px solid #ff9767;
        .ai-img {
          width: 50px;
          height: 50px;
        }
        .ai-t {
          margin-top: 20px;
          font-size: 27px;
          font-weight: 600;
        }
        .ai-st {
          margin-top: 10px;
          font-size: 16px;
          min-width: 320px;
          max-width: 360px;
          white-space: normal;
        }
        &:last-child {
          border-right: none;
        }
        &:first-child {
          padding-left: 0;
        }
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>
