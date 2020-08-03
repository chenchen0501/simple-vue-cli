// 主布局

<template>
  <el-container class="main-container">
    <el-aside class="left-area"
              :width="width">
      <!-- 左侧菜单 -->
      <SideBar />
    </el-aside>
    <el-main class="right-area">
      <!-- 头部 -->
      <Header />
      <!-- 显示区域 -->
      <Main>
        <router-view />
      </Main>
    </el-main>
  </el-container>
</template>
<script>
import SideBar from './sideBar'
import Header from './header'
import Main from './mainArea'
import { mapState } from 'vuex'
export default {
  components: { SideBar, Header, Main },
  data () {
    return {
    }
  },
  computed: {
    // 控制左侧菜单栏的开合
    ...mapState('global', {
      isCollapse: 'isCollapse',
      width: 'sideBarWidth'
    })
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.main-container {
  height: 100vh;
}
.left-area {
  transition: width 0.3s;
  overflow: hidden;
}
.right-area {
  background-color: #f0f2f5;
  padding: 0;
}
.el-menu-vertical-demo {
  height: 100%;
  &:not(.el-menu--collapse) {
    width: 200px;
  }
}
.el-menu--collapse {
  width: 60px;
}
.el-menu-item:hover {
  background-color: #1890ff !important;
}
</style>
