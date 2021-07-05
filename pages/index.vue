<template>
    <div class="container">
      <commonHead ref="commonHead" />
        <div class="page-wrap">
            <div class="home-top">
                <div class="top-content">
                    <p class="p1 f32-c172335">免费开源MacCMS Pro版</p>
                    <p class="p2 f60-c172335">已成为全球影视站长首选！</p>
                    <p class="p3">
                        <span class="p3-s1 f28-cF7502D">{{packageTitle}}</span>
                        <span class="p3-s3 f28-c172335">版本号 （{{version}}）</span>
                        
                    </p>
                    <p class="p4 f16-c172335">更新时间（2021-06-30)
                        <span class="p3-s4 f16-c172335" v-if="packageTitle!='Pro版'" @click="toLog">更新日志</span>
                    </p>
                    <div class="package-list">
                        <el-popover
                            placement="bottom"
                            v-model="showPop"
                        >
                            <div class="home-upload-wrap">
                                <div 
                                    v-for="(item,index) in  packageUploadList" :key="index" 
                                    @mouseleave="popChildLeave(index,1)"
                                    @mouseenter="popChildEnter(index,1)">
                                    <el-popover
                                        placement="right"
                                        v-model="item['showChildPop']"
                                        popper-class="area_popper"
                                    >
                                        <div class="home-upload-edition"
                                        @mouseleave="popVersionLeave(index,1)"
                                        @mouseenter="popVersionEnter(index,1)"
                                        v-if="index!=0">
                                            <p class="hu-item"
                                                v-for="el,eI in packageVersion" :key="eI"
                                                
                                                @click="toDown(item,eI)" 
                                                >
                                                {{el}}
                                            </p>
                                        </div>

                                        <div 
                                        @mouseleave="popVersionLeave(index,1)"
                                        @mouseenter="popVersionEnter(index,1)"
                                        v-else class="home-upload-edition">
                                            <p class="hu-item">近期将发布上线</p>
                                        </div>

                                        <p slot="reference" 
                                        class="home-upload-item" 
                                        @mouseleave="packLeave(item,index)"
                                        @mouseenter="packEnete(item,index)">
                                            {{item.label}}
                                            <i :class="hoveIndex===index && 'move-ing'" class="el-icon-right"></i>
                                        </p>
                                    </el-popover>
                                </div>
                            </div>
                            <p slot="reference" @mouseenter="popEnter(1)" @mouseleave="popLeave" class="pl-item f16-c172335 pl-item-1" >安装包下载 </p>
                        </el-popover>

                        <el-popover
                            placement="bottom"
                            v-model="showPopnext"
                        >
                            <div class="home-upload-wrap">
                                <div 
                                    v-for="(item,index) in upgradePackageList" :key="index" 
                                    @mouseleave="popChildLeave(index,2)"
                                    @mouseenter="popChildEnter(index,2)">
                                    <el-popover
                                        placement="right"
                                        v-model="item['showChildPop']"
                                        popper-class="area_popper"
                                    >
                                        <div class="home-upload-edition"
                                        @mouseleave="popVersionLeave(index,2)"
                                        @mouseenter="popVersionEnter(index,2)"
                                        v-if="index!=0">
                                            <p class="hu-item"
                                                v-for="el,eI in packageVersion" :key="eI"
                                                
                                                @click="toDown(item,eI)" 
                                                >
                                                {{el}}
                                            </p>
                                        </div>

                                        <div 
                                        @mouseleave="popVersionLeave(index,2)"
                                        @mouseenter="popVersionEnter(index,2)"
                                        v-else class="home-upload-edition">
                                            <p class="hu-item">近期将发布上线</p>
                                        </div>

                                        <p slot="reference" 
                                        class="home-upload-item" 
                                        @mouseleave="packLeave(item,index)"
                                        @mouseenter="packEnete(item,index)">
                                            {{item.label}}
                                            <i :class="hoveIndex===index && 'move-ing'" class="el-icon-right"></i>
                                        </p>
                                    </el-popover>
                                </div>
                            </div>
                            <p slot="reference" @mouseenter="popEnter(2)" @mouseleave="popLeave" class="pl-item f16-c172335 pl-item-2" >升级包下载 </p>
                        </el-popover>
                        <el-popover
                            placement="bottom"
                            trigger="hover"
                        >
                            <div class="home-deploy-wrap">
                                <p class="home-deploy-1">支持系统：Windows、Mac、Linux部署环境：PHP（5.6+）+MySql(5.5+)</p>
                                <p class="home-deploy-1">PHP必须在非安全模式下运行</p>
                            </div>
                            <p slot="reference" @mouseenter="popEnter(3)" class="pl-item f16-c172335 pl-item-2">部署详情 </p>
                        </el-popover>
                    </div>
                </div>
            </div>
            <div class="home-step">
                <div class="step-list">
                    <img src="@/assets/images/home/home-p1.png" class="p1-img">
                    <div class="step-item" v-for="(item,index) in stepList" :key="index">
                        <p class="si-s1">{{item.title}}</p>
                        <p class="si-s2">{{item.subTitle}}</p>
                        <img class="si-img" :src="item.img" >
                    </div>
                </div>
            </div>
            <div class="content bg1">
                <img src="@/assets/images/home/home-p2.png" class="p2-img">
                <p class="f38-c172335">Pro版UI设计 交互体验大更新</p>
                <p class="f20-c172335 mt20">永久免费开源专业影视MacCMS Pro版</p>
                <p class="f20-c8F8F8F mt30">新版本默认模版对应用户体验，UI，UX都是的最先反馈出平台高留存的核心因素，能够大幅度提神站长的盈利目标。</p>
                <div class="con-list mt30">
                    <div class="con-item" v-for="(item,index) in conList" :key="index">
                        <div class="con-img-wrap">
                            <img class="con-img" :src="item.img" >
                        </div>
                        <span class="f16-c8F8F8F">{{item.label}}</span>
                    </div>
                </div>
                <img class="mt30" src="@/assets/images/home/home2.png" >
            </div>
            <div class="content ">
                <p class="f38-c172335">首选优质插件和模版</p>
                <p class="f20-c172335 mt20">您可以下载部署Pro版将提供更多优质的插件模版</p>
                <p class="f20-c8F8F8F mt30">可以直接下载到本地，自行部署到服务器内后台会自动检测到最新版将直接可以免费使用。</p>
                <p class="f20-c172335 mt30">模版的UI和UX，插件的功能实用型都经过严格审核，可以更好的吸引用户满足所需功能。模版和插件库预期会累计提供上千款供您选择！</p>
                <p class="mt30 to-look" @mouseenter="lookMove=true" @mouseleave="lookMove=false">
                    去看看
                    <i class="el-icon-right" style="margin-left:5px" :class="lookMove && 'move-ing'"></i>
                </p>
                <img  class="look-img" src="@/assets/images/home/home3.png" >
            </div>
            <div class="content bg2">
                <img src="@/assets/images/home/home-p3.png" class="p3-img">
                <p class="f50-cffffff">产品优势</p>
                <div class="advantage-wrap mt20">
                    <div class="adcantage-list" v-for="(item,index) in advantageList" :key="index">
                        <div class="adcantage-item" v-for="(data,di) in item" :key="di">
                            <img :src="data.img" class="ai-img">
                            <p class="ai-t">{{data.title}}</p>
                            <p class="ai-st">{{data.subTitle}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content partner">
                <p class="f50-c242424">合作伙伴</p>
                <div class="partner-wrap" >
                    <img class="p-img mt30" 
                    v-for="(img,iIndex) in partnerList" 
                    :key="iIndex" :src="img.img" 
                    @mouseleave="mouseLeave(img,img.value)"
                    @mouseenter="mouseEnter(img,img.value)">
                </div>
            </div>
        </div>
        <div class="notice" v-if="showNotice" @click.self="showNotice=false">
            <div class="notice-wrap">
                <img class="n7-img" src="@/assets/images/home/home-n7.png" >
                <img class="n1-img" src="@/assets/images/home/home-n1.png" @click="showNotice=false">
                <p class="p1">重要公告 谨防假冒</p>

                <p class="p2 mt20">近期发现不法份子冒充MacCMS官方进行假冒，小伙伴们务必小心！可以通过下方链接进入官网群频道</p>
                <p class="p3 mt10">
                    <i class="el-icon-warning-outline"></i>
                    以下是冒充官方假冒信息（擦亮双眼 请勿轻信）
                </p>
                <img class="n2-img" src="@/assets/images/home/home-n2.png" >
                <div class="img-wrap " >
                    <img class="n5-img" src="@/assets/images/home/home-n5.png" >
                    <img class="n3-img" src="@/assets/images/home/home-n3.png" >
                </div>
                <img class="n6-img mt10" src="@/assets/images/home/home-n6.png" >
                <img  class="n8-img " src="@/assets/images/home/home-n8.png" >
                <img class="n4-img " src="@/assets/images/home/home-n4.png" @click="jump">

            </div>
        </div>
      <commonFoot/>
      <floatTooltip/>
    </div>
</template>

<script>
import commonHead from '@/components/common/commonHead.vue';
import commonFoot from '@/components/common/commonFoot.vue';
import floatTooltip from '@/components/floatTooltip.vue';
export default {
    components:{
        commonHead,
        commonFoot,
        floatTooltip
    },
    head(){
        return {
            title:'MacCMS Pro-首页',
        }
    },
    data(){
        return{
            showPop:false,
            showPopnext:false,
            showChildPop:false,
            lookMove:false,
            hoveIndex:'',
            packageTitle:'V10',
            version:'2021.1000.2000',
            inOne:false,
            inTwo:false,
            packageList:[
                {label:'安装包下载',value:0},
                {label:'升级包下载',value:1},
                {label:'部署详情',value:2},
            ],
            packageVersion:[
                '官方下载','Github','Jsdelivr'
            ],
            // 安装包
            packageUploadList:[
                {
                    label:'Pro版',
                    version:'近期发布',
                    officialDown:'',
                    gitDown:'',
                    jsDown:'',
                    showChildPop:false,
                },{
                    label:'V10',
                    version:'2021.1000.2000',
                    officialDown:'https://down.maccms.pro/v10/maccms_v10_latest_full.zip',
                    gitDown:'https://github.com/maccmspro/',
                    jsDown:'https://cdn.jsdelivr.net/gh/maccmspro/download@master/maccms_v10_v2021.1000.2000_full.zip',
                    showChildPop:false,
                },{
                    label:'V8',
                    version:'2021.1050',
                    officialDown:'https://down.maccms.pro/v8/maccms_v8_latest_full.zip',
                    gitDown:'https://github.com/maccmspro/',
                    jsDown:'https://cdn.jsdelivr.net/gh/maccmspro/download@master/maccms_v8_v2021.1050_full.zip',
                    showChildPop:false,
                }
            ],
            // 升级包
            upgradePackageList:[
                {
                    label:'Pro版',
                    version:'近期发布',
                    officialDown:'',
                    gitDown:'',
                    jsDown:'',
                    showChildPop:false,
                },{
                    label:'V10',
                    version:'2021.1000.2000',
                    officialDown:'https://down.maccms.pro/v10/maccms_v10_latest_update.zip',
                    gitDown:'https://github.com/maccmspro/',
                    jsDown:'https://cdn.jsdelivr.net/gh/maccmspro/download@master/maccms_v10_v2021.1000.2000_update.zip',
                    showChildPop:false,
                },{
                    label:'V8',
                    version:'2021.1050',
                    officialDown:'https://down.maccms.pro/v8/maccms_v8_latest_update.zip',
                    gitDown:'https://github.com/maccmspro/',
                    jsDown:'https://cdn.jsdelivr.net/gh/maccmspro/download@master/maccms_v8_v2021.1050_update.zip',
                    showChildPop:false,
                }
            ],
            stepList:[
                    {title:'99%',subTitle:'占有率',img:require('@/assets/images/home/home-s1.png')},
                    {title:'300W+',subTitle:'安装量',img:require('@/assets/images/home/home-s2.png')},
                    {title:'12年',subTitle:'技术沉淀',img:require('@/assets/images/home/home-s3.png')},
            ],
            conList:[
                    {label:'增加API开发文档',img:require('@/assets/images/home/home-con1.png')},
                    {label:'提升二次开发的效率',img:require('@/assets/images/home/home-con2.png')},
                    {label:'WebPack等原生开发',img:require('@/assets/images/home/home-con3.png')},
                    {label:'支持APP开发',img:require('@/assets/images/home/home-con4.png')},
            ],
            advantageList:[
                    [
                        {title:'底层技术架构',subTitle:'10多年技术沉淀，有着丰富的经验和技术积累，并且能够随着流行趋势加入更多当下流行的功能',img:require('@/assets/images/home/home-adv1.png')},
                        {title:'强大的后台功能',subTitle:'管理后台界面大方、操作简单、功能齐全、模块众多、双端管理，只要你会电脑或手机就会使用',img:require('@/assets/images/home/home-adv2.png')},
                        {title:'丰富的系统标签',subTitle:'系统内置了丰富的cms标签并支持thinkphp框架标签完美融合，可以调取系统内所有的数据，只要你懂一些前端知识就可以快速的开发自己的模板功能',img:require('@/assets/images/home/home-adv3.png')},
                    ],
                    [
                        {title:'部署安装简单',subTitle:'支持任何操作系统（Windows、Mac、Linux）在PHP+MYSQL环境下可以快速键安装部署',img:require('@/assets/images/home/home-adv4.png')},
                        {title:'第三方支付接口',subTitle:'苹果CMS内置多种在线支付方案，支付宝、微信等等接口，轻松配置扩展即可拥有支付功能收取打赏不发愁',img:require('@/assets/images/home/home-adv5.png')},
                        {title:'三层级推广模式',subTitle:'苹果CMS内置三层级分销模块，会员推广赚取积分，提取服务，会员层级系统社交推广站点，合理的提高用户体验性与用户使用的粘合度',img:require('@/assets/images/home/home-adv6.png')},
                    ]
            ],
            partnerList:[
                {img:require('@/assets/images/home/home-i1.png'),value:1},
                {img:require('@/assets/images/home/home-i2.png'),value:2},
                // {img:require('@/assets/images/home/home-i3.png'),value:3},
                // {img:require('@/assets/images/home/home-i4.png'),value:4},
                {img:require('@/assets/images/home/home-i5.png'),value:5},
                // {img:require('@/assets/images/home/home-i6.png'),value:6},
                {img:require('@/assets/images/home/home-i7.png'),value:7},
            ],
            showNotice:false,
            changeRouterName:''
        }
    },
    mounted(){
        let href=window.location.href
        if(href.indexOf('maccms.pro')!=-1){
            this.showNotice=true
        }else{
            this.showNotice=false
        }
    },
    methods:{
        toLog(){
            this.$router.push({
                path:'/devDocument',
                query:{
                    logType:this.packageTitle
                }
            })
            sessionStorage.setItem('routerName','devDocument')
            this.$refs.commonHead.changeActive()
        },
        jump(){
            window.open('https://t.me/maccms_news')
        },
        // 外层弹出框
        popEnter(type){
            console.log(type)
            if(type==1){
                this.showPop=true
                this.showPopnext=false
            }else if(type==2){
                this.showPopnext=true
                this.showPop=false
            }else{
                this.showPop=false
                this.showPopnext=false
            }
            
        },
        popLeave(){
            // this.showPop=false
        },
        // 一级弹出框移入
        popChildEnter(index,type){
            if(type==1){
                this.packageUploadList[index].showChildPop=true
            }else{
                this.upgradePackageList[index].showChildPop=true
            }
            
        },
        // 一级弹出框移出
        popChildLeave(index,type){
            if(type==1){
                this.packageUploadList[index].showChildPop=false
            }else{
                this.upgradePackageList[index].showChildPop=false
            }
        },
        // 二级弹出框移入
        popVersionEnter(index,type){
            if(type==1){
                this.packageUploadList[index].showChildPop=true
            }else{
                this.upgradePackageList[index].showChildPop=true
            }
        },
        // 二级弹出框移出
        popVersionLeave(index,type){
            if(type==1){
                this.packageUploadList[index].showChildPop=false
                this.showPop=false
            }else{
                this.upgradePackageList[index].showChildPop=false
                this.showPopnext=false
            }
        },
        toDown(item,eI){
            if(eI==0){
                item.officialDown && (window.open(item.officialDown))
            }else if(eI==1){
                item.gitDown && (window.open(item.gitDown))
            }else{
                item.jsDown && (window.open(item.jsDown))
            }
            this.showPop=false
            this.showPopnext=false
        },
        packEnete(item,index){
            this.packageTitle=item.label
            this.version=item.version
            this.hoveIndex=index
        },
        packLeave(item,index){
            this.hoveIndex=''
        },
        mouseEnter(img,value){
            img.img=require( '@/assets/images/home/home-i'+ value+'-a.png')
        },
        mouseLeave(img,value){
            img.img=require( '@/assets/images/home/home-i'+ value+'.png')
        }
    }
}
</script>

<style lang="scss" scoped>

    .page-wrap{
        .home-top{
            min-width: 1300px;
            width: 100%;
            height: 580px;
            background: url('@/assets/images/home/home4.png') no-repeat;
            background-size: 100% 100%;
            position: relative;
            padding-top: 1px;
            .top-content{
                width: 800px;
                margin: 200px ;
                .p3{
                    margin-top: 50px;
                    .p3-s1{
                        margin-right:5px;
                    }
                    
                }
                .p4{
                    margin-top: 15px;
                    .p3-s4{
                        margin-left: 10px;
                        text-decoration: underline;
                        cursor: pointer;
                    }
                }
                .package-list{
                    margin-top:40px;
                    display: flex;
                    align-items: center;
                    
                    .pl-item{
                        margin-right: 40px;
                        padding: 13px 55px;
                        border-radius: 24px;
                        border: 1px solid #172335;
                        cursor: pointer;
                    }
                    .pl-item-1{
                        border: none;
                        color: #fff;
                        padding: 14px 56px;
                        background: linear-gradient(270deg, #F53E2D 0%, #FE6232 100%);
                        box-shadow: 0px 5px 12px 0px rgba(253, 95, 49, 0.29);
                        &:hover{
                            background: linear-gradient(270deg, #DC3828 0%, #E5552D 100%);
                        }
                    }
                    .pl-item-2{
                        &:hover{
                            background: rgba(23, 35, 53, 0.08);
                        }
                    }
                }
            }
        }
        .home-step{
            width: 100%;
            height: 170px;
            display: flex;
            align-items: center;
            background-color:#FA773A ;
            .step-list{
                display: flex;
                width: 100%;
                justify-content: space-around;
                padding: 0 100px;
                position: relative;
                .p1-img{
                    position: absolute;
                    width: 300px;
                    height: 220px;
                    top:-150px;
                    left: 0;
                }
                .step-item{
                    display: flex;
                    align-items: center;
                    // margin-right: 200px;
                    position: relative;
                    .si-s1{
                        font-size: 50px;
                        color: #fff;
                        margin-right: 10px;
                    }
                    .si-s2{
                        font-size: 16px;
                        color: #fff;
                        margin-right:30px;
                    }
                    .si-img{
                        width: 80px;
                        height: 70px;
                    }
                    &::after{
                        content: '';
                        display: block;
                        position: absolute;
                        width: 1px ;
                        height: 70px;
                        background-color: #FC996B;
                        right: -50%;
                    }
                    &:last-child{
                        margin-right: 0;
                        &::after{
                            display: none;
                        }
                    }
                }
            }
            
        }
        .content{
            min-width: 1300px;
            display: flex;
            flex-direction: column;
            padding-top: 50px;
            align-items: center;
            .con-list{
                display: flex;
                .con-item{
                    display: flex;
                    align-items: center;
                    margin-right: 36px;
                    .con-img-wrap{
                        padding: 6px;
                        border-radius: 6px;
                        background: #F6E8E7;
                        margin-right: 10px;
                        .con-img{
                            width: 16px;
                            height: 16px;
                        }
                    }
                }
            }
            .to-look{
                width: 207px;
                height: 55px;
                background: linear-gradient(270deg, #F53E2D 0%, #FE6232 100%);
                box-shadow: 0px 5px 12px 0px rgba(253, 95, 49, 0.29);
                border-radius: 28px;
                text-align: center;
                line-height: 55px;
                color: #fff;
                cursor: pointer;
                font-size: 16px;
            }
            .look-img{
                width: 1000px;
                height: 700px;
            }
            .move-ing{
                animation: moveIng 2s infinite;
            }
            @keyframes moveIng {
                0% {
                    transform: translate(-5px)
                }
                25% {
                    transform: translate(5px)
                }
                50% {
                    transform: translate(-5px)
                }
                75% {
                    transform: translate(5px)
                }
                100% {
                    transform: translate(-5px)
                }
            }
        }

        .bg1{
            background: url('@/assets/images/home/home1.png') no-repeat;
            background-size: 103% 100%;
            width: 100%;
            height: 1000px;
            position: relative;
            img{
                width: 1123px;
                height: 650px;
            }
            .p2-img{
                width: 250px;
                height: 250px;
                position: absolute;
                bottom: 0;
                right: 0;
            }
        }
        .bg2{
            background: url('@/assets/images/home/home5.png') no-repeat;
            background-size: 103% 100%;
            width: 100%;
            height: 700px;
            position: relative;
            .p3-img{
                position: absolute;
                top: -100px;
                left: 78px;
                width: 250px;
                height: 250px;
            }
            .advantage-wrap{
                .adcantage-list{
                    display: flex;
                    border-bottom: 1px solid #FF9767;
                    .adcantage-item{
                        color: #FFFDFE;
                        padding:40px ;
                        border-right: 1px solid #FF9767;
                        .ai-img{
                            width: 50px;
                            height: 50px;
                        }
                        .ai-t{
                            margin-top: 20px;
                            font-size: 27px;
                            font-weight: 600;
                        }
                        .ai-st{
                            margin-top: 10px;
                            font-size: 16px;
                            min-width: 320px;
                            max-width: 360px;
                            white-space: normal;
                        }
                        &:last-child{
                            border-right: none;
                        }
                        &:first-child{
                            padding-left: 0;
                        }
                    }
                    &:last-child{
                        border-bottom: none;
                    }
                }
            }
        }
        .partner{
            min-width: 1200px;
            background: #F7F8FA;
            padding-bottom: 50px;
            .partner-wrap{
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                padding: 0 300px;
                .p-img{
                    cursor: pointer;
                    width:161px;
                    height: 55px;
                    margin-right: 50px;
                }
            }
        }
    }
.notice{
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 99;
        .notice-wrap{
            position: absolute;
            top:50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #fff;
            border-radius: 12px;
            width: 500px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 40px 20px;
            .n7-img{
                position: absolute;
                top:-40px;
                left: 50%; 
                width: 72px;
                height: 72px;
                transform: translateX(-36px);
            }
            .n1-img{
                position: absolute;
                top:10px;
                right: 20px;
                width: 30px;
                height: 30px;
                cursor: pointer;
            }
            .p1{
                font-size: 20px;
                color: #333;
                font-weight: 500;
            }
            .p2{
                color: #596371;
                font-size: 16px;
            }
            .p3{
                color: #FF172A;
                font-size: 16px;
                width: 100%;
            }
            .n2-img{
                width: 100%;
                margin-top: 10px;
            }
            .img-wrap{
                display: flex;
                justify-content: space-between;
                width: 100%;
                height: 70px;
                margin-top: 7px;
                img{
                    width: 225px;
                }
            }
            .n6-img {
                width: 100%;
                margin-top: 7px;
            }
            .n8-img{
                // width: 100%;
                width: 460px;
                margin-top: 16px;
            }
            .n4-img{
                width: 300px;
                cursor: pointer;
                margin-top: 24px;
            }
        }
}


@media screen and (min-width:1200px)  {
    .home-top{
        height:720px !important;
        
    }
}
@media screen and (max-width:980px)  {
    .home-top{
        height:540px !important;
        .top-content{
            margin: 140px 50px !important;
        }
        
    }
}
@media screen and (min-width:980px) and (max-width:1200px)  {
    .home-top{
        height:540px !important;
        .top-content{
            margin: 140px 50px !important;
        }
        
    }
}

</style>
