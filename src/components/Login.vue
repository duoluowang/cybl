<template>
  <div>
    <h1>登录页面</h1>
    <el-button type='primary' @click="goHome">回首页</el-button>
    <Welcome msg='wangbin'/>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router'
import Welcome from './Welcome.vue'
const router = useRouter()
const goHome = ()=>{
  router.push('/welcome')
}
</script>

<style >

</style>
