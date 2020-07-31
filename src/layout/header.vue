// header区域

<template>
  <div class="header-container">
    <!-- 面包屑 -->
    <div class="left-area">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="item in breadList"
          :key="item.name"
          :to="{ path: item.path }">
          {{ item.meta.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 用户信息区域 -->
    <div class="right-area">
      <div class="user-area">
        <el-avatar size="small" class="user-icon" icon="el-icon-user-solid"></el-avatar>
        用户a
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    breadList: []
  }),
  computed: {
  },
  watch: {
    $route() {
      this.getBreadCrumbList()
    }
  },
  created() {
    this.getBreadCrumbList()
  },
  methods: {
    getBreadCrumbList() {
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
  // box-shadow: 10px 10px 5px #888888;
}
.left-area {
  width: 50%;
}
.right-area {
  width: 50%;
  .user-area {
    float: right;
    display: flex;
    align-items: center;
    margin-right: 10px;
    .user-icon {
      margin: 0 10px 0 10px;
    }
  }
}
</style>
