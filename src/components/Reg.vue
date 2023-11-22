<template>
  <div>
    <h1>注册页面</h1>
    <el-button type='primary' @click="goHome">回首页</el-button>
  </div>
</template>

<script >
import Welcome from './Welcome.vue'
export default{
  name:'reg',
  components:{Welcome},
  mounted(){
    this.$request({
      method:'get',
      url:'/login',
      data:{
        name:'jack'
      }
    }).then((res)=>{
      console.log(res)
    })
  },
  methods:{
    goHome(){
      this.$router.push('/welcome')
    }
  }
}
</script>

<style >

</style>
