<template>
  <el-dialog title="商品编辑"
             :visible.sync="modalVisible"
             width="50%"
             @open="open"
             @close="close">
    <el-form :model="form"
             label-width="100px"
             :rules="rules"
             label-suffix=":">
      <el-row :gutter="16">
        <el-col :span="12">
          <el-form-item label="名称"
                        prop="name">
            <el-input v-model="form.name"
                      :rows="3"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="货号"
                        prop="no">
            <el-input v-model="form.no"
                      :rows="3"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="分类">
            <el-select v-model="form.type"
                       placeholder="请选择">
              <el-option v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="采购员">
            <el-select v-model="form.type"
                       placeholder="请选择">
              <el-option v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="产品开发">
            <el-select v-model="form.type"
                       placeholder="请选择">
              <el-option v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="库存预警">
            <el-input-number class="full-width"
                             v-model="form.warning"></el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="仓库">
            <el-select v-model="form.type"
                       placeholder="请选择">
              <el-option v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="发货方式">
            <el-select v-model="form.type"
                       placeholder="请选择">
              <el-option v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="采购价格">
            <el-input-number class="full-width"
                             v-model="form.warning"></el-input-number>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="供应商">
            <el-input v-model="form.name"
                      :rows="3"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="发货地">
            <el-select v-model="form.type"
                       placeholder="请选择">
              <el-option v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="库存状态">
            <el-select v-model="form.type"
                       placeholder="请选择">
              <el-option v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="采购链接">
            <el-input v-model="form.name"
                      :rows="3"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="创建产品时间">
            <el-date-picker v-model="form.date"
                            type="date"
                            style="width: 100%"
                            placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="状态">
            <el-radio v-model="form.isOpen"
                      label="1">启用</el-radio>
            <el-radio v-model="form.isOpen"
                      label="2">停用</el-radio>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <span slot="footer"
          class="dialog-footer">
      <el-button type="primary"
                 @click="modalVisible = false">提交</el-button>
      <el-button @click="close">取消</el-button>
    </span>
  </el-dialog>
</template>
<script>
import modalMixins from '@/mixins/modalMixins'
export default {
  mixins: [modalMixins],
  data: () => ({
    form: {
      isOpen: '1'
    },
    options: [],
    rules: {
      name: [{ required: true, message: '请输入商品名称' }],
      no: [{ required: true, message: '请输入商品货号' }]
    }
  }),
  computed: {
  },
  methods: {
  }
}
</script>
