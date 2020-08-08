<template>
  <div>
    <div class="header-btn">
      <el-button type="primary">扫码</el-button>
      <el-button type="primary">复制为新增</el-button>
    </div>
    <el-form ref="form"
             :model="form"
             :rules="rules"
             label-width="80px"
             label-suffix=":">
      <el-row :gutter="16">
        <el-col :span="6">
          <el-form-item label="供应商"
                        prop="provider">
            <el-select v-model="form.provider"
                       placeholder="请选择供应商">
              <el-option v-for="item in statusArr"
                         :key="item.vlaue"
                         :label="item.label"
                         :value="item.value" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="仓库"
                        prop="store">
            <el-select v-model="form.store"
                       placeholder="请选择仓库">
              <el-option v-for="item in statusArr"
                         :key="item.vlaue"
                         :label="item.label"
                         :value="item.value" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="日期"
                        prop="date">
            <el-date-picker v-model="form.date"
                            style="width: 100%"
                            type="datetimerange"
                            clearable
                            value-format="yyyy-MM-dd"
                            format="yyyy-MM-dd"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期" />
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
        <el-button type="primary"
                   @click="add">
          新增一条
        </el-button>
      </div>
      <div />
    </div>
    <div class="table-area">
      <el-table border
                show-summary
                :summary-method="getSummaries"
                :data="tableData"
                height="300"
                @selection-change="handleSelectionChange">
        <el-table-column label="序号"
                         align="center"
                         type="index"
                         fixed="left"
                         width="50" />
        <el-table-column label="操作"
                         align="center"
                         fixed="left"
                         width="50">
          <template slot-scope="scope">
            <i class="el-icon-delete del-class"
               @click="del(scope.$index)" />
          </template>
        </el-table-column>
        <el-table-column prop="address"
                         align="center"
                         label="商品">
          <template>
            <el-button type="text">点击选择</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="name"
                         align="center"
                         label="货号" />
        <el-table-column prop="date"
                         align="center"
                         label="图片" />
        <el-table-column prop="num"
                         align="center"
                         label="数量">
          <template slot-scope="scope">
            <el-input-number v-model="scope.row.num"
                             @change="numChange($event, scope.row)"
                             :step="1"
                             :precision="0"
                             :min="0" />
          </template>
        </el-table-column>
        <el-table-column prop="date"
                         align="center"
                         label="当前库存" />
        <el-table-column prop="price"
                         align="center"
                         label="单价">
          <template slot-scope="scope">
            <el-input-number v-model="scope.row.price"
                             @change="numChange($event, scope.row)"
                             :step="1"
                             :precision="0"
                             :min="0" />
          </template>
        </el-table-column>
        <el-table-column prop="total"
                         align="center"
                         label="金额" />
      </el-table>
      <h3 class="total">
        货款合计：{{ total ? total : 0 }}
      </h3>
    </div>
    <div class="footer-area">
      <el-button type="primary">草稿</el-button>
      <el-button type="primary">采购</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    total: 0,
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
      num: 0,
      price: 0,
      total: 0
    }]
  }),
  watch: {
    tableData: {
      handler (val) {
        this.total = val.reduce((pre, cur) => {
          return cur.total + pre.total
        }, { total: 0 })
      },
      deep: true
    }
  },
  methods: {
    getSummaries ({ columns, data }) {
      const sums = []
      const allNum = data.reduce((pre, cur) => {
        const preNum = isNaN(pre) ? 0 : pre
        return preNum + cur.num
      }, 0)
      const allToal = data.reduce((pre, cur) => {
        const preTotal = isNaN(pre) ? 0 : pre
        return preTotal + cur.total
      }, 0)

      columns.forEach((item, index) => {
        const { property } = item
        if (index === 0) {
          sums[0] = '总计'
        }
        if (property === 'num') {
          sums[index] = allNum
        }
        if (property === 'total') {
          sums[index] = allToal
        }
      })
      return sums
    },
    add () {
      this.tableData.push({
        num: 0,
        price: 0,
        total: 0
      })
    },
    del (index) {
      this.tableData.splice(index, 1)
    },
    handleSelectionChange () { },
    numChange (val, row) {
      const { num = 0, price = 0 } = row
      row.total = num * price
    },
  }
}
</script>
<style lang="scss" scoped>
.total {
  float: right;
  margin-top: 10px;
}
.del-class {
  cursor: pointer;
  color: #f56c6c;
}
.header-btn {
  margin-bottom: 20px;
}
.footer-area {
  text-align: center;
  position: absolute;
  bottom: 10px;
  left: 50%;
  height: 30px;
  background: #fff;
  z-index: 10;
}
</style>
