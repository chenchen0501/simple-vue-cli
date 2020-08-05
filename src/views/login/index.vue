<template>
  <div class="login-container">
    <div class="login-area">
      <el-form label-position="right"
               label-width="80px"
               label-suffix=":"
               ref="form"
               :rules="rules"
               :model="form">
        <h1 class="title">系统登录</h1>
        <el-form-item prop="account">
          <el-input prefix-icon="el-icon-user"
                    placeholder="请输入登录账号"
                    v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item prop="pw">
          <el-input prefix-icon="el-icon-lock"
                    placeholder="请输入登录密码"
                    autocomplete="on"
                    show-password
                    v-model="form.pw"></el-input>
        </el-form-item>
      </el-form>
      <el-button size="medium"
                 type="primary"
                 @click="login"
                 style="width: 100%">登录</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    form: {},
    rules: {
      account: [{ required: true, message: '请输入登录账号' }],
      pw: [{ required: true, message: '请输入登录密码' }]
    }
  }),
  methods: {
    login () {
      this.$refs.form.validate(val => {
        if (val) {
          this.$store.dispatch('user/signIn', this.form)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
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
    .title {
      color: #fff;
      margin-bottom: 30px;
      font-weight: bold;
    }
    width: 30%;
    /deep/ .el-input__inner {
      height: 47px;
    }
  }
}
</style>