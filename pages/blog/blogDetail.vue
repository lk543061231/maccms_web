<template>
    <div class="pt-118 container">
        <commonHead/>
        <div class="page-wrap">
            <commonSteps :stepData="stepData" />
            <div class="page-container">
                <div class="detail">
                    <p class="d-p1 f30-c172335">龙踞长安，安全英豪铸盛世</p>
                    <p class="d-p2 f16-c8F8F8F mt10">公布时间：2015-07-06</p>
                    <div class="article">
                        <p class="a-p1 f16-c8F8F8F mt20">古有唐僧西行取真经，今有TSRC西行会群英。7月4日，TSRC安全群英汇从上海一路向西，再度来到古都西安，在屹立不倒的大雁塔边聚众英豪论道抒怀。沙龙中有坤哥携分布式扫描神器分享创业点滴，有技术帝phithon以四大案例大谈安全漏洞，还有西电杨超老师等各位前辈为大家破解职业发展迷茫，各种精彩尽在TSRC安全群英汇。</p>
                        <p class="a-p2 f16-c172335 mt30">坤哥：执着拼搏创业梦</p>
                        <p class="a-p1 f16-c8F8F8F mt20">古有唐僧西行取真经，今有TSRC西行会群英。7月4日，TSRC安全群英汇从上海一路向西，再度来到古都西安，在屹立不倒的大雁塔边聚众英豪论道抒怀。沙龙中有坤哥携分布式扫描神器分享创业点滴，有技术帝phithon以四大案例大谈安全漏洞，还有西电杨超老师等各位前辈为大家破解职业发展迷茫，各种精彩尽在TSRC安全群英汇。</p>
                    </div>
                </div >
            </div>
        </div>
        <commonFoot/>
    </div>
</template>

<script>
import commonHead from '@/components/common/commonHead.vue';
import commonFoot from '@/components/common/commonFoot.vue';
import commonSteps from '@/components/common/commonSteps.vue';
export default {
    components:{
        commonHead,
        commonFoot,
        commonSteps
    },
    data(){
        return{
            stepData:{
                type:'step',   //step表示路由位置，title表示当前页标题
                stepName:'博客',  //type为title式显示
                stepList:[           //type为step式显示    
                    {
                        label:'首页',
                        name:'index',
                        value:0
                    },
                    {
                        label:'博客主页',
                        name:'blog-blog',
                        value:1
                    },
                ]
            }
        }
    }

}
</script>

<style scoped lang="scss">
.page-container{
    width: 100%;
    background: #F7F8FA;
    padding: 30px 260px;
    .detail{
        min-width: 1200px;
        padding: 60px;
        background: #fff;
        border-radius: 4px;
        .d-p2{
            border-bottom: 1px solid #EAEAEA;
            padding-bottom: 20px;
            position: relative;
        }
        .article{
            width: 80%;
        }
    }
}
</style>