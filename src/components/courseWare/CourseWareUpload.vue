<template>
  <div>
    <el-form>
      <el-form-item>
        <el-input placeholder="课件名" prefix-icon="icon-book"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="课件批次" prefix-icon="icon-list"></el-input>
      </el-form-item>
      <el-form-item>
        <el-upload class="text-left">
          <el-button size="small" type="primary">点击上传课件文件</el-button>
        </el-upload>
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button @click="changeCourseWareUploadVisible">取 消</el-button>
      <el-button type="primary" @click="changeCourseWareUploadVisible">上 传</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseWareUpload',
  props: ['course_ware_upload_form_visible_prop'],
  methods: {
    changeCourseWareUploadVisible: function () {
      this.$emit('course_ware_upload_visible_false', false)
    }
  }
}
</script>

<style scoped>

</style>
