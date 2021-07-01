<template>
    <div class="pt-118 page-wrap">
        <div class="dev-container">
            <div class="left">
                <div class="l-top"> 
                    <div class="lt-t">{{activeVer}}版</div>
                    <el-popover
                        placement="bottom"
                        width="200"
                        trigger="click"
                    >
                        <div class="ver" >
                            <p @click="selectVer(item)" class="v-i" v-for="(item,index) in verList" :key="index">{{item}}</p>
                        </div>
                        <img slot="reference" src="~/assets/images/devDocument/dev-1.png"  class="d1-img">
                    </el-popover>
                </div>
                <div class="l-list">

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
            verList:['Pro','v10','v8']
        }
    },
    methods:{
        selectVer(val){
            this.activeVer=val
        }   
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
            height: 500px;
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
                }
            }
        }
    }
    
}
</style>