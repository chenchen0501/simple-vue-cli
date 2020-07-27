<template>
  <div class="home">
    <div>env: {{ env }}</div>
    <div style="text-align: left">
      <el-button v-permission="ADD_BTN" type="primary">新增</el-button>
      <el-button v-permission="DEL_BTN" type="primary">删除</el-button>
      <el-button type="primary" @click="save()">存储</el-button>
      <el-button type="primary" @click="read()">读取</el-button>
      <el-button type="primary" @click="sendAjax">请求</el-button>
    </div>
  </div>
</template>

<script>
import ls from '@/utils/localStorage'
import userApi from '@/api/user'

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      env: process.env,
      ADD_BTN: 'ADD_BTN',
      DEL_BTN: 'DEL_BTN',
      value: '2'
    }
  },
  mounted() {
    ls.set('token', '2diae89s2diae89s2diae89s2diae89s')
  },
  methods: {
    sendAjax() {
      userApi.testAjax({ id: 1, name: 'cc', arr: [1, 2, 3, 4] }).then(() => {})
    },
    save() {
      ls.set('token', '我是token2')
    },
    read() {
      this.value = ls.get('token')
    }
  }
}
</script>
