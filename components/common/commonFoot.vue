<template>
  <div class="foot-wrap">
    <p class="title f30-c242424">开源软件许可证</p>
    <div class="software-license-list flex-between-center">
        <div class="software-license-item">
            <img src="~/assets/images/home/BSD.png" alt="">
        </div>
        <div class="software-license-item">
            <img src="~/assets/images/home/MIT.png" alt="">
        </div>
        <div class="software-license-item">
            <img src="~/assets/images/home/Mozilla.png" alt="">
        </div>
        <div class="software-license-item">
            <img src="~/assets/images/home/Apache.png" alt="">
        </div>
        <div class="software-license-item">
            <img src="~/assets/images/home/LGPL.png" alt="">
        </div>
        <div class="software-license-item">
            <img src="~/assets/images/home/GPL.png" alt="">
        </div>
    </div>
    <div class="bottom flex-between-center">
        <div class="bottom-left">
            <p class="f18-c242424">开发文档</p>
            <p class="f18-c242424">应用市场</p>
            <p class="f18-c242424">影视资源</p>
            <p class="f18-c242424" @click="join">加入TG通知群</p>
        </div>
        <div class="bottom-right f14-c8F8F8F">
            MACCMS Pro  永久免费影视源码
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    methods:{
        join(type){
            window.open(type==1? 'https://t.me/maccms_news':'https://t.me/maccms_pro')
        },
    }
};
</script>

<style lang="less" scoped>
.foot-wrap {
  width: 100%;
  min-width: 1300px;
  height: 350px;
  padding: 41px 253px 55px 266px;
  background: #ffffff;
  .title{
      padding-left: 30px;
      margin-bottom: 42px;
  }
  .software-license-list{
      padding: 6px 0;
      border-top: 1px solid #F7F8FA;
      border-bottom: 1px solid #F7F8FA;
    .software-license-item{
        width: 217px;
        // height: 117px;
        img{
            width: 100%;
        }
    }
  }
  .bottom{
      padding: 20px 27px 0 30px;
      .bottom-left{
          display: flex;
          p{
              margin-right: 20px;
              cursor: pointer;
              &:last-child{
                  margin-right:0;
              }
          }
      }
  }
}
</style>
