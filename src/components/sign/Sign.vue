<template>
  <el-container>
    <el-header>
      <Header :userId_prop="user.userId"></Header>
    </el-header>
    <el-main>
      <CourseHeader :courseId_prop="course.courseId" :chooseCourseId_prop="course.chooseCourseId" :userId_prop="user.userId"></CourseHeader>
      <SignIn v-show="!ownFlag" :chooseCourseId_prop="course.chooseCourseId"></SignIn>
      <SignRelease v-show="ownFlag" :chooseCourseId_prop="course.chooseCourseId"></SignRelease>
      <SignTable :chooseCourseId_prop="course.chooseCourseId"></SignTable>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script>
import Header from '../common/Header'
import CourseHeader from '../course/CourseHeader'
import Footer from '../common/Footer'
import SignRelease from './SignRelease'
import SignIn from './SignIn'
import SignTable from './SignTable'

export default {
  name: 'Sign',
  components: {SignTable, SignIn, SignRelease, Footer, CourseHeader, Header},
  data: function () {
    return {
      user: {userId: this.$route.query.userId},
      course: {courseId: this.$route.query.courseId, chooseCourseId: this.$route.query.chooseCourseId},
      ownFlag: false
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
        if (response.data.ownUserId === _this.userId) {
          _this.ownFlag = true
        }
      })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
