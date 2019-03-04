<template>
  <div>
    <el-form>
      <el-form-item>
        <el-input placeholder="请输入内部课程号" prefix-icon="icon-barcode"></el-input>
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button @click="changeJoinVisible">取 消</el-button>
      <el-button type="primary" @click="changeJoinVisible">加 入</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JoinCourse',
  props: ['join_visible_prop'],
  methods: {
    changeJoinVisible: function () {
      this.$emit('join_visible_false', false)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
