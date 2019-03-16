<template>
  <el-table :data="signList" style="width: 100%" max-height="250">
    <el-table-column fixed prop="username" label="学生姓名" width="150">
    </el-table-column>
    <el-table-column prop="batch" label="批次" width="150">
    </el-table-column>
    <el-table-column prop="endTime" label="结束时间" width="150">
    </el-table-column>
    <el-table-column prop="signTime" label="签到时间" width="150">
    </el-table-column>
    <el-table-column prop="range" label="状态" width="150">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'SignTable',
  props: ['chooseCourseId_prop'],
  data () {
    return {
      course: {chooseCourseId: this.chooseCourseId_prop},
      signList: []
    }
  },
  created: function () {
    var _this = this
    _this.course.chooseCourseId = _this.chooseCourseId_prop
    _this.getSignList(_this.course.chooseCourseId)
  },
  methods: {
    getSignList: function (chooseCourseId) {
      var _this = this
      this.$axios({
        method: 'GET',
        url: '/api/sign/' + chooseCourseId + '/0/5',
        data: {}
      })
        .then(function (response) {
          _this.signList = response.data
        })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
