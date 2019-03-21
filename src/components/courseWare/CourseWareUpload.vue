<template>
  <div>
    <el-form>
      <el-form-item>
        <el-input  :placeholder="course.courseName" prefix-icon="icon-book"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="courseWare.title" placeholder="课件标题" prefix-icon="icon-list"></el-input>
      </el-form-item>
      <el-form-item>
        <el-upload action="/api/upload/courseWare" :before-upload="beforeUpload" :on-success="getFileName" :limit="1" class="text-left">
          <el-button size="small" type="primary">点击上传课件文件</el-button>
        </el-upload>
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button @click="changeCourseWareUploadVisible">取 消</el-button>
      <el-button type="primary" @click="changeCourseWareToUploadVisible">上 传</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseWareUpload',
  props: ['course_ware_upload_form_visible_prop', 'courseId_prop'],
  data () {
    return {
      course: {courseId: this.courseId_prop},
      courseWare: {}
    }
  },
  created: function () {
    var _this = this
    _this.course.courseId = _this.courseId_prop
    this.$axios({
      method: 'GET',
      url: '/api/course/' + _this.course.courseId,
      data: {}
    })
      .then(function (response) {
        _this.course = response.data
        console.log(response.data)
      })
  },
  methods: {
    changeCourseWareUploadVisible: function () {
      this.$emit('course_ware_upload_visible_false', false)
    },
    beforeUpload: function (file) {
      const isLt10M = file.size / 1024 / 1024 < 10
      if (!isLt10M) {
        this.$message.error('上传文件大小不能超过 10MB!')
      }
      return isLt10M
    },
    getFileName: function (response) {
      this.courseWare.attachment = response
    },
    changeCourseWareToUploadVisible: function () {
      var _this = this
      this.$axios({
        method: 'POST',
        url: '/api/courseWare',
        data: {courseId: _this.course.courseId, title: _this.courseWare.title, attachment: _this.courseWare.attachment}
      })
        .then(function (response) {
          console.log(response.data)
          if (response.data.courseId === _this.course.courseId) {
            _this.$message('课件创建成功')
            location.reload()
          } else {
            _this.$message.error('课件创建失败')
          }
        })
      this.$emit('course_ware_upload_visible_false', false)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
