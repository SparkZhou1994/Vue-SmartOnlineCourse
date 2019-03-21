<template>
  <el-container>
    <el-header>
      <Header :userId_prop="user.userId"></Header>
    </el-header>
    <el-main>
      <CourseHeader :courseId_prop="course.courseId" :chooseCourseId_prop="course.chooseCourseId" :userId_prop="user.userId"></CourseHeader>
      <el-row>
        <el-col>
          <el-button v-show="ownFlag" type="primary" @click="course_ware_upload_form_visible = true">上传课件</el-button>
        </el-col>
      </el-row>
      <CourseWareTable :courseId_prop="course.courseId"></CourseWareTable>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
    <el-dialog title="上传课件" :visible.sync="course_ware_upload_form_visible">
      <CourseWareUpload :courseId_prop="course.courseId" :course_ware_upload_form_visible_prop="course_ware_upload_form_visible" v-on:course_ware_upload_visible_false="changeCourseWareUploadVisibleFalse($event)"></CourseWareUpload>
    </el-dialog>
  </el-container>
</template>

<script>
import Header from '../common/Header'
import CourseHeader from '../course/CourseHeader'
import Footer from '../common/Footer'
import CourseWareTable from '../courseWare/CourseWareTable'
import CourseWareUpload from './CourseWareUpload'

export default {
  name: 'CourseWare',
  components: {CourseWareUpload, CourseWareTable, Footer, CourseHeader, Header},
  data: function () {
    return {
      user: {userId: this.$route.query.userId},
      course: {courseId: this.$route.query.courseId, chooseCourseId: this.$route.query.chooseCourseId},
      ownFlag: false,
      course_ware_upload_form_visible: false,
      courseWareList: []
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
    changeCourseWareUploadVisibleFalse (msg) {
      this.course_ware_upload_form_visible = msg
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
