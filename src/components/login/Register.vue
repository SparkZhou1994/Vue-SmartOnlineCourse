<template>
  <div>
    <el-form>
      <el-form-item>
        <el-input placeholder="请输入用户名" prefix-icon="icon-user"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请输入密码" prefix-icon="icon-lock"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请再输入一次密码" prefix-icon="icon-lock"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请输入邮箱" prefix-icon="icon-envelop"></el-input>
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button @click="changeLoginVisible">取 消</el-button>
      <el-button type="primary" @click="changeLoginVisible">注册</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data: function () {
  },
  methods: {
    changeLoginVisible: function () {
      this.$emit('registerVisibleFalse', false)
    }
  }
}
</script>

<style scoped>

</style>
