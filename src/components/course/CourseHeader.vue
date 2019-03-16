<template>
<el-row class="course-header">
  <el-col :xs="4" :sm="4">
    <img :src="course.avatar" class="img-responseive img-thumbnail"/>
  </el-col>
  <el-col :xs="16" :sm="12">
    <h3 class="text-left">{{course.courseName}}</h3>
    <h5 class="text-left">{{course.ownerUsername}}</h5>
    <ul class="text-left">
      <router-link :to="{name: 'CourseWare', query: {userId: this.user.userId, courseId: this.course.courseId, chooseCourseId: this.course.chooseCourseId}}">
        <li><a>课件</a></li>
      </router-link>
      <router-link :to="{name: 'Homework', query: {userId: this.user.userId, courseId: this.course.courseId, chooseCourseId: this.course.chooseCourseId}}">
        <li><a>作业</a></li>
      </router-link>
      <router-link :to="{name: 'Discuss', query: {userId: this.user.userId, courseId: this.course.courseId, chooseCourseId: this.course.chooseCourseId}}">
        <li><a>讨论/投票</a></li>
      </router-link>
      <router-link :to="{name: 'Message', query: {userId: this.user.userId, courseId: this.course.courseId, chooseCourseId: this.course.chooseCourseId}}">
        <li><a>消息</a></li>
      </router-link>
      <router-link :to="{name: 'Sign', query: {userId: this.user.userId, courseId: this.course.courseId, chooseCourseId: this.course.chooseCourseId}}">
        <li><a>签到</a></li>
      </router-link>
    </ul>
  </el-col>
  <el-col xs="4" :sm="8" class="text-left"><h3 class="avg-score">{{course.avgScore}}</h3></el-col>
</el-row>
</template>

<script>
export default {
  name: 'CourseHeader',
  props: ['courseId_prop', 'userId_prop', 'chooseCourseId_prop'],
  data: function () {
    return {
      course: {chooseCourseId: this.chooseCourseId_prop, courseId: this.courseId_prop},
      user: {userId: this.userId_prop}
    }
  },
  created: function () {
    var _this = this
    _this.user.userId = _this.$route.query.userId
    _this.course.courseId = _this.$route.query.courseId
    _this.course.chooseCourseId = _this.$route.query.chooseCourseId
    this.$axios({
      method: 'GET',
      url: '/api/user/' + _this.user.userId,
      data: {}
    })
      .then(function (response) {
        _this.user = response.data
      })
    this.$axios({
      method: 'GET',
      url: '/api/chooseCourse/' + _this.course.chooseCourseId,
      data: {}
    })
      .then(function (response) {
        _this.course = response.data
      })
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
