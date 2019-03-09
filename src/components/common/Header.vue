<template>
  <el-row>
    <el-col :xs="24" :sm="12" class="hidden-xs-only">
      <el-menu mode="horizontal">
        <el-menu-item >
          <a href="#"><img src="../../assets/image/logo.png" height="60"></a>
        </el-menu-item>
        <el-menu-item>
          <a>智能班课</a>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :xs="24" :sm="12">
      <el-menu mode="horizontal">
        <el-menu-item index="1">
          <router-link :to="{name: 'CoursePackage', params: {user: this.user}}">
            <a href="#"><i class="icon-library"></i>课程包</a>
          </router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link :to="{name: 'MyIndex', params: {user: this.user}}">
            <a href="#"><i class="icon-book"></i>我的课程</a>
          </router-link>
        </el-menu-item>
        <el-menu-item index="3" class="hidden-sm-and-down">
          <router-link :to="{name: 'MyInfor', params: {user: this.user}}">
            <a>
              <img src="../../assets/image/user/default.png" height="60"/>
            </a>
          </router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{name: 'MyInfor', params: {user: this.user}}">
            <a>Spark</a>
          </router-link>
        </el-menu-item>
        <el-menu-item >
          <a>退出</a>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Header',
  props: ['user_prop'],
  data: function () {
    return {
      user: this.user_prop
    }
  },
  mounted: function () {
    var _this = this
    _this.user = _this.user_prop
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  a:hover
    text-decoration none
</style>
