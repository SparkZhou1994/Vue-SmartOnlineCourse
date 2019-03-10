<template>
  <el-container>
    <el-header>
      <Header :user_prop="user"></Header>
    </el-header>
    <el-main>
      <CourseHeader :course_prop="course" :user_prop="user"></CourseHeader>
      <el-table :data="messageList" style="width: 100%" max-height="250" v-if="messageList.length > 0">
        <el-table-column prop="content" label="内容" width="150">
        </el-table-column>
        <el-table-column prop="publishData" label="发布时间" width="150">
        </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="deleteClick(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
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
export default {
  name: 'Message',
  components: {Header, CourseHeader, Footer},
  data: function () {
    return {
      messageList: [
      ],
      user: this.$route.params.user,
      course: this.$route.params.course
    }
  },
  mounted: function () {
    var _this = this
    _this.user = _this.$route.params.user
    _this.course = _this.$route.params.course
    _this.getMessageList(_this.course.chooseCourseId)
  },
  methods: {
    deleteClick: function (row) {
      var _this = this
      _this.$axios({
        method: 'DELETE',
        url: '/api/message/' + row.chooseCourseId,
        data: {}
      })
        .then(function (response) {
          if (response.status === 200) {
            _this.$message('删除成功')
          } else {
            _this.$message.error('删除失败')
          }
        })
    },
    getMessageList: function (chooseCourseId) {
      var _this = this
      this.$axios({
        method: 'GET',
        url: '/api/message/' + chooseCourseId + '/0/5',
        data: {}
      })
        .then(function (response) {
          _this.messageList = response.data
        })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
