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
  props: ['chooseCourseId_prop', 'userId_prop', 'courseId_prop'],
  data () {
    return {
      course: {chooseCourseId: this.chooseCourseId_prop, courseId: this.courseId_prop},
      signList: [],
      user: {userId: this.userId_prop},
      ownFlag: false
    }
  },
  mounted: function () {
    var _this = this
    _this.course.chooseCourseId = _this.chooseCourseId_prop
    _this.course.courseId = _this.courseId_prop
    _this.user.userId = _this.userId_prop
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
          _this.getSignList(_this.course.chooseCourseId, true, _this.courseId_prop)
        } else {
          _this.getSignList(_this.course.chooseCourseId, false, _this.courseId_prop)
        }
      })
  },
  methods: {
    getSignList: function (chooseCourseId, ownFlag, courseId) {
      var _this = this
      if (ownFlag) {
        this.$axios({
          method: 'GET',
          url: '/api/sign/courseId/' + courseId,
          data: {}
        })
          .then(function (response) {
            _this.signList = response.data
          })
      } else {
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
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
