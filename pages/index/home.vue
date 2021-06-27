<template>
    <div class="page-wrap">
        <div class="home-top">
            <div class="top-content">
                <p class="p1 f32-c172335">免费开源Maccms Pro版</p>
                <p class="p2 f60-c172335">已成为全球影视站长首选！</p>
                <p class="p3">
                    <span class="p3-s1 f28-cF7502D">Pro版</span>
                    <span class="p3-s3 f28-c172335">版本号（2021.1000.1090)</span>
                </p>
                <p class="p4 f16-c172335">更新时间（2021-06-27)</p>
                <div class="package-list">
                    <el-popover
                        placement="bottom"
                        trigger="hover"
                        popper-class="area_popper"
                    >
                        <div class="home-upload-wrap">
                            <p class="home-upload-item" 
                            v-for="item,index in packageUploadList" :key="index">
                                {{item}}
                                <i v-if="index!=0" class="el-icon-right"></i>
                            </p>
                        </div>
                        <p slot="reference" class="pl-item f16-c172335 pl-item-1">安装包下载 </p>
                    </el-popover>
                    
                    <p class="pl-item f16-c172335 pl-item-2">升级包下载 </p>
                    <el-popover
                        placement="bottom"
                        trigger="hover"
                    >
                        <div class="home-deploy-wrap">
                            <p class="home-deploy-1">支持系统：Windows、Mac、Linux部署环境：PHP（5.6+）+MySql(5.5+)</p>
                            <p class="home-deploy-2">PHP必须在非安全模式下运行</p>
                        </div>
                        <p slot="reference" class="pl-item f16-c172335 pl-item-2">部署详情 </p>
                    </el-popover>
                </div>
            </div>
        </div>
        <div class="home-step">
            <div class="step-list">
                <div class="step-item" v-for="(item,index) in stepList" :key="index">
                    <p class="si-s1">{{item.title}}</p>
                    <p class="si-s2">{{item.subTitle}}</p>
                    <img class="si-img" :src="item.img" >
                </div>
            </div>
        </div>
        <div class="content bg1">
            <p class="f38-c172335">Pro版UI设计 交互体验大更新</p>
            <p class="f20-c172335 mt20">永久免费开源专业影视MACCMS Pro版</p>
            <p class="f20-c8F8F8F mt30">新版本默认模版对应用户体验，UI，UX都是的最先反馈出平台高 留存的核心因素，能够大幅度提神站长的盈利目标。</p>
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
            <p class="mt30 to-look">
                去看看
                <i class="el-icon-right"></i>
            </p>
            <img class="look-img" src="@/assets/images/home/home3.png" >
        </div>
        <div class="content bg2">
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
</template>

<script>
export default {
    name:'home',
    data(){
        return{
            packageList:[
                {label:'安装包下载',value:0},
                {label:'升级包下载',value:1},
                {label:'部署详情',value:2},
            ],
            packageUploadList:[
                '官方下载','Github','Jsdelivr'
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
            ]
        }
    },
    methods:{
        mouseEnter(img,value){
            img.img=require( '@/assets/images/home/home-i'+ value+'-a.png')
        },
        mouseLeave(img,value){
            img.img=require( '@/assets/images/home/home-i'+ value+'.png')
        }
    }
}
</script>

<style lang="less" scoped>
.page-wrap{
    
    .home-top{
        min-width: 1630px;
        width: 100%;
        height: 710px;
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
        min-width: 1630px;
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
    }

    .bg1{
        background: url('@/assets/images/home/home1.png') no-repeat;
        background-size: 103% 100%;
        width: 100%;
        height: 1000px;
        img{
            width: 1123px;
            height: 650px;
        }
    }
    .bg2{
        background: url('@/assets/images/home/home5.png') no-repeat;
        background-size: 103% 100%;
        width: 100%;
        height: 700px;
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
</style>