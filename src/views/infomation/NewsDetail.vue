<template>
  <div class="course">
    <div class="base-table">
      <el-table :data="tableData" style="width: 100%;">
        <el-table-column prop="title" label="标题"/>
        <el-table-column  label="操作" width="180">
          <template #default="scope">
        <el-button size="large" @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
        >
        <el-button
          size="large"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
      </el-table>
    </div>
   <el-pagination background layout="prev, pager, next" :total="1000" />


  </div>
</template>

<script>
const querydata={
      page:1,
      pageSize:10
  }
export default {
  name: "news",
  data(){
    return {
      tableData:[]
    }
  },
  mounted(){
    this.getNewsList({"page":1,"pageSize":10})
  },
  methods:{
    async getNewsList(params){
      try {
        let list = await this.$api.getNewsList(params)
        this.tableData = list
      } catch (error) {
        throw new Error(error)
      }
    },
    handleEdit(index, row){
      // console.log(index, row)
      console.log(row.times)
      console.log(new Date().toUTCString())
    },
    handleDelete(index, row){
      console.log(index, row)
    }
  }
};
</script>

<style lang="scss">

</style>