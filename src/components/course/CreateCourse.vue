<template>
  <div>
    <el-form>
      <el-form-item>
        <el-input placeholder="请输入课程名" prefix-icon="icon-book"></el-input>
      </el-form-item>
      <el-form-item>
        <el-select v-model="value" placeholder="课程分类" prefix-icon="icon-list" style="width: 100%">
          <el-option
            v-for="item in catalog"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-upload class="text-left">
          <el-button size="small" type="primary">点击上传封面图片</el-button>
        </el-upload>
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button @click="changeAddVisible">取 消</el-button>
      <el-button type="primary" @click="changeAddVisible">创 建</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateCourse',
  props: ['add_visible_prop'],
  data: function () {
    return {
      catalog: [
        {
          value: '信息',
          label: '信息'
        },
        {
          value: '电机',
          label: '电机'
        },
        {
          value: '新闻',
          label: '新闻'
        },
        {
          value: '经济',
          label: '经济'
        },
        {
          value: '艺术',
          label: '艺术t'
        },
        {
          value: '外语',
          label: '外语'
        },
        {
          value: '通识',
          label: '通识'
        }
      ]
    }
  },
  methods: {
    changeAddVisible: function () {
      this.$emit('add_visible_false', false)
    }
  }
}
</script>

<style scoped>

</style>
