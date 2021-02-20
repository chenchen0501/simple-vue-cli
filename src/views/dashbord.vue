<template>
  <div class="container">
    <!-- 测试loadmore指令 -->
    <h1>测试loadmore指令</h1>
    <el-select
      v-model="value"
      v-loadmore="loadMore"
    >
      <el-option
        v-for="item in options"
        :key="item"
        :value="item"
        :label="item"
      />
    </el-select>
  </div>
</template>
<script>
export default {
  data: () => ({
    value: "",
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  }),
  methods: {
    loadMore() {
      // 加载更多数据
      console.log("加载更多数据");
    },
  },
};
</script>
