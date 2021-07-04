<template>
  <div class="pt-118 page-wrap">
    <commonHead />
    <div class="resource-contain">
      <div class="resource-contain-top">
        <div class="resource-contain-top-1 flex-between-center">
          <div>
            <div class="f34-c172335 fw600">每日更新上百部视频 永久免费</div>
            <div class="f34-c172335 fw200 mt10">资源包含maccms pro广告</div>
          </div>
          <div class="top-img">
            <img src="~/assets/images/resource/main.png" />
          </div>
        </div>
        <div class="resource-contain-top-2">
          <p>
            <span class="f14-c172335">视频资源m3u8地址最新解析接口：</span>
            <span class="f14-cF7502D">https://jiexi,pro/m3u8/?url=</span>
          </p>
          <p>
            <span class="f14-c172335">每日最新视频地址：</span>
            <span class="f14-cF7502D">https://jiexi/vod/?ac=new</span>
          </p>
          <p>
            <span class="f14-c172335">热门视频视频地址：</span>
            <span class="f14-cF7502D">https://jiexi/vod/?ac=hot</span>
          </p>
        </div>
      </div>
      <div class="resource-contain-bottom">
        <div class="resource-contain-bottom-header">
          <p class="f28-c172335">最新电影</p>
          <div class="btns mt40">
            <div
              class="btn"
              v-for="(item, i) of btnList"
              :key="i"
              @click="choiceBtn(i)"
              :class="{ active: activeIndex == i }"
            >
              <img
                src="~/assets/images/resource/home.png"
                v-if="item.label == '首页'"
              />
              <span>{{ item.label }}</span>
            </div>
          </div>
        </div>
        <div class="resource-contain-bottom-body">
          <div class="data-statistics flex-between-center">
            <div class="data-statistics-item">
              <p>
                <span class="f40-cF7502D">1929923</span>
                <span class="f18-c172335">/部</span>
              </p>
              <p class="f16-c172335">总共视频</p>
            </div>
            <div class="data-statistics-item">
              <p>
                <span class="f40-c0BACB3">1929923</span>
                <span class="f18-c172335">/部</span>
              </p>
              <p class="f16-c172335">今日已更新</p>
            </div>
          </div>
          <el-table
            :data="tableData"
            border
            style="width: 100%"
            header-cell-class-name="movie-table-header"
            cell-class-name="movie-table-body"
            :cell-style="cellStyle"
          >
            <el-table-column prop="date" label="更新时间"></el-table-column>
            <el-table-column prop="name" label="电影名称"></el-table-column>
            <el-table-column prop="address" label="电影类型"></el-table-column>
            <el-table-column label="快捷操作">
                <template slot-scope="scoped">
                    获取地址
                </template>
            </el-table-column>
          </el-table>
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
    </div>
    <commonFoot />
  </div>
</template>

<script>
import commonHead from "@/components/common/commonHead.vue";
import commonFoot from "@/components/common/commonFoot.vue";
export default {
  components: {
    commonHead,
    commonFoot,
  },
  data() {
    return {
      activeIndex: 1,
      btnList: [
        {
          id: 1,
          label: "首页",
        },
        {
          id: 2,
          label: "国产",
        },
        {
          id: 3,
          label: "三级",
        },
        {
          id: 4,
          label: "人兽",
        },
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "作品精選來啦!",
          address: "三级",
        },
        {
          date: "2016-05-04",
          name: "作品精選來啦!",
          address: "三级",
        },
        {
          date: "2016-05-01",
          name: "作品精選來啦!",
          address: "三级",
        },
        {
          date: "2016-05-03",
          name: "作品精選來啦!",
          address: "三级",
        },
      ],
    };
  },
  methods: {
    choiceBtn(i) {
      this.activeIndex = i;
    },
    cellStyle({row, column, rowIndex, columnIndex}){
        console.log({row, column, rowIndex, columnIndex});
        if(columnIndex == 3){
            return "color:#F7502D"
        }
    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  },
};
</script>

<style lang="scss" scoped>
.resource-contain {
  background: #f7f8fa;
  .resource-contain-top {
    height: 420px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .resource-contain-top-1 {
      .top-img {
        width: 430px;
        img {
          width: 100%;
        }
      }
    }
    .resource-contain-top-2 {
      height: 55px;
      background: #ffffff;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding: 0 60px;
    }
  }
  .resource-contain-bottom {
    .resource-contain-bottom-header {
      height: 180px;
      background-color: #ffffff;
      padding-top: 30px;
      padding-bottom: 30px;
      .btns {
        display: flex;
        .btn {
          width: 100px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          color: #172335;
          font-size: 14px;
          border-radius: 20px;
          border: 1px solid #e1e1e1;
          cursor: pointer;
          user-select: none;
          &:not(:last-child) {
            margin-right: 28px;
          }
          img {
            width: 22px;
            position: relative;
            top: 4px;
          }
        }
        .active {
          background: linear-gradient(270deg, #f53e2d 0%, #fe6232 100%);
          box-shadow: 0px 5px 12px 0px rgba(253, 95, 49, 0.29);
          color: #ffffff;
        }
      }
    }
    .resource-contain-bottom-body {
      .data-statistics {
          margin-bottom: 30px;
        .data-statistics-item {
          background-color: #ffffff;
          text-align: center;
          width: 694px;
          height: 110px;
          padding: 12px 0 15px;
          &:not(:last-child) {
            margin-right: 12px;
          }
        }
      }
      /deep/.movie-table-header,
      /deep/.movie-table-body {
        padding: 24px 0;
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        color: #172335;
      }
      /deep/.movie-table-header {
          background: #f8f8f9;
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
  @media screen and (min-width: 1201px) {
    .resource-contain-top,
    .resource-contain-bottom {
      padding: 0 260px;
    }
  }
  @media screen and (max-width: 1200px) {
    .resource-contain-top,
    .resource-contain-bottom {
      padding: 0 60px;
    }
  }
}
</style>