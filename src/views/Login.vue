<template>
  <div class="login-wrapper">
    <div class="modal">
      <el-form ref="userForm" :model="user" status-icon :rules="rules">
        <div class="title">餐饮部落</div>
        <el-form-item prop="phone">
          <el-input
            type="text"
            prefix-icon="User"
            v-model="user.phone"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            prefix-icon="Lock"
            v-model="user.password"
          />
        </el-form-item>
        
        <el-form-item>
                 <el-button type="primary" class="btn-login" @click="login"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
const modules = import.meta.glob('../views/*.vue');
import storage from "./../utils/storage";
export default {
  name: "login",
  data() {
    return {
      user: {
        phone: "",
        password: "",
        loginType:1,
        platfrom:"web"
      },
      rules: {
        phone: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    login() {
      this.$refs.userForm.validate((valid) => {
        if (valid) {
          //md5加密
          const data = this.user
          data.password=this.$md5(data.password)
          // console.log("user:"+JSON.stringify(this.user))
          this.$api.login(data).then(async (res) => {
            this.$store.commit("saveUserInfo", res);
            await this.loadAsyncRoutes();
            this.$router.push("/welcome");
          });
        } else {
          return false;
        }
      });
    },
    async loadAsyncRoutes() {
      let userInfo = storage.getItem("userInfo") || {};
      if (userInfo.token) {
        try {
          const { menuList } = await this.$api.getPermissionList();
          let routes = utils.generateRoute(menuList);
          routes.map((route) => {
            let url = `./../views/${route.component}.vue`;
            route.component = () => modules[url];
            this.router.addRoute("home", route);
          });
        } catch (error) {}
      }
    },
    goHome() {
      this.$router.push("/welcome");
    },
  },
};
</script>

<style lang="scss">
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9fcff;
  width: 100vw;
  height: 100vh;
  .modal {
    width: 500px;
    padding: 50px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 0px 10px 3px #c7c9cb4d;
    .title {
      font-size: 50px;
      line-height: 1.5;
      text-align: center;
      margin-bottom: 30px;
    }
    .btn-login {
      width: 100%;
    }
  }
}
</style>