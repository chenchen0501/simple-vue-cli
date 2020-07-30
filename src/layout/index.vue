<template>
  <el-container class="main-container">
    <el-aside class="left-area" :width="width">
      <el-menu text-color="#fff" background-color="#000c17" active-text-color="#fff" class="el-menu-vertical-demo" :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main class="right-area">
      <el-button type="primary" @click="split">切换</el-button>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: false,
      width: '200px'
    }
  },
  methods: {
    split() {
      this.isCollapse = !this.isCollapse
      this.width = this.isCollapse ? '60px' : '200px'
    }
  }
}
</script>
<style lang="scss" scoped>
.main-container {
  height: 100vh;
}
.left-area {
  background-color: #000c17;
  overflow: hidden;
  transition: width 0.4s;
}
.el-menu {
  border-right: 0;
}
.right-area{
  background-color: #fff;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 500px;
}
.el-menu--collapse {
  width: 60px;
}
.el-menu-item:hover{
  background-color: #1890ff !important;
}
</style>
