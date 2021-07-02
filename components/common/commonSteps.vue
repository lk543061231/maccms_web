<template>
    <div class="step-wrap">
        <div v-if="stepData.type=='title'" class="step f20-c172335">{{stepData.stepName}}</div>
        <el-breadcrumb v-if="stepData.type=='step'" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item 
                v-for="item,index in stepData.stepList"
                :key="index"
            >
                <span class="step f20-c172335" @click="toLink(item)">{{item.label}}</span>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    props:{
        stepData:{
            type:Object,
            default:{}
        }
    },
    data(){
        return{
            // stepData:{
            //     type:'step',   //step表示路由位置，title表示当前页标题
            //     stepName:'博客',  //type为title式显示
            //     stepList:[           //type为step式显示    
            //         {
            //             label:'首页',
            //             name:'index',
            //             value:0
            //         },
            //         {
            //             label:'博客主页',
            //             name:'blog',
            //             value:1
            //         },
            //     ]
            // }
            
        }
    },
    created(){
        console.log(this.$route)
    },
    methods:{
        toLink(item){

        }
    }
}
</script>

<style scoped lang="scss">
.step-wrap{
    width: 100%;
    background: #fff;
    padding: 25px 260px;
}
</style>