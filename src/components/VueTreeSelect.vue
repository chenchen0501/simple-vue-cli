<template>
  <!-- vue树形下拉 -->
  <el-select
    ref="select"
    v-model="selectedLabel"
    clearable
    filterable
    :multiple="isMultiple"
    :filter-method="filterMethod"
    placeholder="请选择"
    @remove-tag="removeTag"
    @clear="selectClear"
  >
    <el-option
      :value="1"
      class="tree_option"
    >
      <el-tree
        ref="tree"
        :show-checkbox="isMultiple"
        node-key="value"
        :default-checked-keys="defaultCheckedKeys"
        :data="options"
        :filter-node-method="filterNode"
        :expand-on-click-node="false"
        :props="props"
        @node-click="handleNodeClick"
        @check-change="checkChange"
      />
    </el-option>
  </el-select>
</template>
<script>
import { findInTreeData } from "@/utils";
import { isObject } from "lodash";

export default {
  props: {
    // 数据源
    options: {
      type: Array,
      default: () => [],
    },
    // 自定义值类型
    // 'all' - 所有父子节点值都包含在value中
    //  'leaf' - 只有叶子节点会包含在内
    valueConsistsOf: {
      type: String,
      default: () => "leaf",
    },
    // 单选是number/string，多选则为array
    value: {
      type: Number | String | Array,
      default: () => 1,
    },

    // 是否多选
    isMultiple: {
      type: Boolean,
      default: () => false,
    },

    // 默认Props
    props: {
      type: Object,
      default: () => ({
        children: "children",
        label: "label",
        // disabled: (item) => {
        //   return true;
        // },
      }),
    },
  },
  data() {
    return {
      allCheckedNodes: [],
      // 被选中的值
      selectedValue: [],
      selectedLabel: this.isMultiple ? [] : "",
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
  computed: {
    defaultCheckedKeys() {
      if (Array.isArray(this.value)) {
        return this.value;
      }
      return [];
    },
  },
  mounted() {
    // let obj = {
    //   a: 1
    // }
    // console.log('test', obj?.a, obj?.b)
    this.initData();
  },
  methods: {
    // 清空
    selectClear() {
      this.$refs.tree.setCheckedKeys([]);
    },

    // 多选移除
    removeTag(val) {
      let removeTag = this.allCheckedNodes.filter((item) => item.label === val);
      this.$refs.tree.setChecked(removeTag[0].value, false);
    },

    // tree模糊搜索
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },

    filterMethod(val) {
      this.$refs.tree.filter(val);
    },

    // 复选框被选中fn
    checkChange() {
      // console.log(this.$refs.tree.getCheckedNodes());
      this.allCheckedNodes = this.$refs.tree.getCheckedNodes();

      if (this.valueConsistsOf === "leaf") {
        this.selectedValue = this.allCheckedNodes
          .filter((item) => !item.children)
          .map((item) => item.value);
        this.selectedLabel = this.allCheckedNodes
          .filter((item) => !item.children)
          .map((item) => item.label);
      }
      if (this.valueConsistsOf === "all") {
        this.selectedValue = this.allCheckedNodes.map((item) => item.value);
        this.selectedLabel = this.allCheckedNodes.map((item) => item.label);
      }
      
      this.$emit("input", this.selectedValue);
    },

    // 初始化
    initData() {
      // console.log("init", findPathByValue(221, this.data));

      // 默认值返显
      if (this.isMultiple) {
        this.checkChange();
      } else {
        let initSelectNode = findInTreeData(this.value, this.data);

        if (isObject(initSelectNode) && Object.keys(isObject).length) {
          this.selectedLabel = initSelectNode.label;
        }
      }
    },

    // 单选点击选择
    handleNodeClick(data) {
      if (this.isMultiple) return;
      let { label, children, value } = data;
      if (!children || (Array.isArray(children) && children.length === 0)) {
        this.selectedLabel = label;
        this.$emit("input", value);
        this.$refs.select.blur();
        return;
      }
      this.$message.warning("只能选择叶子节点 ！");
    },
  },
};
</script>
<style lang="scss" scoped>
.tree_option {
  height: unset;
}
</style>
