<template>
  <div>
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
      console.log('222')
    }
  }
};
</script>
