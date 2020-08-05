// header区域

<template>
  <div class="header-container">
    <!-- 面包屑 -->
    <div class="left-area">
      <el-breadcrumb class="breadArea"
                     separator="/">
        <el-breadcrumb-item v-for="item in breadList"
                            :key="item.name"
                            :to="{ path: item.path }">
          {{ item.meta.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 用户信息区域 -->
    <div class="right-area">
      <div class="user-area">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <el-avatar size="small"
                       class="user-icon"
                       icon="el-icon-user-solid"></el-avatar>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="signout">退出登录</el-dropdown-item>
            <el-dropdown-item command="changePw">修改密码</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        用户a
      </div>
    </div>
  </div>
</template>
<script>
import { clearLs } from '@/utils'
export default {
  data: () => ({
    breadList: []
  }),
  computed: {
  },
  watch: {
    $route () {
      this.getBreadCrumbList()
    }
  },
  created () {
    this.getBreadCrumbList()
  },
  methods: {
    handleCommand (val) {
      if (val === 'signout') {
        clearLs()
        this.$router.push('/login')
      }
      if (val === 'changePw') {
        this.$router.push('/changePw')
      }
    },
    getBreadCrumbList () {
      this.breadList = this.$route.matched.filter(item => item.name !== 'main')
    }
  }
}
</script>
<style lang="scss" scoped>
.header-container {
  padding: 0 10px;
  display: flex;
  align-items: center;
  width: calc(100% - 20px);
  height: 50px;
  background-color: #fff;
}
.left-area {
  width: 50%;
  .breadArea {
    margin-left: 10px;
  }
}
.right-area {
  width: 50%;
  .user-area {
    float: right;
    display: flex;
    align-items: center;
    margin-right: 10px;
    .user-icon {
      cursor: pointer;
      margin: 0 10px 0 10px;
    }
  }
}
</style>
