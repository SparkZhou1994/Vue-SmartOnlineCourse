<template>
  <div>
    <el-form>
      <el-form-item>
        <el-input v-model="course.courseId" placeholder="请输入内部课程号" prefix-icon="icon-barcode"></el-input>
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button @click="changeJoinVisible">取 消</el-button>
      <el-button type="primary" @click="changeJoinInVisible">加 入</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JoinCourse',
  props: ['join_visible_prop', 'user_prop'],
  data: function () {
    return {
      user: this.user_prop,
      course: {}
    }
  },
  mounted: function () {
    var _this = this
    _this.user = _this.user_prop
  },
  methods: {
    changeJoinVisible: function () {
      this.$emit('join_visible_false', false)
    },
    changeJoinInVisible: function () {
      var _this = this
      this.$axios({
        method: 'POST',
        url: '/api/chooseCourse',
        data: {userId: this.user.userId, courseId: this.course.courseId}
      })
        .then(function (response) {
          if (response.data.userId === _this.user.userId) {
            _this.$message('加入成功')
            location.reload()
          } else {
            _this.$message.error('加入失败')
          }
        })
      _this.$emit('join_visible_false', false)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
