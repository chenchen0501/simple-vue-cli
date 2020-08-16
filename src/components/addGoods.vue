<template>
  <el-dialog :title="`商品${goodId ? '编辑' : '新增'}`"
             :visible.sync="modalVisible"
             width="50%"
             :close-on-click-modal="false"
             top="5vh"
             @open="open"
             @close="close">
    <el-form :model="form"
             ref="form"
             label-width="100px"
             :rules="rules"
             label-suffix=":">
      <el-row :gutter="16">
        <el-col :span="12">
          <el-form-item label="名称"
                        prop="goodsName">
            <el-input v-model="form.goodsName"
                      placeholder="请输入商品名称"
                      :rows="3"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="货号"
                        prop="goodsCode">
            <el-input v-model="form.goodsCode"
                      placeholder="请输入商品货号"
                      :rows="3"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="分类">
            <el-select v-model="form.goodsTypeId"
                       placeholder="请选择商品分类">
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
            <el-select v-model="form.operatorId"
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
            <el-select v-model="form.developerId"
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
          <el-form-item label="库存预警下限"
                        class="redLabel">
            <el-input-number class="full-width"
                             v-model="form.stockWarning"></el-input-number>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="发货方式">
            <el-select v-model="form.deliveryId"
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
                             v-model="form.purchasePrice"></el-input-number>
          </el-form-item>
        </el-col>
        
        <el-col :span="12">
          <el-form-item label="供应商">
            <el-input v-model="form.supplierName"
                      placeholder="请输入供应商"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="库存状态">
            <el-select v-model="form.stockState"
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
            <el-input v-model="form.purchaseUrl"
                      placeholder="请输入采购链接"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="状态">
            <el-radio v-model="form.status"
                      :label="1">启用</el-radio>
            <el-radio v-model="form.status"
                      :label="2">停用</el-radio>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="商品图片">
            <!-- todo -->
            <el-upload class="avatar-uploader"
                       action="https://jsonplaceholder.typicode.com/posts/"
                       :show-file-list="false"
                       :on-success="handleAvatarSuccess"
                       :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl"
                   :src="imageUrl"
                   class="avatar">
              <i v-else
                 class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <span slot="footer"
          class="dialog-footer">
      <el-button type="primary"
                 @click="continueAdd"
                 v-loading="loading">继续添加</el-button>
      <el-button type="primary"
                 @click="submit"
                 v-loading="loading">提交</el-button>
      <el-button @click="close">取消</el-button>
    </span>
  </el-dialog>
</template>
<script>
import modalMixins from '@/mixins/modalMixins'
import api from '@/api'

export default {
  props: {
    goodId: {
      type: String,
      default: () => ''
    }
  },
  mixins: [modalMixins],
  data: () => ({
    loading: false,
    imageUrl: '',
    form: {
      isOpen: '1',
      price: 0,
      num: 0
    },
    options: [],
    rules: {
      goodsName: [{ required: true, message: '请输入商品名称' }],
      goodsCode: [{ required: true, message: '请输入商品货号' }]
    }
  }),
  computed: {
  },
  methods: {
    continueAdd () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          api.addGood(this.form).then(() => {
            this.$message.success(`${goodId ? '编辑' : '新增'}商品成功`)
            this.form = {}
          }).finally(() => {
            this.loading = false
          })
        }
      })
    },
    submit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          api.addGood(this.form).then(() => {
            this.$message.success(`${goodId ? '编辑' : '新增'}商品成功`)
            this.close()
          }).finally(() => {
            this.loading = false
          })
        }
      })
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  }
}
</script>
<style lang="scss" scoped>
.avatar-uploader /deep/ .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 70px;
  height: 70px;
  line-height: 70px;
  text-align: center;
}
.avatar {
  width: 70px;
  height: 70px;
  display: block;
}
</style>