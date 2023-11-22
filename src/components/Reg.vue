<template>
  <div>
    <h1>注册页面</h1>
    <el-button type='primary' @click="goHome">回首页</el-button>
    <welcome msg='wangbin' />
  </div>
</template>

<script >
import Welcome from './Welcome.vue'
export default{
  name:'reg',
  components:{Welcome},
  methods:{
    goHome(){
      this.$router.push('/welcome')
    }
  }
}
</script>

<style >

</style>
