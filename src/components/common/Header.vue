<template>
  <el-row>
    <el-col :xs="24" :sm="12" class="hidden-xs-only">
      <el-menu mode="horizontal">
        <el-menu-item >
          <a href="#"><img src="../../assets/image/logo.png" height="60"></a>
        </el-menu-item>
        <el-menu-item>
          <a>共享班课</a>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :xs="24" :sm="12">
      <el-menu mode="horizontal">
        <el-menu-item index="1">
          <router-link :to="{name: 'CoursePackage', query: {userId: this.user.userId}}">
            <a href="#"><i class="icon-library"></i>课程包</a>
          </router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link :to="{name: 'MyIndex', query: {userId: this.user.userId}}">
            <a href="#"><i class="icon-book"></i>我的课程</a>
          </router-link>
        </el-menu-item>
        <el-menu-item index="3" class="hidden-sm-and-down">
          <router-link :to="{name: 'MyInfor', query: {userId: this.user.userId}}">
            <a>
              <img :src="user.avatar" height="60"/>
            </a>
          </router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{name: 'MyInfor', query: {userId: this.user.userId}}">
            <a>{{user.username}}</a>
          </router-link>
        </el-menu-item>
        <el-menu-item >
          <router-link :to="{name: 'Index'}">
            <a>退出</a>
          </router-link>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Header',
  props: ['userId_prop'],
  data: function () {
    return {
      user: {userId: this.userId_prop}
    }
  },
  created: function () {
    var _this = this
    _this.user.userId = _this.userId_prop
    this.$axios({
      method: 'GET',
      url: '/api/user/' + _this.user.userId,
      data: {}
    })
      .then(function (response) {
        _this.user = response.data
      })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  a:hover
    text-decoration none
</style>
