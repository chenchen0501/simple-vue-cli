<template>
  <div>
    <el-form
      ref="form"
      :model="form"
      :rules="rules"
      label-width="80px"
      label-suffix=":"
    >
      <el-row :gutter="16">
        <el-col :span="6">
          <el-form-item
            label="供应商"
            prop="provider"
          >
            <el-select
              v-model="form.provider"
              placeholder="请选择供应商"
            >
              <el-option
                v-for="item in statusArr"
                :key="item.vlaue"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item
            label="仓库"
            prop="store"
          >
            <el-select
              v-model="form.store"
              placeholder="请选择仓库"
            >
              <el-option
                v-for="item in statusArr"
                :key="item.vlaue"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item
            label="日期"
            prop="date"
          >
            <el-date-picker
              v-model="form.date"
              style="width: 100%"
              type="datetimerange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="发货地">
            <el-input v-model="form.resource" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="16">
        <el-col :span="6">
          <el-form-item label="快递单号">
            <el-input v-model="form.no" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="table-op">
      <div>
        <el-button
          type="primary"
          @click="add"
        >
          新增一条
        </el-button>
      </div>
      <div />
    </div>
    <div class="table-area">
      <el-table
        border
        :data="tableData"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          label="序号"
          align="center"
          type="index"
          fixed="left"
          width="50"
        />
        <el-table-column
          label="操作"
          align="center"
          fixed="left"
          width="50"
        >
          <template slot-scope="scope">
            <i
              class="el-icon-delete"
              style="color: #F56C6C"
              @click="del(scope.$index)"
            />
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="商品"
        />
        <el-table-column
          prop="name"
          align="center"
          label="货号"
        />
        <el-table-column
          prop="date"
          align="center"
          label="图片"
        />
        <el-table-column
          prop="name"
          align="center"
          label="数量"
        />
        <el-table-column
          prop="date"
          align="center"
          label="当前库存"
        />
        <el-table-column
          prop="name"
          align="center"
          label="单价"
        />
        <el-table-column
          prop="date"
          align="center"
          label="金额"
        />
      </el-table>
      <h3 class="total">
        货款合计：1000
      </h3>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    rules: {
      provider: [{ required: true, message: '请选择供应商' }],
      store: [{ required: true, message: '请选择仓库' }],
      date: [{ required: true, message: '请选择日期' }]
    },
    statusArr: [{
      value: 1, label: '已采购'
    }, {
      value: 2, label: '草稿'
    }, {
      value: 3, label: '已撤销'
    }, {
      value: 4, label: '待入库'
    }, {
      value: 5, label: '部分入库'
    }],
    isShowRes: true,
    form: {},
    tableData: [{
      name: '商品',
      address: '上海仓库',
      date: '日期'
    }]
  }),
  methods: {
    add () {
      this.tableData.push({})
    },
    del(index) {
      this.tableData.splice(index, 1)
    },
    handleSelectionChange () { }
  }
}
</script>
<style lang="scss" scoped>
.total {
  float: right;
  margin-top: 10px;
}
</style>
