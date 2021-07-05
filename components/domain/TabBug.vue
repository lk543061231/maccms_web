<template>
  <div class="">
    <div>
      <p class="text success-color" v-if="checkResult">
        恭喜您，检测的网站版本不存在漏洞
      </p>
      <div class="text error-color" v-else>
        <p v-if="code == 1002">
          {{ resMsg || '输入地址错误，无法进行检测' }}
        </p>
        <div v-else>
          <p class="p-1">当前网址已提供最新版本</p>
          <p>高危！网站版本异常存在后门漏洞挂马风险 请立即升级版本</p>
        </div>
      </div>
    </div>
    <div class="btns-div" v-if="!checkResult">
      <p class="text">MacCMS更新包下载渠道</p>
      <div class="btns flex-between-center pro">
        <el-popover trigger="hover" placement="bottom" v-for="(item, index) in downList" :key="index">
          <div class="app-wrap">
            <p
              class="app-item"
              @click="toDown(ele)"
              @mouseleave="hoveIndex = ''"
              @mouseenter="hoveIndex = elIndex"
              v-for="(ele, elIndex) in item.list"
              :key="elIndex"
            >
              {{ ele.ver }}
              <i v-if="elIndex != 0" :class="hoveIndex === elIndex && 'move-ing'" class="el-icon-right"></i>
            </p>
          </div>
          <div slot="reference" :class="index == 1 && 'mlr'" class="website-btn">
            <img class="b-img" :src="item.img" v-if="item.img" />
            <span>{{ item.label }}</span>
          </div>
        </el-popover>
      </div>
      <p class="text-b">下载后手动覆盖即可完成后门漏洞修复</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    checkResult: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {}
};
</script>

<style scoped lang="less"></style>
