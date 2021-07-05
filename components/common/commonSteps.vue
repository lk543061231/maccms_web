<template>
  <div class="step-wrap" :class="slide && 'fixed'">
    <div v-if="stepData.type == 'title'" class="step f20-c172335">{{ stepData.stepName }}</div>
    <el-breadcrumb v-if="stepData.type == 'step'" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="(item, index) in stepData.stepList" :key="index">
        <span class="step f20-c172335" @click="toLink(item)">{{ item.label }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  props: {
    stepData: {
      type: Object,
      default: {}
    },
    slide: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    toLink(item) {
      if (item.name) {
        this.$router.push({
          name: item.name
        });
      }
    }
  }
};
</script>

<style scoped lang="less">
.step-wrap {
  width: 100%;
  background: #fff;
  padding: 25px 260px;
  .step {
    cursor: pointer;
  }
}
.fixed {
  position: fixed;
  width: 100%;
  top: 0;
}
</style>
