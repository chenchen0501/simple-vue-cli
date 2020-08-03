<template>
  <div>
    <el-form ref="form"
             :model="form"
             label-width="80px"
             label-suffix=":">
      <el-row :gutter="16">
        <el-col :span="6">
          <el-form-item label="仓库">
            <el-input v-model="listQuery.name"
                      placeholder="请输入商品名称、货号"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="商品">
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
          <el-form-item label="分类">
            <el-select v-model="listQuery.region"
                       placeholder="请选择采购员">
              <el-option label="区域一"
                         value="shanghai"></el-option>
              <el-option label="区域二"
                         value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="库存">
            <el-select v-model="listQuery.region"
                       placeholder="请选择产品开发">
              <el-option label="区域一"
                         value="shanghai"></el-option>
              <el-option label="区域二"
                         value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item>
            <el-checkbox v-model="listQuery.noStore">过滤无库存</el-checkbox>
            <el-checkbox v-model="listQuery.storeWarning">库存预警</el-checkbox>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="table-op">
      <div>
        <el-button type="primary">打印</el-button>
        <el-button type="primary">导出</el-button>
        <el-button type="primary"
                   @click="isShowRes = !isShowRes">{{ isShowRes ? '收起' : '显示' }}统计数据</el-button>
      </div>
      <div>
        <el-button type="primary"
                   @click="handleFilter">查询</el-button>
        <el-button @click="reset">重置</el-button>
      </div>
    </div>
    <div class="table-area">
      <transition name="fade">
        <h3 v-if="isShowRes"
            class="gather-data">当前汇总结果：共有<span>3</span>个仓库， 库存总数量<span>53</span>， 库存总成本<span>100</span></h3>
      </transition>
      <el-table v-loading="tableLoading"
                border
                :data="tableData">
        <el-table-column prop="address"
                         align="center"
                         label="名称">
        </el-table-column>

        <el-table-column prop="name"
                         align="center"
                         label="货号">
        </el-table-column>
        <el-table-column prop="date"
                         align="center"
                         label="图片">
        </el-table-column>
        <el-table-column align="center"
                         prop="address"
                         label="分类">
        </el-table-column>
        <el-table-column align="center"
                         prop="date"
                         label="仓库">
        </el-table-column>
        <el-table-column prop="name"
                         align="center"
                         label="当前库存">
        </el-table-column>
        <el-table-column align="center"
                         prop="address"
                         label="库存盘点">
          <template slot-scope="scope">
            <i class="el-icon-link iconFont"
               @click="check(scope)"></i>
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
    <checkMoal :visible="visible"
               @close="visible = false" />
  </div>
</template>
<script>
import tableMixins from '@/mixins/tableMixins'
import checkMoal from './checkModal'
export default {
  components: { checkMoal },
  mixins: [tableMixins],
  data: () => ({
    isShowRes: true,
    visible: false,
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
    check () {
      this.visible = true
    }
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
