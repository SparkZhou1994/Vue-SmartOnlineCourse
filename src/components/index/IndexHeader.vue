<template>
  <div>
    <el-row>
      <el-col :xs="4" :sm="2">
        <a href="#"><img src="../../assets/image/logo.png" height="60"></a>
      </el-col>
      <el-col :xs="20" :sm="22">
        <el-menu :default-active="active_index" mode="horizontal">
          <el-menu-item index="1">
            <a href="#">首页</a>
          </el-menu-item>
          <el-menu-item class="hidden-xs-only" index="2">
            <a href="#feature">关键特征</a>
          </el-menu-item>
          <el-menu-item index="3">
            <a href="#guide">如何使用</a>
          </el-menu-item>
          <el-menu-item class="hidden-xs-only" index="4">
            <a href="#service">学校服务</a>
          </el-menu-item>
          <el-menu-item class="hidden-xs-only" index="5">
            <a href="#service">用户反馈</a>
          </el-menu-item>
          <el-menu-item index="6">
              <a @click="login_form_visible = true">登录</a>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <el-dialog title="邮箱密码登录" :visible.sync="login_form_visible">
      <Login :login_form_visible_prop="login_form_visible" v-on:login_visible_false="changeLoginVisibleFalse($event)"></Login>
    </el-dialog>
  </div>
</template>

<script>
import Login from '../login/Login'
export default {
  name: 'IndexHeader',
  components: {Login},
  data () {
    return {
      login_form_visible: false,
      active_index: '1'
    }
  },
  methods: {
    changeLoginVisibleFalse (msg) {
      this.login_form_visible = msg
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  a:hover
    text-decoration:none
</style>
