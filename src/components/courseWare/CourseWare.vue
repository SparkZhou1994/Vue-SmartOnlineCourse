<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <CourseHeader></CourseHeader>
      <el-row>
        <el-col>
          <el-button type="primary" v-show="user.own" @click="course_ware_upload_form_visible = true">上传课件</el-button>
        </el-col>
      </el-row>
      <CourseWareTable></CourseWareTable>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
    <el-dialog title="上传课件" :visible.sync="course_ware_upload_form_visible">
      <CourseWareUpload :course_ware_upload_form_visible_prop="course_ware_upload_form_visible" v-on:course_ware_upload_visible_false="changeCourseWareUploadVisibleFalse($event)"></CourseWareUpload>
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
      user: {own: true},
      course_ware_upload_form_visible: false
    }
  },
  methods: {
    changeCourseWareUploadVisibleFalse (msg) {
      this.course_ware_upload_form_visible = msg
    }
  }
}
</script>

<style scoped>

</style>
