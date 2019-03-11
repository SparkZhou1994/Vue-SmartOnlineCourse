<template>
  <el-container>
    <el-header>
      <Header :user_prop="user"></Header>
    </el-header>
    <el-main>
      <CourseHeader :course_prop="course" :user_prop="user"></CourseHeader>
      <SignIn v-show="!ownFlag" :course_prop="course"></SignIn>
      <SignRelease v-show="ownFlag" :course_prop="course"></SignRelease>
      <SignTable v-if="signList.length > 0" :sign_list_prop="signList"></SignTable>
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
      user: this.$route.params.user,
      course: this.$route.params.course,
      signList: [],
      own: false
    }
  },
  computed: {
    ownFlag: function () {
      if (this.user.userId === this.course.ownerUserId) {
        return true
      } else {
        return false
      }
    }
  },
  mounted: function () {
    var _this = this
    _this.user = _this.$route.params.user
    _this.course = _this.$route.params.course
    _this.getSignList(_this.course.chooseCourseId)
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
