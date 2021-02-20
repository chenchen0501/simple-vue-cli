<template>
  <div class="login-container">
    <vue-particles
      class="vue-particles"
      color="#dedede"
      :particle-opacity="0.7"
      :particles-number="80"
      shape-type="star"
      :particle-size="4"
      lines-color="#dedede"
      :lines-width="1"
      :line-linked="true"
      :line-opacity="0.4"
      :lines-distance="150"
      :move-speed="3"
      :hover-effect="true"
      hover-mode="grab"
      :click-effect="true"
      click-mode="push"
    />
    <div class="login-area">
      <el-form
        ref="form"
        label-position="right"
        label-width="80px"
        label-suffix=":"
        :rules="rules"
        :model="form"
      >
        <h1 class="title">
          系统登录
        </h1>
        <el-form-item prop="username">
          <el-input
            v-model="form.username"
            prefix-icon="el-icon-user"
            placeholder="请输入登录账号"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            prefix-icon="el-icon-lock"
            placeholder="请输入登录密码"
            autocomplete="on"
            show-password
          />
        </el-form-item>
      </el-form>
      <el-button
        size="medium"
        type="primary"
        style="width: 100%"
        @click="login"
      >
        登录
      </el-button>
      <div class="btn">
        <el-button
          type="text"
          @click="$router.push({ path: '/register' })"
        >
          点我注册
        </el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    form: {},
    rules: {
      username: [{ required: true, message: "请输入登录账号" }],
      password: [{ required: true, message: "请输入登录密码" }],
    },
  }),
  methods: {
    login() {
      this.$refs.form.validate((val) => {
        if (val) {
          this.$store.dispatch("user/signIn", this.form).then(() => {
            this.$router.replace("/main");
          });
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.vue-particles {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

/deep/ .el-input--mini .el-input__inner {
  height: 35px;
}
/deep/ .el-form-item__content {
  margin-left: 0 !important;
}
.login-container {
  background-color: #2d3a4b;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .login-area {
    z-index: 999;
    .title {
      color: #fff;
      margin-bottom: 30px;
      font-weight: bold;
      text-align: center;
    }
    width: 30%;
    /deep/ .el-input__inner {
      height: 47px;
    }
    .btn {
      text-align: right;
      margin-top: 10px;
    }
  }
}
</style>
