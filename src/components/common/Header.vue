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
          <a href="#"><i class="icon-library"></i>课程包</a>
        </el-menu-item>
        <el-menu-item index="2">
          <a href="#"><i class="icon-book"></i>我的课程</a>
        </el-menu-item>
        <el-menu-item index="3" class="hidden-sm-and-down">
          <a>
            <img src="../../assets/image/user/default.png" height="60"/>
          </a>
        </el-menu-item>
        <el-menu-item>
          <a>Spark</a>
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
  name: 'Header'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
