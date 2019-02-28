<template>
<el-row class="course-header">
  <el-col :xs="4" :sm="4">
    <img src="../../assets/image/user/default.png" class="img-responseive img-thumbnail"/>
  </el-col>
  <el-col :xs="16" :sm="12">
    <h3 class="text-left">Java</h3>
    <h5 class="text-left">Spark</h5>
    <ul class="text-left">
      <li><a>课件</a></li>
      <li><a>作业</a></li>
      <li><a>讨论/投票</a></li>
      <li><a>消息</a></li>
      <li><a>签到</a></li>
    </ul>
  </el-col>
  <el-col xs="4" :sm="8" class="text-left"><h3 class="avg-score">90</h3></el-col>
</el-row>
</template>

<script>
export default {
  name: 'CourseHeader'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .course-header
    background url("../../assets/image/course/header_background.jpg") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  li
    display inline-block
  .avg-score:before
    content '评分:'
</style>
