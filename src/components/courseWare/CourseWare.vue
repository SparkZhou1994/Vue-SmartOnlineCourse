<template>
  <el-container>
    <el-header>
      <Header :user_prop="user"></Header>
    </el-header>
    <el-main>
      <CourseHeader :course_prop="course" :user_prop="user"></CourseHeader>
      <el-row>
        <el-col>
          <el-button type="primary" v-show="ownFlag" @click="course_ware_upload_form_visible = true">上传课件</el-button>
        </el-col>
      </el-row>
      <CourseWareTable v-if="courseWareList.length > 0" :course_ware_list_prop="courseWareList"></CourseWareTable>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
    <el-dialog title="上传课件" :visible.sync="course_ware_upload_form_visible">
      <CourseWareUpload :course_prop="course" :course_ware_upload_form_visible_prop="course_ware_upload_form_visible" v-on:course_ware_upload_visible_false="changeCourseWareUploadVisibleFalse($event)"></CourseWareUpload>
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
      user: {},
      course: {},
      course_ware_upload_form_visible: false,
      own: false,
      courseWareList: [],
      userId: this.$route.query.userId,
      courseId: this.$route.query.courseId,
      chooseCourseId: this.$route.query.chooseCourseId
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
        _this.course = response.datna
      })
    /* } */
    _this.getCourseWareList(_this.$route.query.courseId)
  },
  methods: {
    changeCourseWareUploadVisibleFalse (msg) {
      this.course_ware_upload_form_visible = msg
    },
    getCourseWareList: function (courseId) {
      var _this = this
      this.$axios({
        method: 'GET',
        url: '/api/courseWare/' + courseId + '/0/5',
        data: {}
      })
        .then(function (response) {
          _this.courseWareList = response.data
        })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
