<template>
  <el-container>
    <el-header>
      <Header :userId_prop="user.userId"></Header>
    </el-header>
    <el-main>
      <CourseHeader :courseId_prop="course.courseId" :chooseCourseId_prop="course.chooseCourseId" :userId_prop="user.userId"></CourseHeader>
      <el-row>
        <el-col>
          <el-button type="primary" v-show="ownFlag" @click="homework_create_form_visible = true">作业创建</el-button>
        </el-col>
      </el-row>
      <HomeworkTable :userId_prop="user.userId" :courseId_prop="course.courseId" :chooseCourseId_prop="course.chooseCourseId"></HomeworkTable>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
    <el-dialog title="作业创建" :visible.sync="homework_create_form_visible">
      <HomeworkCreate :chooseCourseId_prop="course.chooseCourseId" :homework_create_form_visible_prop="homework_create_form_visible" v-on:homework_create_visible_false="changeHomeworkCreateVisibleFalse($event)"></HomeworkCreate>
    </el-dialog>
  </el-container>
</template>

<script>
import Header from '../common/Header'
import CourseHeader from '../course/CourseHeader'
import Footer from '../common/Footer'
import HomeworkTable from '../homework/HomeworkTable'
import HomeworkCreate from '../homework/HomeworkCreate'

export default {
  name: 'Homework',
  components: {HomeworkCreate, HomeworkTable, Header, CourseHeader, Footer},
  data: function () {
    return {
      user: {userId: this.$route.query.userId},
      course: {courseId: this.$route.query.courseId, chooseCourseId: this.$route.query.chooseCourseId},
      ownFlag: false,
      homework_create_form_visible: false
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
        if (response.data.ownerUserId === response.data.userId) {
          _this.ownFlag = true
        }
      })
  },
  methods: {
    changeHomeworkCreateVisibleFalse (msg) {
      this.homework_create_form_visible = msg
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
