<template>
  <div>
    <el-form>
      <el-form-item>
        <el-input placeholder="请输入签到验证码" prefix-icon="icon-envelop"></el-input>
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button type="primary" @click="changeLoginVisible">签 到</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn'
}
</script>

<style scoped>

</style>
