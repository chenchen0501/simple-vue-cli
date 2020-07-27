<template>
  <div class="home">
    <div>env: {{ env }}</div>
    <div style="text-align: left">
      <el-button v-permission="ADD_BTN" type="primary">新增</el-button>
      <el-button v-permission="DEL_BTN" type="primary">删除</el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      env: process.env,
      ADD_BTN: 'ADD_BTN',
      DEL_BTN: 'DEL_BTN'
    }
  },
  mounted() {
  }
}
</script>
