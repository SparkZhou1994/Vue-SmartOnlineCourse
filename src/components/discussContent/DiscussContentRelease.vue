<template>
  <div>
    <el-form>
      <el-form-item>
        <el-input v-model="discuss.title" disabled="true" prefix-icon="icon-barcode"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="discuss.describe" disabled="true" prefix-icon="icon-price-tag"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="discussContent.content" placeholder="讨论内容" prefix-icon="icon-list"></el-input>
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button @click="changeDiscussContentReleaseVisible">取 消</el-button>
      <el-button type="primary" @click="changeDiscussContentToReleaseVisible">发 布</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiscussContentRelease',
  props: ['discuss_content_relaese_form_visible_prop', 'user_prop', 'course_prop', 'discuss_prop'],
  data: function () {
    return {
      discuss: this.discuss_prop,
      user: this.user_prop,
      course: this.course_prop,
      discussContent: {}
    }
  },
  mounted: function () {
    var _this = this
    _this.user = _this.user_prop
    _this.course = _this.course_prop
    _this.discuss = _this.discuss_prop
  },
  methods: {
    changeDiscussContentReleaseVisible: function () {
      this.$emit('discuss_content_release_visible_false', false)
    },
    changeDiscussContentToReleaseVisible: function () {
      var _this = this
      _this.$axios({
        method: 'POST',
        url: '/api/discussContent',
        data: {discussId: _this.discuss.discussId, userId: _this.user.userId, content: _this.discussContent.content}
      })
        .then(function (response) {
          if (response.data.discussId === _this.discuss.discussId) {
            _this.$message('发布成功')
          } else {
            _this.$message.error('发布失败')
          }
        })
      _this.$emit('discuss_content_release_visible_false', false)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
