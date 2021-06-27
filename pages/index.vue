<template>
  <div class="container">
    
    <commonHead/>
    

    <commonFoot/>
    
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

}
</style>
