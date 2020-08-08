<template>
  <div class="login-container">
    <div class="login-area">
      <el-form label-position="right"
               label-width="130px"
               label-suffix=":"
               ref="form"
               :rules="rules"
               :model="form">
        <h1 class="title">注册</h1>
        <el-form-item label="账号"
                      prop="username">
          <el-input placeholder="请输入账号"
                    v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="手机号"
                      prop="phone">
          <el-input placeholder="请输入手机号"
                    v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="新密码"
                      prop="password">
          <el-input placeholder="请输入新密码"
                    show-password
                    v-model="form.password">
          </el-input>
        </el-form-item>
        <el-form-item label="再次输入新密码"
                      prop="rePeatNewPw">
          <el-input placeholder="再次输入新密码"
                    show-password
                    v-model="form.rePeatNewPw"></el-input>
        </el-form-item>
      </el-form>
      <div class="btn-area">
        <el-button size="medium"
                   type="primary"
                   @click="submit">确定并登入</el-button>
        <el-button size="medium"
                   @click="$router.go(-1)">取消</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import ls from '@/utils/localStorage'
import api from '@/api'
export default {
  data: () => ({
    form: {},
    rules: {
      username: [{ required: true, message: '请输入原密码' }],
      phone: [{ required: true, message: '请输入手机号' }],
      password: [{ required: true, message: '请输入新密码' }],
      rePeatNewPw: [{ required: true, message: '请再次输入新密码' }]
    }
  }),
  methods: {
    submit () {
      this.$refs.form.validate(val => {
        if (val) {
          if (this.form.password !== this.form.rePeatNewPw) {
            this.$message.error('两次输入的新密码不一致')
            return
          }
          api.registry(this.form).then(res => {
            console.log(res)
          })
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
.login-container {
  background-color: #2d3a4b;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .login-area {
    .btn-area {
      padding-left: 120px;
      display: flex;
      justify-content: center;
    }
    .title {
      color: #fff;
      padding-left: 120px;
      margin-bottom: 30px;
      font-weight: bold;
      text-align: center;
    }
    width: 30%;
    margin-right: 130px;
  }
}
</style>