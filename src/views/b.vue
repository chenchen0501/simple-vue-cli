<template>
  <div class="container">
    <!-- 测试树形下拉 -->
    <div style="margin-bottom: 20px">
      <h1>测试树形下拉</h1>
    </div>
    <div>
      <el-select
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
            :data="data"
            :filter-node-method="filterNode"
            :expand-on-click-node="false"
            :props="props"
            @node-click="handleNodeClick"
            @check-change="checkChange"
          />
        </el-option>
      </el-select>
    </div>
  </div>
</template>
<script>
// 格式化树形数据
const formateTreeData = (
  data,
  props = { value: "value1", label: "label1", children: "children1" }
) => {
  let options = JSON.parse(JSON.stringify(data));
  if (!Array.isArray(options)) return [];

  for (let item of options) {
    for (let prop in props) {
      if (prop === "children") {
        if (Array.isArray(item[props[prop]]) && item[props[prop]].length) {
          item[prop] = formateTreeData(item[props[prop]]);
        }
      } else {
        item[prop] = item[props[prop]];
      }

      delete item[props[prop]];
    }
  }

  return options;
};

// 查找目标value，在树中的对象Obj
const findInTreeData = (ids, data) => {
  if (!Array.isArray(data)) return;

  // 判断是否为多选
  let isMultiple = Array.isArray(ids);

  // 目标对象(可能为string，可能为array)
  let goal = null;

  if (isMultiple) {
    goal = [];
    for (let id of ids) {
      let res = findInTreeData(id, data);
      if (res) {
        goal.push(res);
      }
    }
  } else {
    // 遍历树
    for (let item of data) {
      let { value, children, label } = item;
      if (value === ids) {
        goal = item;
        break;
      } else {
        if (children && Array.isArray(children) && children.length) {
          goal = findInTreeData(ids, children);
          if (goal) break;
        }
      }
    }
  }

  return goal;
};

// 获取当前节点下所有叶子节点
const getAllLeafNodes = (data) => {
  let { children } = data;
  let arr = [];

  if (!children) {
    // 本身就是叶子节点
    return [data];
  }

  for (let item of children) {
    if (item.children && Array.isArray(item.children) && item.children.length) {
      arr.push(...getAllLeafNodes(item));
    } else {
      arr.push(item);
    }
  }
  return arr;
};

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
      default: () => true,
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
          label1: "一级 1",
          value1: 1,
          disabled: true,
          children1: [
            {
              label1: "二级 1-1",
              value1: 11,
              children1: [
                {
                  label1: "三级 1-1-1",
                  value1: 111,
                },
                {
                  label1: "三级 1-1-2",
                  value1: 112,
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
              children: [
                {
                  label: "三级 2-1-1",
                  value: 211,
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
    },

    // 初始化
    initData() {
      console.log("init", formateTreeData(this.data));
      // console.log("init", findInTreeData([31, 321], this.data).map(item => item.label));
      // 默认值返显
      if (this.isMultiple) {
        this.checkChange();
      } else {
        let initSelectVal = findInTreeData(this.value, this.data).map(
          (item) => item.label
        );
        if (initSelectVal) {
          this.selectedLabel = initSelectVal;
        }
      }
    },

    // 单选点击选择
    handleNodeClick(data) {
      console.log(label, getAllLeafNodes(data));

      if (this.isMultiple) return;
      let { label, children } = data;
      if (!children || (Array.isArray(children) && children.length === 0)) {
        this.selectedLabel = label;
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
