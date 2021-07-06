<template>
  <div class="pt-118 container">
    <div class="page-wrap">
      <commonSteps :stepData="stepData" :slide="slide" />
      <div class="page-inner mt30">
        <div class="blog-list flex-between-center">
          <div class="blog-item" v-for="(item, i) in list" :key="i" @click="toDetail(item)">
            <div class="blog-item-left">
              <img :src="item.image_url" />
            </div>
            <div class="blog-item-right">
              <p class="f16-c172335 oneHidden">{{ item.title }}</p>
              <p class="f14-c8F8F8F mt10 threeHidden">
                {{ item.content_abbr }}
              </p>
              <p class="flex-between-center f16-c8F8F8F mt20">
                <span>{{ item.create_time }}</span>
                <span class="look-more">查看更多<i class="el-icon-arrow-right"></i></span>
              </p>
            </div>
          </div>
        </div>
        <div class="pagination">
          <el-pagination
            background
            layout="prev, pager, next, jumper"
            :total="total"
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
import commonHead from '@/components/common/commonHead.vue';
import commonFoot from '@/components/common/commonFoot.vue';
import commonSteps from '@/components/common/commonSteps.vue';
import { getArticleList } from '@/utils/api';
import { timestampToTime } from '@/utils/index';
export default {
  components: {
    commonHead,
    commonFoot,
    commonSteps
  },
  head() {
    return {
      title: 'MacCMS Pro-博客主页'
    };
  },
  data() {
    return {
      stepData: {
        type: 'title', //step表示路由位置，title表示当前页标题
        stepName: '博客主页' //type为title式显示
      },
      pages: {
        offset: 0,
        limit: 8
      },
      list: [],
      total: 0,
      slide: false
    };
  },
  mounted() {
    this.getList();

    this.pageScroll();
  },
  methods: {
    pageScroll() {
      document.addEventListener('scroll', e => {
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if (scrollTop > 220) {
          this.slide = true;
        } else {
          this.slide = false;
        }
      });
    },
    getList() {
      let queryStr = '';
      for (var key in this.pages) {
        queryStr += key + '=' + this.pages[key] + '&';
      }
      queryStr = queryStr.substring(0, queryStr.length - 1);
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      getArticleList(queryStr).then(res => {
        loading.close();
        if (res.data.code == 1) {
          res.data.info.rows.forEach(item => {
            item.create_time = timestampToTime(item.create_time * 1000, 'YYYY-MM-DD');
          });
          this.list = res.data.info.rows;
          this.total = res.data.info.total;
        }
      });
    },
    toDetail(item) {
      this.$router.push({
        path: `blog/${item.article_id}`
      });
    },
    handleSizeChange(val) {
      this.pages.limit = val;
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.pages.offset = val;
      this.getList();
    }
  }
};
</script>

<style scoped lang="less">
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
      // width: 1388px;
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
        cursor: pointer;
        &:nth-child(2n) {
          margin-right: 0;
        }
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
        &:hover {
          box-shadow: 0px 2px 8px 10px rgba(0, 0, 0, 0.04);
        }
      }
    }
    .pagination {
      display: flex;
      justify-content: center;
      margin-top: 50px;
      margin-bottom: 30px;
      /deep/.el-pagination.is-background {
        .el-pager li,
        .btn-next,
        .btn-prev {
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
@media screen and (max-width: 500px) {
  .page-wrap .page-inner .blog-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    // .blog-item {
    //   display: flex;
    //   width: 1380px;
    //   height: 360px;
    //   background: #ffffff;
    //   padding: 40px 80px 40px 40px;
    //   cursor: pointer;
    //   &:nth-child(2n) {
    //     margin-right: 0;
    //   }
    //   .blog-item-left {
    //     width: 640px;
    //     overflow: hidden;
    //     img {
    //       width: 100%;
    //     }
    //   }
    //   .blog-item-right {
    //     width: 600px;
    //     margin-left: 40px;
    //   }
    // }
  }
}
</style>
