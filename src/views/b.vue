<template>
  <div class="a">
    <el-form ref="form" :model="form" label-width="80px">
      <el-row>
        <el-col :span="8">
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        </el-col>
        <el-col :span="8">
        <el-form-item label="活动区域">
          <el-select v-model="form.region" style="width: 100%" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        </el-col>
      <el-col :span="8">
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        </el-col>  <el-col :span="8">
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        </el-col>  <el-col :span="8">
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="table-op">
      <div>
        <el-button type="primary">新增</el-button>
      </div>
      <div>
        <el-button type="primary">查询</el-button>
        <el-button>重置</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    form: {}
  }),
  methods: {}
}
</script>
