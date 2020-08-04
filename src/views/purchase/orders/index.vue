<template>
  <div>
    <el-form
      ref="form"
      :model="form"
      label-width="80px"
      label-suffix=":"
    >
      <el-row :gutter="16">
        <el-col :span="6">
          <el-form-item label="日期">
            <el-date-picker
              v-model="listQuery.date"
              style="width: 100%"
              type="datetimerange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="商品名称">
            <el-input
              v-model="listQuery.goods"
              placeholder="请输入商品名称"
            />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="单号">
            <el-input
              v-model="listQuery.no"
              placeholder="请输入单号"
            />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="状态">
            <el-select
              v-model="listQuery.status"
              placeholder="请选择状态"
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
      </el-row>
    </el-form>
    <div class="table-op">
      <div>
        <el-button type="primary">
          批量打印
        </el-button>
        <el-button
          type="primary"
          @click="add"
        >
          新增采购单
        </el-button>
      </div>
      <div>
        <el-button
          type="primary"
          @click="handleFilter"
        >
          查询
        </el-button>
        <el-button @click="reset">
          重置
        </el-button>
      </div>
    </div>
    <div class="table-area">
      <el-table
        v-loading="tableLoading"
        border
        :data="tableData"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          label="选择"
          align="center"
          type="selection"
          fixed="left"
          width="50"
        />
        <el-table-column
          prop="address"
          align="center"
          label="状态"
        />
        <el-table-column
          prop="name"
          align="center"
          label="日期"
        />
        <el-table-column
          prop="date"
          align="center"
          label="供应商名称"
        />
      </el-table>
    </div>
    <div class="pagination-area">
      <el-pagination
        :current-page="listParams.current"
        :page-sizes="pageSizeArr"
        :page-size="listParams.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
<script>
import tableMixins from '@/mixins/tableMixins'
export default {
  mixins: [tableMixins],
  data: () => ({
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
    }, {
      name: '商品',
      address: '上海仓库',
      date: '日期'
    }, {
      name: '商品',
      address: '上海仓库',
      date: '日期'
    }, {
      name: '商品',
      address: '上海仓库',
      date: '日期'
    }, {
      name: '商品',
      address: '上海仓库',
      date: '日期'
    }]
  }),
  methods: {
    add () {
      this.$router.push('add-purchase')
    },
    handleSelectionChange() {}
  }
}
</script>
<style lang="scss" scoped>
.gather-data {
  span {
    color: red;
    font-size: 20px;
  }
}
.iconFont {
  cursor: pointer;
  font-size: 16px;
}
</style>
