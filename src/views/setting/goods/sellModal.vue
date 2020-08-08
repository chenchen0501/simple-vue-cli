<template>
  <el-dialog :visible.sync="modalVisible"
             width="80%"
             :close-on-click-modal="false"
             @open="open"
             top="10vh"
             @close="close">
    <template slot="title">
      <el-row :gutter="16"
              class="title-area">
        <el-col :span="12">商品信息</el-col>
        <el-col :span="12">物流信息</el-col>
      </el-row>
    </template>
    <el-form :model="form"
             label-width="100px"
             :rules="rules"
             label-suffix=":">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-row :gutter="16">
            <el-col :span="12">
              <el-form-item label="标题"
                            prop="name">
                商品1
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="数量"
                            class="redLabel"
                            prop="no">
                <el-input-number v-model="form.no"
                                 class="full-width"
                                 :min="0"
                                 :precision="0"></el-input-number>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="销售账号"
                            prop="name">
                <el-input placeholder="请输入销售账号"
                          v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="销售金额"
                            prop="no">
                <el-input-number :min="0"
                                 :controls="false"
                                 class="full-width"
                                 v-model="form.no"></el-input-number>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="商品分类"
                            prop="name">
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
              <el-form-item label="虎牙ID"
                            prop="no">
                <el-input placeholder="请输入虎牙ID"
                          v-model="form.no"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="交易编号"
                            prop="name">
                <el-input placeholder="请输入交易编号"
                          v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="平台"
                            prop="no">
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
              <el-form-item label="订单状态"
                            prop="name">
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
              <el-form-item label="物流方式"
                            prop="no">
                <el-radio v-model="form.isOpen"
                          label="1">中通</el-radio>
                <el-radio v-model="form.isOpen"
                          label="2">顺丰</el-radio>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="建单时间"
                            prop="name">
                <el-date-picker v-model="form.date"
                                type="date"
                                value-format="yyyy-MM-dd"
                                format="yyyy-MM-dd"
                                style="width: 100%"
                                clearable
                                placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="付款时间"
                            prop="no">
                <el-date-picker v-model="form.date"
                                type="date"
                                format="yyyy-MM-dd"
                                style="width: 100%"
                                clearable
                                placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="发货时间"
                            prop="name">
                <el-date-picker v-model="form.date"
                                type="date"
                                format="yyyy-MM-dd"
                                style="width: 100%"
                                clearable
                                placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="客服"
                            prop="no">
                <el-input placeholder="请输入客服"
                          v-model="form.no"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="产品开发"
                            prop="name">
                <el-input placeholder="请输入产品开发"
                          v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="备注"
                            prop="no">
                <el-input type="textarea"
                          :rows="3"
                          placeholder="请输入备注"
                          v-model="form.no"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
        <div class="line"></div>
        <el-col :span="12">
          <el-row :gutter="16">
            <el-col :span="12">
              <el-form-item label="转单号"
                            prop="name">
                <el-input placeholder="请输入转单号"
                          v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="原单号"
                            prop="no">
                <el-input placeholder="请输入原单号"
                          v-model="form.no"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="重量"
                            prop="name">
                <el-input-number class="full-width"
                                 v-model="form.name"></el-input-number>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="运费"
                            prop="no">
                45
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="收件人"
                            class="redLabel"
                            prop="name">
                <el-input placeholder="请输入收件人"
                          v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="邮编"
                            class="redLabel"
                            prop="no">
                <el-input placeholder="请输入邮编"
                          v-model="form.no"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="地址"
                            class="redLabel"
                            prop="name">
                <el-input placeholder="请输入地址"
                          v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="手机"
                            class="redLabel"
                            prop="no">
                <el-input placeholder="请输入手机号"
                          v-model="form.no"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="片甲名"
                            prop="name">
                <el-input placeholder="请输入片甲名"
                          v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-form>
    <span slot="footer"
          class="dialog-footer">
      <el-button type="primary"
                 @click="modalVisible = false">保存</el-button>
      <el-button @click="close">取消</el-button>
    </span>
  </el-dialog>
</template>
<script>
import modalMixins from '@/mixins/modalMixins'
export default {
  mixins: [modalMixins],
  data: () => ({
    options: [],
    imageUrl: '',
    form: {
      isOpen: '1'
    },
    options: [],
    rules: {
      // name: [{ required: true, message: '请输入商品名称' }],
      // no: [{ required: true, message: '请输入商品货号' }]
    }
  }),
  computed: {
  },
  methods: {
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
.title-area {
  font-weight: bold;
  font-size: 18px;
}
/deep/ .el-dialog {
  position: relative !important;
}

.line {
  width: 1px;
  height: 100%;
  background-color: #dcdfe6;
  position: absolute;
  left: 50%;
}
</style>