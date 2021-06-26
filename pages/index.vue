<template>
  <div class="container">
    <div class="dd">
        <Header/>
        <commonFoot/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/home/head.vue'
import commonFoot from '@/components/common/commonFoot.vue'
export default {
  components:{
    Header,
    commonFoot
  }
}
</script>

<style lang="scss" scoped>
.container{
  .dd{
    color: #000;
  }
}
</style>
