<template>
  <div>
    <el-form>
      <el-form-item>
        <el-input placeholder="请输入邮箱" prefix-icon="icon-envelop"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请输入密码" prefix-icon="icon-lock"></el-input>
      </el-form-item>
    </el-form>
    <a @click="registerFormVisible = true"><h5>注册账号</h5></a>
    <div class="dialog-footer">
      <el-button @click="changeLoginVisible">取 消</el-button>
      <el-button type="primary" @click="changeLoginVisible">登录</el-button>
    </div>
    <el-dialog title="注册" :visible.sync="registerFormVisible">
      <Register :registerFormVisibleProp="registerFormVisible" v-on:registerVisibleFalse="changeRegisterVisibleFalse($event)"></Register>
    </el-dialog>
  </div>
</template>

<script>
import Register from './Register'
export default {
  name: 'Login',
  components: {Register},
  props: ['loginFormVisibleProp'],
  data: function () {
    return {
      registerFormVisible: false
    }
  },
  methods: {
    changeLoginVisible: function () {
      this.$emit('loginVisibleFalse', false)
    },
    changeRegisterVisibleFalse (msg) {
      this.registerFormVisible = msg
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
