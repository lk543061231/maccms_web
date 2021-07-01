<template>
    <div class="pt-118 page-wrap">
        <div class="dev-container">
            <div class="left">
                <div class="l-top"> 
                    <div class="lt-t">{{activeVer}}版</div>
                    <el-popover
                        placement="bottom-end"
                        width="150"
                        trigger="hover"
                    >
                        <div class="app-wrap" >
                            <p 
                            class="app-item"
                            @click="selectVer(item)" 
                             v-for="(item,index) in verList" :key="index">{{item}}</p>
                        </div>
                        <img slot="reference" src="~/assets/images/devDocument/dev-1.png"  class="d1-img">
                    </el-popover>
                </div>
                <div class="l-list">
                    <div class="nav-item" 
                    v-for="(item,index) in navList" 
                    :key="index" 
                    :class="activeNav==index && 'activeNav'"
                    @click="selectNav(item,index)">
                        <img v-if="activeNav==index" class="nav-img" :src="item.aimg" >
                        <img v-else class="nav-img" :src="item.img" >
                        <div class="nav-tit">
                            <p class="zh-t">{{item.zhTitle}}</p>
                            <p class="en-t">{{item.enTitle}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="content" >
                    <div v-if="activeVer=='v10'">
                        <div v-if="activeNav==0">
                            <div class="c-d">
                                <p class="c-t">开始使用-入门指南</p>
                                <p class="c-p">苹果CMS程序是一套采用PHP+MYSQL环境下运行的完善而强大的快速建站系统。 经过近多年的开发经验和技术积累，苹果CMS程序已逐步走向成熟，在易用性和功能上已经成为同行中的佼佼者。 程序体积小->优化程序代码，运行速度快->高效的缓存处理，只要普通的虚拟主机就可以完美搭建起来，建站成本非常低。仿MVC模板分离，内置标签，自定义函数标签接口，强大的自定义采集功能，只要你会HTML就可以轻松做出个性化的网站。 程序易用性和功能上一直以来都积极采纳广大站长提出的各种好的建议，迅速响应各种紧急问题，我们的服务理念贯穿其中，保证每一位站长每一个环节都可以从容应对。</p>
                                <p class="c-p">v10采用tp5.x内核进行开发，扩展了模板处理引擎，将后台程序与html模板简单的分离出来，让设计人员与程序人员最大限度的发挥自己的优势而互不干扰，大大加快了项目有序、快速的完成。 即使您是第一次接触，也会在最短的时间内熟练掌握它的使用方法。后台管理模块，一目了然，操作简单，绝对不会让您眼花缭乱。</p>
                            </div>
                            <div class="c-d mt40">
                                <p class="c-t">著作权登记</p>
                                <p class="c-p">苹果CMS官方已经申请了软件著作权，受国家计算机软件著作权保护，请勿非法盗版篡改，否则将承担相应的法律制裁！</p>
                                <p class="c-p">著作权登记号码：2018SR947830</p>
                            </div>
                            <div class="c-d mt40">
                                <p class="c-t">兼容性和面向场景</p>
                                <p class="c-p">1、Windows 平台： IIS/Apache + PHP(5.6 +) + MySQL(5.5 +) </p>
                                <p class="c-p">2、Linux/Unix 平台： Apache + PHP (5.6 +) + MySQL(5.5 +) (PHP必须在非安全模式下运行)</p>
                            </div>
                            <div class="c-d mt40">
                                <p class="c-t">获得 苹果CMS v10</p>
                                <p class="c-p">你可以在我们的 官网首页 下载到 苹果CMS 的最新版，它经过了自动化构建，更适合用于生产环境。目录结构如下：</p>
                                <p class="c-p">2、Linux/Unix 平台： Apache + PHP (5.6 +) + MySQL(5.5 +) (PHP必须在非安全模式下运行)</p>
                            </div>
                        </div>

                        <div v-if="activeNav==1">
                            <div class="c-d">
                                <p class="c-t">常见问题</p>
                                <p class="c-p">本篇将主要讲解使用过程中普遍遇到的“问题”，这些问题并非是BUG，通常是需要我们自己去注意的一些点。（会结合用户反馈持续补充）</p>
                            </div>
                            <div class="c-d mt40">
                                <p class="c-t">快速安装</p>
                                <p class="c-p">获得 苹果CMS 后，将其完整地部署到你的网站目录，然后访问网站，即可自动跳转到安装页面install.php。</p>
                                <p class="c-p">输入事先准备好的mysql数据库账户密码，即可一键安装。</p>
                            </div>
                            <div class="c-d mt40">
                                <p class="c-t">常见疑问</p>
                                <p class="c-p">1，由于采用最新的TP框架，所以php版本建议5.6以上，上传文件时需要开启fileinfo支持库，php.ini里 extension=php_fileinfo.dll ；宝塔等面板里直接安装开启 。</p>
                                <p class="c-p">2，如果使用的是php5.6版本（php7版本不受影响），还需要设置php.ini开启always_populate_raw_post_data = -1 这个选项，也就是去掉这项配置前面的分号即可。</p>
                                <p class="c-p">3，运行安装页面出现空白页面，该情况一般为Runtime目录没有修改写入权限**</p>
                                <p class="c-p">4，SQLSTATE[22001]: String data, right truncated: 1406 Data too long for column '' at row 1  或者 Warning: 1265 Data truncated for column 类似错误**</p>
                                <p class="c-p">RE:############################################</p>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            activeVer:'v10',
            verList:['Pro','v10','v8'],
            navList:[
                {
                    img:require('@/assets/images/devDocument/dev-5.png'),
                    aimg:require('@/assets/images/devDocument/dev-5-a.png'),
                    imgIndex:5,
                    zhTitle:'开始使用',
                    enTitle:'Getting Started',
                },
                {
                    img:require('@/assets/images/devDocument/dev-4.png'),
                    aimg:require('@/assets/images/devDocument/dev-4-a.png'),
                    imgIndex:4,
                    zhTitle:'常见问题',
                    enTitle:'FAQ',
                },
                {
                    img:require('@/assets/images/devDocument/dev-3.png'),
                    aimg:require('@/assets/images/devDocument/dev-3-a.png'),
                    imgIndex:3,
                    zhTitle:'模板标签',
                    enTitle:'TempLate',
                },
                {
                    img:require('@/assets/images/devDocument/dev-2.png'),
                    aimg:require('@/assets/images/devDocument/dev-2-a.png'),
                    imgIndex:2,
                    zhTitle:'API文档',
                    enTitle:'API documentation',
                },
                {
                    img:require('@/assets/images/devDocument/dev-6.png'),
                    aimg:require('@/assets/images/devDocument/dev-6-a.png'),
                    imgIndex:5,
                    zhTitle:'更新日志',
                    enTitle:'Change Log',
                },
            ],
            activeNav:0
        }
    },
    methods:{
        selectVer(val){
            this.activeVer=val
        },
        selectNav(item,index){
            this.activeNav=index
        },  
    }
}
</script>

<style lang="scss" scoped>
.page-wrap{
    background: #fff;
    .dev-container{
        display: flex;
        background: #F7F8FA;
        justify-content: space-between;
        padding:30px 260px 50px 260px;
        .left{
            width: 220px;
            height: 550px;
            background: #fff;
            padding: 30px 15px;
            .l-top{
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-radius: 6px;
                border: 1px solid #ccc;
                padding: 10px 20px;
                .lt-t{
                    font-size: 16px;
                    color: #333;
                }
                .d1-img{
                    display: block;
                    width: 22px;
                    height: 22px;
                    cursor: pointer;
                }
            }
            .l-list{
                .nav-item{
                    padding: 20px 0;
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    position: relative;
                    .nav-img{
                        width: 20px;
                        height: 20px;
                        margin-right: 10px;
                    }
                    .nav-tit{
                        .zh-t{
                            font-size: 16px;
                            color: #242424;
                        }
                        .en-t{
                            margin-top: 3px;
                            font-size: 12px;
                            color: #999;
                        }
                    }
                    &::after{
                        content: '';
                        display: block;
                        position: absolute;
                        width: 100%;
                        height: 1px;
                        background: #EAEAEA;
                        bottom: 0px;
                        
                    }
                    &:last-child{
                        &::after{
                            display: none;
                        }
                    }
                }
                .activeNav{
                    .zh-t,.en-t{
                        color: #F7502D !important;
                    }
                }
            }
        }
        .right{
            width: 1080px;
            height: 550px;
            background: #fff;
            padding: 30px;
            .content{
                height: 100%;
                overflow-y: scroll;
                .c-d{
                    .c-t{
                        color: #242424;
                        font-size: 18px;
                        line-height: 20px;
                        margin-bottom: 10px;
                    }
                    .c-p{
                        color: #666;
                        font-size: 16px;
                        margin-bottom: 10px;
                    }
                }
                
            }
        }
    }
    
}
</style>