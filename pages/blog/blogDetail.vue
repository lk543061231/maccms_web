<template>
    <div class="pt-118 container">
        <commonHead ref="commonHead" />
        <div class="page-wrap">
            <commonSteps :stepData="stepData" />
            <div class="page-container-blod-detail">
                <div class="detail">
                    <p class="d-p1 f30-c172335 ">{{detail.title}}</p>
                    <p class="d-p2 f16-c8F8F8F mt10">公布时间：{{detail.create_time}}</p>
                    <div class="article">
                        <!-- <p class="a-p1 f16-c8F8F8F mt20">{{detail.content_abbr}}</p> -->
                        <p class="a-p1 f16-c8F8F8F mt20" v-html="detail.content" id="content"></p>
                        <!-- <img :src="detail.image_url" class="a-img mt20"> -->
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
import {getArticleDetail} from '@/utils/api'
import {timestampToTime} from '@/utils/index'
export default {
    components:{
        commonHead,
        commonFoot,
        commonSteps
    },
    asyncData ({ app }, callback) {
        app.head.title = '博客详情'
        callback(null, {})
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
            },
            detail:{}
        }
    },
    mounted(){
        let query=this.$route.query
        if(query && query.id){
            this.getDetail(query.id)
        }
        this.$refs.commonHead.showBoxShadow=true
    },
    methods:{
        getDetail(id){
            const loading = this.$loading({
                lock: true,
                text: "Loading",
                spinner: "el-icon-loading",
                background: "rgba(0, 0, 0, 0.7)",
            });
            let query='id='+id
            getArticleDetail(query).then(res=>{
                loading.close()
                if(res.data.code==1){
                    this.detail=res.data.info.detail
                }
                let setpObj={
                    label:this.detail.title,
                    name:'',
                }
                this.stepData.stepList.push(setpObj)
                this.detail.create_time=timestampToTime(this.detail.create_time*1000,'yy-mm-dd')
            })
        },
    }

}
</script>

<style  lang="scss">
.page-container-blod-detail{
    width: 100%;
    background: #F7F8FA;
    padding: 30px 260px;
    .detail{
        // min-width: 1200px;
        margin: auto;
        width: 90%;
        padding: 60px;
        background: #fff;
        border-radius: 4px;
        .d-p2{
            border-bottom: 1px solid #EAEAEA;
            padding-bottom: 20px;
            position: relative;
        }
        .article{
            width: 100%;
            .a-p1{
                word-wrap:break-word;
                p{
                    padding: 0;
                    color: #000;
                    img{
                        width: 100%;
                    }
                }
                pre{
                    color: #000;
                }
            }
            .a-img{
                width: 100%;
            }
        }
    }
}
@media screen and (max-width:1200px)  {
    .page-container-blod-detail{
        padding:30px !important;
        .detail{
            width: 80%;
        }
    }
}
</style>