<template>
    <div class="page-wrap">
        <div class="home-top">
            <div class="top-content">
                <p class="p1 f32-c172335">免费开源Maccms Pro版</p>
                <p class="p2 f60-c172335">已成为全球影视站长首选！</p>
                <p class="p3">
                    <span class="p3-s1 f28-cF7502D">Pro版</span>
                    <span class="p3-s3 f28-c172335">版本号（v3.2.3)</span>
                </p>
                <p class="p4 f16-c172335">更新时间（2020-12-23)</p>
                <div class="package-list">
                    <p class="pl-item f16-c172335" v-for="(item,index) in packageList" :key="index">
                        {{item.label}}
                    </p>
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
            stepList:[
                {title:'99%',subTitle:'占有率',img:require('@/assets/images/home/home6.png')},
                {title:'300W+',subTitle:'安装量',img:require('@/assets/images/home/home6.png')},
                {title:'12年',subTitle:'技术沉淀',img:require('@/assets/images/home/home6.png')},
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.page-wrap{
    .home-top{
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
                    &:hover{
                        border: none;
                        background: linear-gradient(270deg, #F53E2D 0%, #FE6232 100%);
                        box-shadow: 0px 5px 12px 0px rgba(253, 95, 49, 0.29);
                        color: #fff;
                        padding: 14px 56px;
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
            justify-content: center;
            
            .step-item{
                display: flex;
                align-items: center;
                margin-right: 200px;
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
                    right: -100px;
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
}
</style>