<template>
  <div>
    <el-form>
      <el-form-item>
        <el-input v-model="user.username" placeholder="请输入用户名" prefix-icon="icon-user"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="user.encryptPassword" placeholder="请输入密码" prefix-icon="icon-lock"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="user.password" placeholder="请再输入一次密码" prefix-icon="icon-lock"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="user.email" placeholder="请输入邮箱" prefix-icon="icon-envelop"></el-input>
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button @click="changeLoginVisible">取 消</el-button>
      <el-button type="primary" @click="register">注 册</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  props: ['register_form_visible_prop'],
  data: function () {
    return {
      user: {username: '', encryptPassword: '', password: '', email: ''}
    }
  },
  methods: {
    register: function () {
      var _this = this
      if (this.user.encryptPassword !== this.user.password) {
        this.$message.error('密码不一致')
        return
      }
      this.$axios({
        method: 'POST',
        url: '/api/user',
        data: {'username': this.user.username, 'encryptPassword': this.user.encryptPassword, 'email': this.user.email}
      })
        .then(function (response) {
          if (response.data.version === 0) {
            _this.message('注册成功')
          } else {
            _this.$message.error('注册失败')
          }
        })
      this.$emit('register_visible_false', false)
    },
    changeLoginVisible: function () {
      this.$emit('register_visible_false', false)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
