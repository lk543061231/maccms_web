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
                    img:require('@/assets/images/devDocument/dev-5.png'),
                    aimg:require('@/assets/images/devDocument/dev-5-a.png'),
                    imgIndex:5,
                    zhTitle:'更新日志',
                    enTitle:'Getting Started',
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
    }
    
}
</style>