<template>
  <div>
    <el-form>
      <el-form-item>
        <el-input v-model="homework.title" placeholder="作业名" prefix-icon="icon-paste"></el-input>
      </el-form-item>
      <el-form-item>
        <el-date-picker v-model="homework.endTime" format="yyyy-MM-dd HH:mm:ss" value-format="yyyy-MM-dd HH:mm:ss" style="width: 100%" type="datetime" placeholder="作业截止时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-input v-model="homework.describe" placeholder="作业描述" prefix-icon="icon-price-tag"></el-input>
      </el-form-item>
      <el-form-item>
        <el-upload action="/api/upload/homework" :before-upload="beforeUpload" :on-success="getFileName" :limit="1" class="text-left">
          <el-button size="small" type="primary">点击上传作业文件</el-button>
        </el-upload>
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button @click="changeHomeworkCreateVisible">取 消</el-button>
      <el-button type="primary" @click="changeHomeworkToCreateVisible">创 建</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeworkCreate',
  props: ['homework_create_form_visible_prop', 'chooseCourseId_prop'],
  data: function () {
    return {
      course: {chooseCourseId: this.chooseCourseId_prop},
      homework: {}
    }
  },
  mounted: function () {
    var _this = this
    _this.course.chooseCourseId = _this.chooseCourseId_prop
  },
  methods: {
    changeHomeworkCreateVisible: function () {
      this.$emit('homework_create_visible_false', false)
    },
    getFileName: function (response) {
      this.homework.attachment = response
    },
    changeHomeworkToCreateVisible: function () {
      var _this = this
      this.$axios({
        method: 'POST',
        url: '/api/homework',
        data: {chooseCourseId: _this.course.chooseCourseId, title: _this.homework.title, endTime: _this.homework.endTime, describe: _this.homework.describe, attachment: _this.homework.attachment}
      })
        .then(function (response) {
          if (response.data.length >= 0) {
            _this.$message('作业创建成功')
            location.reload()
          } else {
            _this.$message.error('作业创建失败')
          }
        })
      this.$emit('homework_create_visible_false', false)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
