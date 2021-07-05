<template>
  <div class="container">
    <div class="page-wrap">
      <Step1></Step1>
      <Step2></Step2>
      <Step3></Step3>
      <Step4></Step4>
      <Step5></Step5>
    </div>
    <Step5></Step5>
    <commonFoot />
    <floatTooltip />
  </div>
</template>

<script>
import commonHead from '@/components/common/commonHead.vue';
import commonFoot from '@/components/common/commonFoot.vue';
import floatTooltip from '@/components/floatTooltip.vue';
import { Step1, Step2, Step3, Step4, Step5 } from '@/components/home';
export default {
  components: {
    commonHead,
    commonFoot,
    floatTooltip,
    Step1,
    Step2,
    Step3,
    Step4,
    Step5
  },
  head() {
    return {
      title: 'MacCMS Pro-首页'
    };
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.page-wrap {
}
</style>
