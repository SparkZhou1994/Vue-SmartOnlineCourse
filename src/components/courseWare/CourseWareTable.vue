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
  props: ['course_ware_list_prop'],
  methods: {
    courseWareDownload (row) {
      this.$axios({
        method: 'GET',
        url: '/api/download/courseWare/' + row.attachment,
        data: {}
      })
        .then(function (response) {
          console.log(response)
        })
    }
  },
  data () {
    return {
      courseWareList: this.course_ware_list_prop
    }
  },
  mounted: function () {
    var _this = this
    _this.courseWareList = _this.course_ware_list_prop
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
