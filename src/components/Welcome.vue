<template>
  <div>
    <h1>欢迎页面{{msg}}</h1>
    <router-link to="/login">去登陆</router-link>
  </div>
</template>

// <script setup>
// import { defineProps} from 'vue'
// defineProps({
//   msg:String
// })
// </script>

<script>
export default{
  name:'welcome',
  props:['msg']
}
</script>


<style>

</style>
