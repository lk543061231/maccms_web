<template>
  <div class="pt-118 page-wrap">
    <commonHead/>
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
            <div class="btn" @click="check">检测一下</div>
          </div>
          <div class="tip">
            市面已有很多假冒MACCMS平台，为保证您能找到正版网址可输入即可辨别真伪哦！
          </div>
        </div>
      </div>
      <div class="domain-bottom" v-if="showResult">

        <div class="error" 
        v-if="showTxt"
        >
          <div class="img-div">
            <img v-if="checkResult" src="~/assets/images/common/domain-success.png" />
            <img v-else src="~/assets/images/common/domain-error.png" />
          </div>

          <div v-if="activeIndex==1">
            <p class="text success-color" v-if="checkResult">此域名是官方域名</p>
            <p class="text error-color"  v-else>此域名是假冒域名!</p>
          </div>
          <div v-if="activeIndex==2">
            <p class="text success-color" v-if="checkResult">恭喜您，检测的网站版本不存在漏洞</p>
            <div class="text error-color"  v-else>
              <p v-if="code==1001">输入地址错误，无法进行检测</p>
              <div v-else>
                <p >当前网址已提供最新版本</p>
                <p >网站版本异常存在后门漏洞挂马风险 请立即升级版本</p>
              </div>
            </div>
          </div>
          
          <div class="btns-div" v-if="!checkResult && activeIndex==1">
            <p class="text">官方域名</p>
            <div class="btns flex-between-center">
              <div class="website-btn">maccms.com</div>
              <div class="website-btn">maccms.net</div>
              <div class="website-btn">maccms.pro</div>
              <div class="website-btn">macvideojs.com</div>
            </div>
          </div>

          <div class="btns-div" v-if="!checkResult && activeIndex==2">
            <p class="text">MacCMS Pro版下载渠道</p>
            <div class="btns flex-between-center">
              <div class="website-btn">官方下载</div>
              <div class="website-btn">Github</div>
              <div class="website-btn">Jsdelivr</div>
            </div>
          </div>
        </div>
        <div class="update"></div>
      </div>
    <commonFoot/>
  </div>
</template>

<script>
import commonHead from '@/components/common/commonHead.vue';
import commonFoot from '@/components/common/commonFoot.vue';
export default {
  components:{
        commonHead,
        commonFoot
    },
  data() {
    return {
      activeIndex: 1,
      domainVal: "",
      passUrl:[
        'maccms.com',
        'maccms.net',
        'maccms.pro',
        'macvideojs.com',
      ],
      checkResult:'',
      showResult:false,
      is_fake:false,
      code:'',
      loading:false,
      showTxt:false
    };
  },
  created(){
    let query=this.$route.query
    if(query && query.activeIndex){
      this.activeIndex=query.activeIndex
    }
  },
  watch:{
    $route:function(val){
      this.activeIndex=val.query.activeIndex
    }
  },
  methods: {
    check(){
      if(this.activeIndex==1){
        this.showResult=true
        // 域名检测
        var testDomainReg = /^mac(cms.com|cms.net|cms.pro|videojs.com)$/;
        if(testDomainReg.test(this.domainVal)){
            this.checkResult=true
        }else{
            this.checkResult=false
        }
      }else{
        this.showResult=true
        // 漏洞检测
        // https://www.maccms.pro/yapi/maccms/isfake
        this.loading=true
        let t=new Date().getTime()
        this.$axios.post('yapi/maccms/isfake',{url:this.domainVal,t:t}).then(res => {
          this.code=res.data.code
          if(res.data.code==1){
            this.checkResult=!res.data.is_fake
          }
          this.loading=false
          this.showTxt=true
        })
        // this.ajaxRquest(this.domainVal+'/static/js/admin_common.js?t='+t,(res)=>{
        //   console.log(res)
        // })
      }
    },
    ajaxRquest(url,callback){
      var xhr=new XMLHttpRequest();
        xhr.open('GET',url,false);
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){
                if(xhr.status==200 || xhr.status==304){
                    callback(xhr.responseText);
                }
            }
        }
        xhr.send()
    },
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
    // height: 618px;
    padding: 40px 0;
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