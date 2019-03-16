<template>
  <el-container>
    <el-header>
      <Header :user_prop="user"></Header>
    </el-header>
    <el-main>
      <CourseHeader :course_prop="course" :user_prop="user"></CourseHeader>
      <SignIn v-show="!ownFlag" :course_prop="course"></SignIn>
      <SignRelease v-show="ownFlag" :course_prop="course"></SignRelease>
      <SignTable :sign_list_prop="signList"></SignTable>
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
      user: {},
      course: {},
      signList: [],
      own: false,
      userId: this.$router.query.userId,
      courseId: this.$router.query.courseId,
      chooseCourseId: this.$router.query.chooseCourseId,
      ownFlag: false
    }
  },
  mounted: function () {
    var _this = this
    _this.userId = _this.$route.query.userId
    _this.courseId = _this.$route.query.courseId
    _this.chooseCourseId = _this.$route.query.chooseCourseId
    /*    if (_this.$route.params.user != null) {
      _this.user = _this.$route.params.user
    } else { */
    this.$axios({
      method: 'GET',
      url: '/api/user/' + _this.userId,
      data: {}
    })
      .then(function (response) {
        _this.user = response.data
      })
    /*    }
    if (_this.$route.params.course != null) {
      _this.course = _this.$route.params.course
    } else { */
    this.$axios({
      method: 'GET',
      url: '/api/chooseCourse/userId/' + _this.userId,
      data: {}
    })
      .then(function (response) {
        _this.course = response.data
        if (response.data.ownUserId === _this.userId) {
          _this.ownFlag = true
        }
      })
    /* } */
    _this.getSignList(_this.$route.query.chooseCourseId)
  },
  methods: {
    getSignList: function (chooseCourseId) {
      var _this = this
      this.$axios({
        method: 'GET',
        url: '/api/sign/' + chooseCourseId + '/0/5',
        data: {}
      })
        .then(function (response) {
          _this.signList = response.data
        })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
