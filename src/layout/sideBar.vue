// 菜单栏

<template>
  <el-menu unique-opened text-color="#fff" background-color="#000c17" active-text-color="#fff" class="el-menu-vertical-demo" :collapse="isCollapse">
      <el-menu-item index="0" class="logo-menu-item">
        <span slot="title" @click="$router.push('/')">首页</span>
        <i :class="['iconfont','icon-home_shousuo_icon',!isCollapse ? 'splitIcon-noCollapse':'splitIcon-collapse']" @click="split"></i>
      </el-menu-item>
    <template v-for="item in asyncRoutes">
      <router-link v-if="!item.children || !item.children.length" :key="item.name" :to="item.path">
        <el-menu-item :index="item.name">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.meta.title }}</span>
        </el-menu-item>
      </router-link>

      <el-submenu v-if="item.children && item.children.length" :key="item.name" index="item.name">
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.meta.title }}</span>
        </template>
        <router-link v-for="subItem in item.children" :key="subItem.name" :to="`${item.path}/${subItem.path}`">
          <el-menu-item :index="subItem.name">
            <span slot="title">{{ subItem.meta.title }}</span>
          </el-menu-item>
        </router-link>
      </el-submenu>
    </template>
  </el-menu>

</template>
<script>
import { mapState } from 'vuex'
import { asyncRoutes } from '@/router/routes'
export default {
  data() {
    return {
      asyncRoutes
    }
  },
  computed: {
    ...mapState('global', {
      isCollapse: 'isCollapse'
    })
  },
  mounted() {
  },
  methods: {
    split() {
      this.$store.commit('global/splitCollapse')
    }
  }
}
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo {
  height: 100%;
  &:not(.el-menu--collapse) {
    width: 200px;
  }
}
.el-menu--collapse {
  width: 60px;
}
.el-menu-item:hover:not(.logo-menu-item){
  background-color: #1890ff !important;
}
.logo-menu-item {
  padding: 0 10px;
  .splitIcon-noCollapse {
    transform: rotate(0);
    float: right;
    font-size: 16px;
    color: #909399;
  }
   .splitIcon-collapse {
    transform: rotate(90deg);
    float: right;
    font-size: 16px;
    color: #909399;
  }
}
</style>
