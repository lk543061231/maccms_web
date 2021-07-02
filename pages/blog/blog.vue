<template>
  <div class="pt-118 container">
    <commonHead />
    <div class="page-wrap">
      <commonSteps :stepData="stepData" />
      <div class="page-inner">
        <div class="blog-list flex-between-center">
          <div class="blog-item" v-for="i in 8" :key="i">
            <div class="blog-item-left">
              <el-image
                src="https://w.wallhaven.cc/full/28/wallhaven-281d5y.png"
                fit="contain"
              ></el-image>
            </div>
            <div class="blog-item-right">
              <p class="f16-c172335">织梦响应式金融投资理财类网站织梦模板</p>
              <p class="f14-c8F8F8F mt10">
                古有唐僧西行取真经，今有TSRC西行会群英。上周六，TSRC一路向西再度来到古都西安。坤哥携分布式扫描神器分享创业phithon以四大…
              </p>
              <p class="flex-between-center f16-c8F8F8F mt30">
                <span>2021-07-01</span>
                <span class="look-more"
                  >查看更多<i class="el-icon-arrow-right"></i
                ></span>
              </p>
            </div>
          </div>
        </div>
        <div class="pagination">
          <el-pagination
            background
            layout="prev, pager, next, jumper"
            :total="100"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </div>
      </div>
    </div>
    <commonFoot />
  </div>
</template>

<script>
import commonHead from "@/components/common/commonHead.vue";
import commonFoot from "@/components/common/commonFoot.vue";
import commonSteps from '@/components/common/commonSteps.vue';
export default {
  components: {
    commonHead,
    commonFoot,
    commonSteps
  },
  data(){
    return{
      stepData:{
          type:'title',   //step表示路由位置，title表示当前页标题
          stepName:'博客',  //type为title式显示
      }
    }
  },
  methods:{
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  }
};
</script>

<style scoped lang="scss">
.page-wrap {
  background: #f7f8fa;
  .page-title {
    height: 78px;
    line-height: 78px;
    padding-left: 260px;
    background: #ffffff;
    font-size: 27px;
    font-weight: 600;
    color: #172335;
  }
  .page-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    .blog-list {
      width: 1388px;
      flex-wrap: wrap;
      .blog-item {
        display: flex;
        width: 690px;
        height: 180px;
        background: #ffffff;
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.04);
        border-radius: 6px;
        margin: 0 8px 20px 0;
        padding: 20px 40px 20px 20px;
        .blog-item-left {
          width: 320px;
          border-radius: 6px;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
        .blog-item-right {
          width: 300px;
          margin-left: 20px;
        }
        &:nth-child(even) {
          margin-right: 0;
        }
      }
    }
    .pagination {
      display: flex;
      justify-content: center;
      margin-top: 50px;
      /deep/.el-pagination.is-background {
        .el-pager li,.btn-next,.btn-prev {
          background: #f7f8fa;
          border: 1px solid #dadada;
          color: #666666;
          border-radius: 4px;
          &:not(.disabled).active {
            background: #f7f8fa;
            color: #f7502d;
            border: 1px solid #f7502d;
          }
        }
      }
    }
  }
}
</style>