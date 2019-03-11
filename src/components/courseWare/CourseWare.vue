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
      user: this.$route.params.user,
      course: this.$route.params.course,
      course_ware_upload_form_visible: false,
      own: false,
      courseWareList: []
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
    _this.getCourseWareList(_this.course.courseId)
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
