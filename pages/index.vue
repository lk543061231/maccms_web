<template>
  <div class="container">
    <div class="dd">
        <commonHead/>
        <commonFoot/>
    </div>
  </div>
</template>

<script>
import commonHead from '@/components/common/commonHead.vue'
import commonFoot from '@/components/common/commonFoot.vue'
export default {
  components:{
    commonHead,
    commonFoot
  },
  created(){
      this.$router.push({name:'index-home'})
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
