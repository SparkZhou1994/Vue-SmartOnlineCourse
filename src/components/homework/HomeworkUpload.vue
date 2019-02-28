<template>
  <div>
    <el-form>
      <el-form-item>
        <el-upload class="text-left">
          <el-button size="small" type="primary">点击上传作业文件</el-button>
        </el-upload>
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button @click="changeHomeworkUploadVisible">取 消</el-button>
      <el-button type="primary" @click="changeHomeworkUploadVisible">上 传</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeworkUpload',
  props: ['homework_upload_form_visible_prop'],
  data: function () {
    return {
    }
  },
  methods: {
    changeHomeworkUploadVisible: function () {
      this.$emit('homework_upload_visible_false', false)
    }
  }
}
</script>

<style scoped>

</style>
