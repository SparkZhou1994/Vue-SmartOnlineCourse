<template>
  <div>
    <el-form>
      <el-form-item>
        <el-input placeholder="作业评分" prefix-icon="icon-list"></el-input>
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button @click="changeHomeworkGradeVisible">取 消</el-button>
      <el-button type="primary" @click="changeHomeworkGradeVisible">提 交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeworkGrade',
  props: ['homework_grade_form_visible_prop'],
  data: function () {
    return {
    }
  },
  methods: {
    changeHomeworkGradeVisible: function () {
      this.$emit('homework_grade_visible_false', false)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
