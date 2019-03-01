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
    <a @click="register_form_visible = true"><h5>注册账号</h5></a>
    <div class="dialog-footer">
      <el-button @click="changeLoginVisible">取 消</el-button>
      <el-button type="primary" @click="changeLoginVisible">登 录</el-button>
    </div>
    <el-dialog title="注册" :visible.sync="register_form_visible">
      <Register :register_form_visible_prop="register_form_visible" v-on:register_visible_false="changeRegisterVisibleFalse($event)"></Register>
    </el-dialog>
  </div>
</template>

<script>
import Register from './Register'
export default {
  name: 'Login',
  components: {Register},
  props: ['login_form_visible_prop'],
  data: function () {
    return {
      register_form_visible: false
    }
  },
  methods: {
    changeLoginVisible: function () {
      this.$emit('login_visible_false', false)
    },
    changeRegisterVisibleFalse (msg) {
      this.register_form_visible = msg
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
