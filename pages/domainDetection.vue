<template>
  <div class="pt-118 page-wrap">
    <commonHead />
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
          <p
            class="tab-title"
            :class="{ active: activeIndex == 3 }"
            @click="choiceSearch(3)"
          >
            挂马检测
          </p>
        </div>
        <div class="input-div">
          <div class="input-cls" :class="inputCheck && 'global-input-focus'">
            <el-input
              v-model="domainVal"
              @focus="inputCheck = true"
              @blur="inputCheck = false"
              :placeholder="palceHolder"
            ></el-input>
          </div>
          <div class="btn global-btn-hover1" @click="check">检测一下</div>
        </div>
        <div class="tip">
          {{
            activeIndex == 1
              ? "市面已有很多假冒MACCMS平台，为保证您能找到正版网址可输入即可辨别真伪哦！"
              : activeIndex == 2
              ? "快速检测网站当前使用版本是否存在漏洞"
              : "因.la版本挂马问题而自研大数据全网采集系统指纹识别MacCMS并实时监测被挂马的网站第一时间云端同步预警"
          }}
        </div>
      </div>
    </div>
    <div class="domain-bottom">
      <!-- <div class="error" v-if="showTxt"> -->
      <div class="error" v-if="showTxt">
        <div class="img-div">
          <img
            v-if="checkResult"
            src="~/assets/images/common/domain-success.png"
          />
          <img v-else src="~/assets/images/common/domain-error.png" />
        </div>

        <div v-if="activeIndex == 1">
          <p class="text success-color" v-if="checkResult">此域名是官方域名</p>
          <p class="text error-color" v-else>此域名是假冒域名!</p>
        </div>
        <div v-if="activeIndex == 2">
          <p class="text success-color" v-if="checkResult">
            恭喜您，检测的网站版本不存在漏洞
          </p>
          <div class="text error-color" v-else>
            <p v-if="code == 1002">
              {{ resMsg || "输入地址错误，无法进行检测" }}
            </p>
            <div v-else>
              <p class="p-1">当前网址已提供最新版本</p>
              <p>网站版本异常存在后门漏洞挂马风险 请立即升级版本</p>
            </div>
          </div>
        </div>

        <div v-if="activeIndex == 3">
          <p class="text success-color" v-if="checkResult">
            恭喜您，域名通过大数据匹配特征没有被挂马
          </p>
          <p class="text error-color" v-else>
            您的域名通过大数据匹配，已经被挂马!
          </p>
        </div>
        <div class="btns-div" v-if="!checkResult && activeIndex == 1">
          <p class="text">官方域名</p>
          <div class="btns flex-between-center">
            <div class="website-btn">maccms.com</div>
            <div class="website-btn">maccms.net</div>
            <div class="website-btn">maccms.pro</div>
            <div class="website-btn">macvideojs.com</div>
          </div>
        </div>
        
        <!-- 挂马检测 -->
        <div class="detection" v-if="activeIndex == 3">
          <div class="detection-success" v-if="checkResult && activeIndex == 3">
            <div class="detection-success-top flex-between-center">
              <div class="detection-success-top-left fw500">
                <span class="f18-c172335">挂马站点总数：</span>
                <span class="f18-cF7502D">200002</span>
                <span class="f12-cC7C7C7" style="margin-left: 10px"
                  >(全网大数据扫描实时动态更新）</span
                >
              </div>
              <div class="detection-success-top-right f14-c172335" @click="visiable=true">
                <span>特征样本提交</span>
                <i class="el-icon-arrow-right"></i>
              </div>
            </div>
            <div class="detection-success-bottom">
              <p class="f16-c242424 fw500">
                <span>检测时间：</span>
                <span>{{checkTime}}</span>
              </p>
              <div class="detection-list">
                <div class="detection-item" v-for="(e,i) in inJEctList" :key="i">
                  {{e}}
                </div>
              </div>
            </div>
          </div>
          <div class="detection-error" v-else-if="!checkResult && activeIndex == 3">
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
                </pre>
                <p class="f16-c242424">匹配特征内容</p>
                <pre>
x-requested-with:XMLHttpRequest
sec-ch-ua:" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"
                </pre>
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
                </pre>
              </div>
            </div>
          </div>
        </div>

        <!--  v-if="!checkResult && (activeIndex == 2 || activeIndex == 3)" -->
        <div class="btns-div" v-if="!checkResult && (activeIndex == 2 || activeIndex == 3)">
          <p class="text">MacCMS更新包下载渠道</p>
          <div class="btns flex-between-center pro">
            <el-popover
              trigger="hover"
              placement="bottom"
              v-for="(item, index) in downList"
              :key="index"
            >
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
                  <i
                    v-if="elIndex != 0"
                    :class="hoveIndex === elIndex && 'move-ing'"
                    class="el-icon-right"
                  ></i>
                </p>
              </div>
              <div
                slot="reference"
                :class="index == 1 && 'mlr'"
                class="website-btn"
              > 
                <img class="b-img" :src="item.img" v-if="item.img">
                <span>{{ item.label }}</span>
                
              </div>
            </el-popover>
          </div>
          <p class="text-b">下载后手动覆盖即可完成后门漏洞修复</p>
        </div>
      </div>
      <div class="update"></div>
    </div>
    <commonFoot />
    <sampleDialog :visiable.sync="visiable"/>
  </div>
</template>

<script>
import { getIsfake,checkSiteInject,getInjectList } from "@/utils/api";
import { timestampToTime } from "@/utils/index";
import commonHead from "@/components/common/commonHead.vue";
import commonFoot from "@/components/common/commonFoot.vue";
import sampleDialog from "@/components/sampleDialog.vue";
export default {
  components: {
    commonHead,
    commonFoot,
    sampleDialog
  },
  data() {
    return {
      inputCheck: false,
      activeIndex: 1,
      domainVal: "",
      passUrl: ["maccms.com", "maccms.net", "maccms.pro", "macvideojs.com"],
      hoveIndex: "",
      checkResult: "",
      showResult: false,
      is_fake: false,
      code: "",
      showTxt: false,
      palceHolder: "请输入检测域名",
      // 安装包
      downList: [
        {
          label: "官方下载",
          list: [
            {
              ver: "Pro (近期发布)",
              link: "",
            },
            {
              ver: "V10",
              link: "https://down.maccms.pro/v10/maccms_v10_latest_update.zip",
            },
            {
              ver: "V8",
              link: "https://down.maccms.pro/v8/maccms_v8_latest_update.zip",
            },
          ],
        },
        {
          label: "Github",
          img:require('@/assets/images/common/common-git.png'),
          list: [
            {
              ver: "Pro (近期发布)",
              link: "",
            },
            {
              ver: "V10",
              link: "https://github.com/maccmspro/",
            },
            {
              ver: "V8",
              link: "https://github.com/maccmspro/",
            },
          ],
        },
        {
          label: "Jsdelivr",
          img:require('@/assets/images/common/common-js.png'),
          list: [
            {
              ver: "Pro (近期发布)",
              link: "",
            },
            {
              ver: "V10",
              link: "https://cdn.jsdelivr.net/gh/maccmspro/download@master/maccms_v10_v2021.1000.2000_update.zip",
            },
            {
              ver: "V8",
              link: "https://cdn.jsdelivr.net/gh/maccmspro/download@master/maccms_v8_v2021.1050_update.zip",
            },
          ],
        },
      ],
      resMsg: "",
      visiable:false,
      inJEctList:[],
      checkTime:'',
    };
  },
  created() {
    let query = this.$route.query;
    if (query && query.activeIndex) {
      this.activeIndex = query.activeIndex;
      this.palceHolder =
        query.activeIndex == 1 || query.activeIndex == 3
          ? "请输入检测域名"
          : "检测域名请携带http或者https协议，默认携带http";
    }
    this.getInject()
  },
  watch: {
    $route: function (val) {
      this.activeIndex = val.query.activeIndex;
      this.palceHolder =
        val.query.activeIndex == 1
          ? "请输入检测域名"
          : "检测域名请携带http或者https协议，默认携带http";
    },
  },
  methods: {
    check() {
      if (this.activeIndex == 1) {
        this.showTxt = true;
        this.checkResult = this.passUrl.some((item) => {
          return this.domainVal.indexOf(item) != -1;
        });
      } else{
        // 漏洞检测
        if (!this.domainVal) {
          return;
        } else if (this.domainVal.indexOf("http") == -1) {
          this.domainVal = "http://" + this.domainVal;
        }
        const loading = this.$loading({
          lock: true,
          text: "Loading",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.7)",
        });
        let t = new Date().getTime();
        if(this.activeIndex == 2){
          getIsfake({ url: this.domainVal, t: t }).then((res) => {
            loading.close();
            this.code = res.data.code;
            if (res.data.code == 1) {
              this.checkResult = !res.data.info.is_fake;
            } else {
              this.resMsg = res.data.msg;
              this.checkResult = false;
            }
            this.showTxt = true;
          });
        }else if(this.activeIndex == 3){
          checkSiteInject({ url: this.domainVal, t: t }).then(res=>{
            loading.close();
            if(res.data.code==0){
              this.checkTime=timestampToTime(new Date().getTime())
              this.checkResult=!res.data.is_inject
              
            }else{
              this.checkResult=false
            }
            this.showTxt = true;
          })
        }

      } 
    },
    getInject(){
      getInjectList().then(res=>{
        if(res.data.code==0){
          this.inJEctList=res.data.data
        }
      })
    },
    toDown(item) {
      if (item.link) {
        window.open(item.link);
      }
    },

    choiceSearch(i) {
      this.showTxt = false;
      this.activeIndex = i;
      this.palceHolder =
        i == 1
          ? "请输入检测域名"
          : "检测域名请携带http或者https协议，默认携带http";
    },
    downLoad(type) {
      console.log(type);
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
        background: rgba(255, 255, 255, 0);
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
    // height: 618px;
    padding: 40px 0;
    background: #F7F8FA;
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
          display: block;
        }
        .b-img{
            width: 24px;
            height: 24px;
            margin-right: 5px;
          }
        
      }
    }
    .detection {
      padding: 30px 40px;
      margin-top: 30px;
      width: 1200px;
      min-height: 374px;
      background: #ffffff;
      .detection-success {
        .detection-success-top {
          padding-bottom: 23px;
          border-bottom: 1px solid #eaeaea;
          .detection-success-top-left {
            display: flex;
            align-items: center;
          }
          .detection-success-top-right {
            cursor: pointer;
            user-select: none;
            &:active {
              opacity: 0.6;
            }
          }
        }
        .detection-success-bottom {
          margin-top: 20px;
          .detection-list {
            margin-top: 23px;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            .detection-item {
              width: 270px;
              height: 50px;
              line-height: 50px;
              color: #666666;
              font-size: 16px;
              text-align: left;
              padding-right: 10px;
              margin-bottom: 8px;
            }
          }
        }
      }
      .detection-error{
        .detection-error-top{
          padding-bottom: 23px;
          border-bottom: 1px solid #eaeaea;}
        .detection-error-bottom{
          margin-top: 17px;
          display: flex;
          .detection-error-bottom-left{
            width: 525px;
            height: 570px;
            color: #666666;
            font-size: 14px;
            pre{
              line-height: 25px;
            }
          }
          .detection-error-bottom-right{
            color: #666666;
            margin-left: 80px;
            font-size: 14px;
            pre{
              line-height: 25px;
            }
          }
        }
      }
    }
    .success-color {
      color: #48d5b5;
    }
    .error-color {
      color: #f64a36;
      .p-1 {
        font-size: 16px;
        color: #333;
        margin-bottom: 5px;
      }
    }
  }
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
</style>