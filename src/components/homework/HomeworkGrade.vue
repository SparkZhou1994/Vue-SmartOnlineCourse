<template>
  <div>
    <el-form>
      <el-form-item>
        <el-input v-model="homework.score" placeholder="作业评分" prefix-icon="icon-list"></el-input>
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button @click="changeHomeworkGradeVisible">取 消</el-button>
      <el-button type="primary" @click="changeHomeworkToGradeVisible">提 交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeworkGrade',
  props: ['homework_grade_form_visible_prop', 'homework_prop'],
  data: function () {
    return {
      homework: this.homework_prop
    }
  },
  mounted: function () {
    var _this = this
    _this.homework = _this.homework_prop
  },
  methods: {
    changeHomeworkGradeVisible: function () {
      this.$emit('homework_grade_visible_false', false)
    },
    changeHomeworkToGradeVisible: function () {
      var _this = this
      this.$axios({
        method: 'PUT',
        url: '/api/homework',
        data: {version: _this.homework.version, homeworkId: _this.homework.homeworkId, score: _this.homework.score, submitTime: _this.homework.submitTime}
      })
        .then(function (response) {
          console.log(response.data)
          if (response.data.homeworkId === _this.homework.homeworkId) {
            _this.$message('作业评分成功')
          } else {
            _this.$message.error('作业评分失败')
          }
        })
      this.$emit('homework_grade_visible_false', false)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
