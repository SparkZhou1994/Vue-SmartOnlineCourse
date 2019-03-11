<template>
  <el-container>
    <el-header>
      <Header :user_prop="user"></Header>
    </el-header>
    <el-main>
      <CourseHeader :course_prop="course" :user_prop="user"></CourseHeader>
      <el-row>
        <el-col>
          <el-button type="primary" v-show="ownFlag" @click="homework_create_form_visible = true">作业创建</el-button>
        </el-col>
      </el-row>
      <HomeworkTable v-if="homeworkList.length > 0" :homework_list_prop="homeworkList"></HomeworkTable>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
    <el-dialog title="作业创建" :visible.sync="homework_create_form_visible">
      <HomeworkCreate :course_prop="course" :homework_create_form_visible_prop="homework_create_form_visible" v-on:homework_create_visible_false="changeHomeworkCreateVisibleFalse($event)"></HomeworkCreate>
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
      user: this.$route.params.user,
      course: this.$route.params.course,
      own: false,
      homeworkList: [],
      homework_create_form_visible: false
    }
  },
  mounted: function () {
    var _this = this
    _this.user = _this.$route.params.user
    _this.course = _this.$route.params.course
    _this.getHomeworkList(_this.course.chooseCourseId)
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
  methods: {
    changeHomeworkCreateVisibleFalse (msg) {
      this.homework_create_form_visible = msg
    },
    getHomeworkList: function (chooseCourseId) {
      var _this = this
      this.$axios({
        method: 'GET',
        url: '/api/homework/' + chooseCourseId + '/0/5',
        data: {}
      })
        .then(function (response) {
          _this.homeworkList = response.data
        })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
