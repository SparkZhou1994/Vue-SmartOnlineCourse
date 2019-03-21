<template>
  <div>
    <el-form>
      <el-form-item>
        <el-input v-model="discuss.title" placeholder="讨论标题" prefix-icon="icon-barcode"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="discuss.describe" placeholder="讨论描述" prefix-icon="icon-price-tag"></el-input>
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button @click="changeDiscussReleaseVisible">取 消</el-button>
      <el-button type="primary" @click="changeDiscussToReleaseVisible">创 建</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiscussRelease',
  props: ['discuss_relaese_form_visible_prop', 'chooseCourseId_prop'],
  data: function () {
    return {
      course: {chooseCourseId: this.chooseCourseId_prop},
      discuss: {}
    }
  },
  created: function () {
    var _this = this
    _this.course.chooseCourseId = _this.chooseCourseId_prop
  },
  methods: {
    changeDiscussReleaseVisible: function () {
      this.$emit('discuss_release_visible_false', false)
    },
    changeDiscussToReleaseVisible: function () {
      var _this = this
      this.$axios({
        method: 'POST',
        url: '/api/discuss',
        data: {title: _this.discuss.title, describe: _this.discuss.describe, vote: 0, chooseCourseId: _this.course.chooseCourseId}
      })
        .then(function (response) {
          if (response.data.title === _this.discuss.title) {
            _this.$message('讨论创建成功')
            location.reload()
          } else {
            _this.$message.error('讨论创建失败')
          }
        })
      _this.$emit('discuss_release_visible_false', false)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
