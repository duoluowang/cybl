<template>
  <div class="course">
    <div class="base-table">
      <el-table :data="tableData" style="width: 100%;">
        <el-table-column prop="id" label="用户Id"  />
        <el-table-column prop="name" label="用户名"  />
        <el-table-column prop="realName" label="姓名"  />
        <el-table-column prop="phone" label="电话" />
        <el-table-column prop="loginTime" label="最后登录时间" />
        <el-table-column label="操作" width="180">
          <template #default="scope">
            <el-button size="large" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="large" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination background layout="prev, pager, next" :total="total" />
  </div>
</template>

<script>
const querydata = {
  page: 1,
  pageSize: 10
}
export default {
  name: "welcome",
  data() {
    return {
      tableData: [],
      total:0
    }
  },
  mounted() {
    this.getUserList({ "page": 1, "pageSize": 10 })
  },
  methods: {
    async getUserList(params) {
      try {
        let res = await this.$api.getUserList(params)
        console.log("res:"+JSON.stringify(res))
        this.tableData = res.records
        this.total = res.total
        console.log(res.total)
      } catch (error) {
        throw new Error(error)
      }
    },
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    }
  }
};
</script>

<style lang="scss">
.welcome {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #fff;

  .content {
    position: relative;
    bottom: 40px;

    .sub-title {
      font-size: 30px;
      line-height: 42px;
      color: #333;
    }

    .title {
      font-size: 40px;
      line-height: 62px;
      color: #409eff;
    }

    .desc {
      text-align: right;
      font-size: 14px;
      color: #999;
    }
  }
}
</style>