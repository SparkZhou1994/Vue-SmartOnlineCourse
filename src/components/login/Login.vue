<template>
  <div>
    <el-form>
      <el-form-item>
        <el-input v-model="user.username" placeholder="请输入邮箱" prefix-icon="icon-envelop"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="user.password" placeholder="请输入密码" prefix-icon="icon-lock"></el-input>
      </el-form-item>
      <el-row>
        <el-col :xs="12" :sm="12">
          <el-input v-model="user.imageCode" placeholder="请输入验证码"></el-input>
        </el-col>
        <el-col :xs="12" :sm="12">
          <img src="http://127.0.0.1:8090/code/image">
        </el-col>
      </el-row>
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
      user: {username: 'zhoujuhui@qq.com', password: '11111111', imageCode: ''},
      register_form_visible: false
    }
  },
  methods: {
    changeLoginVisible: function () {
      this.$axios({
        method: 'POST',
        url: '/api/authentication/form',
        data: this.$qs.stringify({username: this.user.username, password: this.user.password, imageCode: this.user.imageCode}),
        /*        param: {'username': this.user.username, 'password': this.user.password, 'imageCode': this.user.imageCode},
        transformRequest: [function (data) {
          $qs.stringify
          return data
        }], */
        headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
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
