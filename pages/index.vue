<template>
  <div class="container" v-loading="loading">
    <commonHead/>
    <div class="body-container" >
      <nuxt-child></nuxt-child>
    </div>
    <commonFoot/>
  </div>
</template>

<script>
import commonHead from '@/components/common/commonHead.vue';
import commonFoot from '@/components/common/commonFoot.vue';
export default {
    components:{
        commonHead,
        commonFoot
    },
    data(){
      return{
        loading:true
      }
    },
    beforeCreate(){
       this.$router.push({
            name:'index-home'
        })
        
    },
    created(){
      this.loading=false
      // if(process.browser){
      //   if(window.localStorage.getItem('routerName')){
      //      this.$router.push({
      //       name:window.localStorage.getItem('routerName')
      //     })
      //   }else{
      //     this.$router.push({
      //       name:'index-home'
      //   })
      //   }
      // }
    },
 
}
</script>

<style lang="scss" scoped>
.container{
    min-width: 1300px;
    .body-container{
      min-height: 400px;
    }
}
</style>
