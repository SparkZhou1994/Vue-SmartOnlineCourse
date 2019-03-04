<template>
  <div>
    <el-form>
      <el-form-item>
        <el-input placeholder="请输入签到验证码" prefix-icon="icon-barcode"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请输入签到有效时间（分钟）" prefix-icon="icon-clock"></el-input>
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button type="primary" @click="changeLoginVisible">创 建</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReleaseSign'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
