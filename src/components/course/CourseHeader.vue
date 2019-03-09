<template>
<el-row class="course-header">
  <el-col :xs="4" :sm="4">
    <img src="../../assets/image/user/default.png" class="img-responseive img-thumbnail"/>
  </el-col>
  <el-col :xs="16" :sm="12">
    <h3 class="text-left">{{course.courseName}}</h3>
    <h5 class="text-left">{{course.ownerUsername}}</h5>
    <ul class="text-left">
      <router-link :to="{name: 'CourseWare', params: {user: this.user, course: this.course}}">
        <li><a>课件</a></li>
      </router-link>
      <router-link :to="{name: 'Homework', params: {user: this.user, course: this.course}}">
        <li><a>作业</a></li>
      </router-link>
      <router-link :to="{name: 'Discuss', params: {user: this.user, course: this.course}}">
        <li><a>讨论/投票</a></li>
      </router-link>
      <router-link :to="{name: 'Message', params: {user: this.user, course: this.course}}">
        <li><a>消息</a></li>
      </router-link>
      <router-link :to="{name: 'Sign', params: {user: this.user, course: this.course}}">
        <li><a>签到</a></li>
      </router-link>
    </ul>
  </el-col>
  <el-col xs="4" :sm="8" class="text-left"><h3 class="avg-score">90</h3></el-col>
</el-row>
</template>

<script>
export default {
  name: 'CourseHeader',
  props: ['course_prop', 'user_prop'],
  data: function () {
    return {
      course: this.course_prop,
      user: this.user_prop
    }
  },
  mounted: function () {
    var _this = this
    _this.course = _this.course_prop
    _this.user = _this.user_prop
  }
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
