<template>
  <div>
    <el-form>
      <el-form-item>
        <el-input placeholder="作业名" prefix-icon="icon-paste"></el-input>
      </el-form-item>
      <el-form-item>
        <el-date-picker v-model="value1" style="width: 100%" type="datetime" placeholder="作业截止时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="作业批次" prefix-icon="icon-list"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="作业描述" prefix-icon="icon-price-tag"></el-input>
      </el-form-item>
      <el-form-item>
        <el-upload class="text-left">
          <el-button size="small" type="primary">点击上传作业文件</el-button>
        </el-upload>
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button @click="changeHomeworkCreateVisible">取 消</el-button>
      <el-button type="primary" @click="changeHomeworkCreateVisible">创 建</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeworkCreate',
  props: ['homework_create_form_visible_prop'],
  data: function () {
    return {
      value1: ''
    }
  },
  methods: {
    changeHomeworkCreateVisible: function () {
      this.$emit('homework_create_visible_false', false)
    }
  }
}
</script>

<style scoped>

</style>
