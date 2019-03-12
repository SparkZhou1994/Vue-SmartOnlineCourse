<template>
  <div>
    <el-form>
      <el-form-item>
        <el-upload action="http://localhost:8090/upload/homework" :before-upload="beforeUpload" :on-success="getFileName" class="text-left">
          <el-button size="small" type="primary">点击上传作业文件</el-button>
        </el-upload>
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button @click="changeHomeworkUploadVisible">取 消</el-button>
      <el-button type="primary" @click="changeHomeworkToUploadVisible">上 传</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeworkUpload',
  props: ['homework_upload_form_visible_prop', 'homework_prop'],
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
    changeHomeworkUploadVisible: function () {
      this.$emit('homework_upload_visible_false', false)
    },
    beforeUpload: function (file) {
      const isLt10M = file.size / 1024 / 1024 < 10
      if (!isLt10M) {
        this.$message.error('上传头像图片大小不能超过 10MB!')
      }
      return isLt10M
    },
    getFileName: function (response) {
      this.homework.attachment = response
    },
    changeHomeworkToUploadVisible: function () {
      var _this = this
      this.$axios({
        method: 'PUT',
        url: '/api/homework',
        data: {version: _this.homework.version, homeworkId: _this.homework.homeworkId, attachment: _this.homework.attachment}
      })
        .then(function (response) {
          console.log(response.data)
          if (response.data.homeworkId === _this.course.homeworkId) {
            _this.$message('作业上传成功')
          } else {
            _this.$message.error('作业上传失败')
          }
        })
      this.$emit('homework_upload_visible_false', false)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
