<template>
  <div class="">
    <div class="btns-div" v-if="!checkResult">
      <p class="text">MacCMS更新包下载渠道</p>
      <div class="btns flex-between-center pro">
        <el-popover trigger="hover" placement="bottom" v-for="(item, index) in downList" :key="index">
          <div class="app-wrap">
            <p
              class="app-item"
              @click="toDown(ele)"
              @mouseleave="hoveIndex = ''"
              @mouseenter="hoveIndex = elIndex"
              v-for="(ele, elIndex) in item.list"
              :key="elIndex"
            >
              {{ ele.ver }}
              <i v-if="elIndex != 0" :class="hoveIndex === elIndex && 'move-ing'" class="el-icon-right"></i>
            </p>
          </div>
          <div slot="reference" :class="index == 1 && 'mlr'" class="website-btn">
            <img class="b-img" :src="item.img" v-if="item.img" />
            <span>{{ item.label }}</span>
          </div>
        </el-popover>
      </div>
      <p class="text-b">下载后手动覆盖即可完成后门漏洞修复</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      hoveIndex: '',
      downList: [
        {
          label: '官方下载',
          list: [
            {
              ver: 'Pro (近期发布)',
              link: ''
            },
            {
              ver: 'V10',
              link: 'https://down.maccms.pro/v10/maccms_v10_latest_update.zip'
            },
            {
              ver: 'V8',
              link: 'https://down.maccms.pro/v8/maccms_v8_latest_update.zip'
            }
          ]
        },
        {
          label: 'Github',
          img: require('@/assets/images/common/common-git.png'),
          list: [
            {
              ver: 'Pro (近期发布)',
              link: ''
            },
            {
              ver: 'V10',
              link: 'https://github.com/maccmspro/'
            },
            {
              ver: 'V8',
              link: 'https://github.com/maccmspro/'
            }
          ]
        },
        {
          label: 'Jsdelivr',
          img: require('@/assets/images/common/common-js.png'),
          list: [
            {
              ver: 'Pro (近期发布)',
              link: ''
            },
            {
              ver: 'V10',
              link: 'https://cdn.jsdelivr.net/gh/maccmspro/download@master/maccms_v10_v2021.1000.2000_update.zip'
            },
            {
              ver: 'V8',
              link: 'https://cdn.jsdelivr.net/gh/maccmspro/download@master/maccms_v8_v2021.1050_update.zip'
            }
          ]
        }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    toDown(item) {
      if (item.link) {
        window.open(item.link);
      }
    }
  }
};
</script>

<style scoped lang="less">
.text {
  padding-top: 20px;
  font-size: 24px;
  font-weight: 500;
  color: #242424;
  text-align: center;
}
.btns-div {
  margin-top: 60px;
  width: 1200px;
  background: #fff;
  padding-bottom: 30px;
  border-radius: 8px;
  .text-b {
    color: #666;
    font-size: 16px;
    font-weight: normal;
    text-align: center;
    margin-top: 15px;
  }
  .btns {
    margin-top: 30px;
    cursor: pointer;
    justify-content: center !important;
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
  .pro {
    .website-btn {
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      &:hover {
        border: 1px solid #f7502d;
        color: #f7502d;
      }
    }
    .mlr {
      margin: 0 30px !important;
    }
    .b-img {
      width: 24px;
      height: 24px;
      margin-right: 5px;
    }
  }
}
</style>
