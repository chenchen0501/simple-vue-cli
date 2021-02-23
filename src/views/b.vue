<template>
  <div class="container">
    <!-- 测试树形下拉 -->
    <div style="margin-bottom: 20px">
      <h1>测试树形下拉</h1>
    </div>
    <div>
      <VueTreeSelect
        v-model="treevalue"
        :options="data"
      />
    </div>
  </div>
</template>
<script>
import VueTreeSelect from "@/components/VueTreeSelect";
export default {
  components: {
    VueTreeSelect,
  },
  data() {
    return {
      treevalue: "",
      data: [
        {
          label: "一级 1",
          value: 1,
          disabled: true,
          children: [
            {
              label: "二级 1-1",
              value: 11,
              parentId: 1,
              children: [
                {
                  label: "三级 1-1-1",
                  value: 111,
                  parentId: 11,
                },
                {
                  label: "三级 1-1-2",
                  value: 112,
                  parentId: 11,
                },
              ],
            },
          ],
        },
        {
          label: "一级 2",
          value: 2,
          children: [
            {
              label: "二级 2-1",
              value: 21,
              parentId: 2,
              children: [
                {
                  label: "三级 2-1-1",
                  value: 211,
                  parentId: 21,
                },
              ],
            },
            {
              label: "二级 2-2",
              value: 22,
              children: [
                {
                  label: "三级 2-2-1",
                  value: 221,
                },
              ],
            },
          ],
        },
        {
          label: "一级 3",
          value: 3,
          children: [
            {
              label: "二级 3-1",
              value: 31,
              children: [
                {
                  label: "三级 3-1-1",
                  value: 311,
                },
              ],
            },
            {
              label: "二级 3-2",
              value: 32,
              children: [
                {
                  label: "三级 3-2-1",
                  value: 321,
                },
              ],
            },
          ],
        },
      ],
    };
  },
  watch: {
    // treevalue(val) {
    //   console.log("treevalue", val);
    // },
  },
  mounted() {},
  methods: {},
};
</script>
