<template>
  <el-dialog
  title="库存盘点"
  :visible.sync="modalVisible"
  width="30%"
  @open="open"
  @close="close"
  >
    <el-form :model="form" label-width="100px" label-suffix=":">
    <el-form-item label="仓库">
      中国仓库
    </el-form-item>
    <el-form-item label="商品">
      沙发
    </el-form-item>
        <el-form-item label="当前库存">
          10
    </el-form-item>
    <el-form-item label="盘点数量">
      <el-input-number :precision="0" :min="0"></el-input-number>
    </el-form-item>
    <el-form-item label="备注">
      <el-input v-model="form.name" type="textarea" :rows="3"></el-input>
    </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="modalVisible = false">盘点</el-button>
    <el-button @click="close">取消</el-button>
  </span>
</el-dialog>
</template>
<script>
import modalMixins from '@/mixins/modalMixins'
export default {
  mixins: [modalMixins],
  data: () => ({
  }),
  computed: {
  },
  methods: {
  }
}
</script>
