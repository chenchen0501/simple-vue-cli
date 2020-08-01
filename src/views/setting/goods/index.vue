<template>
  <div>
    <el-form ref="form" :model="form" label-width="70px">
      <el-row :gutter="16">
        <el-col :span="6">
          <el-form-item label="商品">
            <el-input v-model="form.name" placeholder="请输入商品名称、货号"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="分类">
            <el-select v-model="form.region" placeholder="请选择分类">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="采购员">
            <el-select v-model="form.region" placeholder="请选择采购员">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="产品开发">
            <el-select v-model="form.region" placeholder="请选择产品开发">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="仓库">
            <el-select v-model="form.region" placeholder="请选择仓库">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
          <el-col :span="6">
            <el-form-item label="供应商">
              <el-input v-model="form.name" placeholder="请输入供应商名称"></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="库存">
            <el-select v-model="form.region" placeholder="请选择库存">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="发货地">
            <el-select v-model="form.region" placeholder="请选择发货地">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="table-op">
      <div>
        <el-button type="primary">添加</el-button>
        <el-button type="primary">导入</el-button>
        <el-button type="primary">导出</el-button>
        <el-button type="primary">批量采购</el-button>
        <el-button type="primary">盘点</el-button>
        <el-button type="danger">删除</el-button>
      </div>
      <div>
        <el-button type="primary">查询</el-button>
        <el-button>重置</el-button>
      </div>
    </div>
    <div class="table-area">
      <el-table
      :data="tableData"
        style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        label="选择"
        align="center"
        type="selection"
        fixed="left"
        width="50">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        width="150"
        label="名称">
      </el-table-column>
            <el-table-column
        prop="date"
        align="center"
        label="图片"
        width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        align="center"
        label="货号"
        width="100">
      </el-table-column>
      <el-table-column
        align="center"
        prop="address"
        label="分类">
      </el-table-column>      <el-table-column
        align="center"
        prop="date"
        label="发货地"
        width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        align="center"
        label="采购中数量"
        width="100">
      </el-table-column>
      <el-table-column
        align="center"
        prop="address"
        label="库存">
      </el-table-column>      <el-table-column
        prop="date"
        align="center"
        label="库存预警"
        width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        align="center"
        label="上周数量"
        width="100">
      </el-table-column>
      <el-table-column
        align="center"
        prop="address"
        label="仓库">
      </el-table-column>
      <el-table-column
        fixed="right"
        align="center"
        prop="name"
        label="操作"
        width="120">
        <template>
          <el-button type="text">销售</el-button>
          <el-button type="text">采购</el-button>
          <el-button type="text">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    </div>
    <div class="pagination-area">
      <el-pagination
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="5"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange">
    </el-pagination>
    </div>
  </div>
</template>
<script>
import tableMixins from '@/mixins/tableMixins'

export default {
  mixins: [tableMixins],
  data: () => ({
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
    handleSelectionChange(val) {
      console.log(val)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
