<template>
  <div>
    <el-form ref="form"
             :model="form"
             label-width="100px"
             label-suffix=":">
      <el-row :gutter="16">
        <el-col :span="6">
          <el-form-item label="销售账号">
            <el-input v-model="listQuery.name"
                      placeholder="请输入销售账号"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="分类">
            <el-select v-model="listQuery.region"
                       placeholder="请选择分类">
              <el-option label="区域一"
                         value="shanghai"></el-option>
              <el-option label="区域二"
                         value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="订单状态">
            <el-select v-model="listQuery.region"
                       placeholder="请选择订单状态">
              <el-option label="区域一"
                         value="shanghai"></el-option>
              <el-option label="区域二"
                         value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="建单起止日期">
            <el-date-picker v-model="listQuery.orderStart"
                            type="daterange"
                            range-separator="~"
                            style="width: 100%"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="标题">
            <el-input v-model="listQuery.title"
                      placeholder="请输入标题"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="雅虎ID">
            <el-input v-model="listQuery.title"
                      placeholder="请输入雅虎ID"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="交易编号">
            <el-input v-model="listQuery.name"
                      placeholder="请输入交易编号"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="发货起止日期">
            <el-date-picker v-model="listQuery.orderEnd"
                            type="daterange"
                            range-separator="~"
                            style="width: 100%"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="收件人">
            <el-input v-model="listQuery.name"
                      placeholder="请输入收件人"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="转单号">
            <el-input v-model="listQuery.name"
                      placeholder="请输入转单号"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="原单号">
            <el-input v-model="listQuery.name"
                      placeholder="请输入原单号"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="销售平台">
            <el-select v-model="listQuery.region"
                       placeholder="请选择销售平台">
              <el-option label="区域一"
                         value="shanghai"></el-option>
              <el-option label="区域二"
                         value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="table-op">
      <div>
        <el-button type="primary">批量发货</el-button>
        <el-button type="primary">订单导出</el-button>
        <el-button type="primary">订单导入</el-button>
        <el-button type="primary">批量采购</el-button>
        <el-button type="danger">删除</el-button>
      </div>
      <div>
        <el-button type="primary"
                   @click="handleFilter">查询</el-button>
        <el-button @click="reset">重置</el-button>
      </div>
    </div>
    <div class="table-area">
      <el-table v-loading="tableLoading"
                :cell-style="cellStyleFn"
                :header-cell-style="cellStyleFn"
                :data="tableData"
                border
                style="width: 100%"
                @selection-change="handleSelectionChange">
        <el-table-column label="选择"
                         align="center"
                         type="selection"
                         fixed="left"
                         width="50">
        </el-table-column>
        <el-table-column prop="address"
                         align="center"
                         width="150"
                         label="标题">
        </el-table-column>
        <el-table-column prop="date"
                         align="center"
                         label="数量"
                         width="60">
        </el-table-column>
        <el-table-column prop="name"
                         align="center"
                         label="备注"
                         width="100">
        </el-table-column>
        <el-table-column align="center"
                         prop="address"
                         label="客户姓名">
        </el-table-column>
        <el-table-column align="center"
                         prop="date"
                         label="销售账号"
                         width="100">
        </el-table-column>
        <el-table-column prop="name"
                         align="center"
                         label="成交价格"
                         width="100">
        </el-table-column>
        <el-table-column align="center"
                         prop="address"
                         label="转单号">
        </el-table-column>
        <el-table-column prop="date"
                         align="center"
                         label="原单号"
                         width="100">
        </el-table-column>
        <el-table-column prop="name"
                         align="center"
                         label="状态"
                         width="100">
        </el-table-column>
        <el-table-column fixed="right"
                         align="center"
                         prop="name"
                         label="操作"
                         width="120">
          <template>
            <el-button type="text">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination-area">
      <el-pagination :current-page="listParams.current"
                     :page-sizes="pageSizeArr"
                     :page-size="listParams.size"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="total"
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
    handleSelectionChange (val) {
      console.log(val)
    },
    cellStyleFn ({ columnIndex }) {
      if (columnIndex === 2) {
        return 'color: #F56C6C'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
