<template>
    <div class="header-wrap">
        <div>
            <span class="font16color172335" @click="$router.push({name:'index-home'})">首页</span>
            <span @click="$router.push({name:'index-activity'})">活动</span>
        </div>
        <nuxt-child></nuxt-child>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>