<template>
  <el-container class="main-container">
    <el-aside class="left-area" width="200px">left</el-aside>
    <el-main class="right-area">right</el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.main-container {
  height: 100vh;
}
.left-area {
  background-color: green;
}
.right-area{
  background-color: red;
}
</style>
