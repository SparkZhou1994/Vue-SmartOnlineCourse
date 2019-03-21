<template>
  <div>
    <el-table :data="homeworkList" style="width: 100%" max-height="250">
      <el-table-column fixed prop="homeworkId" label="编号" width="150">
      </el-table-column>
      <el-table-column prop="title" label="作业名" width="150">
      </el-table-column>
      <el-table-column prop="attachment" label="文件名" width="150">
      </el-table-column>
      <el-table-column prop="describe" label="描述" width="150">
      </el-table-column>
      <el-table-column prop="batch" label="批次" width="150">
      </el-table-column>
      <el-table-column prop="endTime" label="截止时间" width="150">
      </el-table-column>
      <el-table-column prop="submitTime" label="提交时间" width="150">
      </el-table-column>
      <el-table-column prop="score" label="分数" width="150">
      </el-table-column>
      <el-table-column prop="range" label="状态" width="150">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="homeworkDownload(scope.row)" type="text" size="small">下载</el-button>
          <el-button @click="homeworkUpload(scope.row)" v-show="!ownFlag" type="text" size="small">上传</el-button>
          <el-button @click="homeworkGrade(scope.row)" v-show="ownFlag" type="text" size="small">评分</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="作业上传" :visible.sync="homework_upload_form_visible">
      <HomeworkUpload :homework_prop="homework" :homework_upload_form_visible_prop="homework_upload_form_visible" v-on:homework_upload_visible_false="changeHomeworkUploadVisibleFalse($event)"></HomeworkUpload>
    </el-dialog>
    <el-dialog title="作业评分" :visible.sync="homework_grade_form_visible">
      <HomeworkGrade :homework_prop="homework" :homework_grade_form_visible_prop="homework_grade_form_visible" v-on:homework_grade_visible_false="changeHomeworkGradeVisibleFalse($event)"></HomeworkGrade>
    </el-dialog>
  </div>
</template>

<script>
import HomeworkUpload from '../homework/HomeworkUpload'
import HomeworkGrade from '../homework/HomeworkGrade'

export default {
  name: 'HomeworkTable',
  components: {HomeworkUpload, HomeworkGrade},
  props: ['courseId_prop', 'chooseCourseId_prop', 'userId_prop'],
  data () {
    return {
      homework_upload_form_visible: false,
      homework_grade_form_visible: false,
      homeworkList: [],
      user: {userId: this.userId_prop},
      course: {courseId: this.courseId_prop, chooseCourseId: this.chooseCourseId_prop},
      ownFlag: false,
      homework: {}
    }
  },
  created: function () {
    var _this = this
    _this.user.userId = _this.userId_prop
    _this.course.courseId = _this.courseId_prop
    _this.course.chooseCourseId = _this.chooseCourseId_prop
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
        _this.getHomeworkList(_this.course.chooseCourseId, _this.courseId_prop, _this.ownFlag)
      })
  },
  methods: {
    homeworkDownload (row) {
      var _this = this
      _this.homework = row
      _this.$axios({
        method: 'GET',
        url: '/api/download/homework/' + row.attachment,
        headers: {'responseType': 'arraybuffer'},
        data: {}
      })
        .then(function (response) {
          const blob = new Blob([response])
          if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, _this.homework.attachment)
          } else {
            let aTag = document.createElement('a')
            aTag.download = _this.homework.attachment
            aTag.href = URL.createObjectURL(blob)
            aTag.click()
            URL.revokeObjectURL(aTag.href)
          }
        })
    },
    homeworkUpload (row) {
      this.homework = row
      this.homework_upload_form_visible = true
    },
    changeHomeworkUploadVisibleFalse (msg) {
      this.homework_upload_form_visible = msg
    },
    homeworkGrade (row) {
      this.homework = row
      this.homework_grade_form_visible = true
    },
    changeHomeworkGradeVisibleFalse (msg) {
      this.homework_grade_form_visible = msg
    },
    getHomeworkList: function (chooseCourseId, courseId, ownFlag) {
      var _this = this
      if (ownFlag) {
        this.$axios({
          method: 'GET',
          url: '/api/homework/courseId/' + courseId,
          data: {}
        })
          .then(function (response) {
            _this.homeworkList = response.data
          })
      } else {
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
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
