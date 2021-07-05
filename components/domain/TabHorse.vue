<template>
  <div class="">
    <div>
      <p class="text success-color" v-if="checkResult">
        恭喜您，域名通过大数据匹配特征没有被挂马
      </p>
      <p class="text error-color" v-else>
        您的域名通过大数据匹配，已经被挂马!
      </p>
    </div>
    <!-- 挂马检测 -->
    <div class="detection">
      <div class="detection-success" v-if="checkResult">
        <div class="detection-success-top flex-between-center">
          <div class="detection-success-top-left fw500">
            <span class="f18-c172335">挂马站点总数：</span>
            <span class="f18-cF7502D">200002</span>
            <span class="f12-cC7C7C7" style="margin-left: 10px">(全网大数据扫描实时动态更新）</span>
          </div>
          <div class="detection-success-top-right f14-c172335" @click="visiable = true">
            <span>特征样本提交</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
        <div class="detection-success-bottom">
          <p class="f16-c242424 fw500">
            <span>检测时间：</span>
            <span>{{ checkTime }}</span>
          </p>
          <div class="detection-list">
            <div class="detection-item" v-for="(e, i) in inJEctList" :key="i">
              {{ e }}
            </div>
          </div>
        </div>
      </div>
      <div class="detection-error" v-else-if="!checkResult">
        <div class="detection-error-top fw500">
          <span class="f18-c242424">Head 请求头/返回头</span>
          <span class="f18-cF7502D" style="margin-left: 14px">0.3883</span>
          <span class="f14-c242424">/秒</span>
        </div>
        <div class="detection-error-bottom">
          <div class="detection-error-bottom-left">
            <pre>
cookie:PHPSESSID=vrcumdiciv2c9grrjkjcb5a5ko; 
Hm_lvt_eeefc29d9170f544beeda563028e2687=1625198886; 
Hm_lpvt_eeefc29d9170f544beeda563028e2687=1625198886; 
Hm_lvt_8bf597d1c539847203a70f79408f01a8=1625198886; 
Hm_lpvt_8bf597d1c539847203a70f79408f01a8=1625198886; 
Ant=https%253A%252F%252Fbaidu.com
accept-language:zh-CN,zh;q=0.9
accept-encoding:gzip, deflate, br
referer:https://www.aicesu.cn/http/
sec-fetch-dest:empty
sec-fetch-mode:cors
sec-fetch-site:same-origin
origin:https://www.aicesu.cn
user-agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) 
AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 
Safari/537.36sec-ch-ua-mobile:?0
x-requested-with:XMLHttpRequest
sec-ch-ua:" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"
                </pre
            >
            <p class="f16-c242424">匹配特征内容</p>
            <pre>
x-requested-with:XMLHttpRequest
sec-ch-ua:" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"
                </pre
            >
          </div>
          <div class="detection-error-bottom-right">
            <pre>
HTTP/1.1 302 Moved Temporarily
Server: bfe/1.0.8.18
Date: Fri, 02 Jul 2021 04:08:30 GMT
Content-Type: text/html
Content-Length: 161
Connection: keep-alive
Location: http://www.baidu.com/
                </pre
            >
          </div>
        </div>
      </div>
    </div>
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
    checkResult: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // 安装包
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
  methods: {}
};
</script>

<style scoped lang="less"></style>
