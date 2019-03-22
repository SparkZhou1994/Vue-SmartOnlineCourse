<template>
  <el-table :data="courseWareList" style="width: 100%" max-height="250">
    <el-table-column fixed prop="courseWareId" label="编号" width="150">
    </el-table-column>
    <el-table-column prop="courseName" label="课程名" width="150">
    </el-table-column>
    <el-table-column prop="title" label="标题" width="150">
    </el-table-column>
    <el-table-column prop="batch" label="批次" width="150">
    </el-table-column>
    <el-table-column label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="courseWareDownload(scope.row)" type="text" size="small">下载</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'CourseWareTable',
  props: ['courseId_prop'],
  methods: {
    courseWareDownload (row) {
      var _this = this
      _this.courseWare = row
      this.$axios({
        method: 'GET',
        url: '/api/download/courseWare/' + row.attachment,
        data: {}
      })
        .then(function (response) {
          const blob = new Blob([response.data])
          if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, _this.courseWare.attachment)
          } else {
            let aTag = document.createElement('a')
            aTag.download = _this.courseWare.attachment
            aTag.href = URL.createObjectURL(blob)
            aTag.click()
            URL.revokeObjectURL(aTag.href)
          }
        })
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
  },
  data () {
    return {
      courseWareList: [],
      courseWare: {},
      course: {courseId: this.courseId_prop}
    }
  },
  created: function () {
    var _this = this
    _this.course.courseId = _this.courseId_prop
    _this.getCourseWareList(_this.course.courseId)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
