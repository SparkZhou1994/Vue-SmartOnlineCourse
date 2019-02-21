<template>
  <el-row align="middle">
    <el-col :xs="4" :sm="2">
      <a href="#"><img class="logo-image" src="../../assets/image/logo.png" height="60"></a>
    </el-col>
    <el-col :xs="20" :sm="22">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"><a href="">首页</a></el-menu-item>
        <el-menu-item index="2"><a href="">关键特征</a></el-menu-item>
        <el-menu-item index="3"><a href="">如何使用</a></el-menu-item>
        <el-menu-item index="4"><a href="">学校服务</a></el-menu-item>
        <el-menu-item index="5"><a href="">用户反馈</a></el-menu-item>
        <el-menu-item index="6"><a href="">登录</a></el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'IndexHeader',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  a:hover
    text-decoration:none
</style>
