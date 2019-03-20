<template>
  <div>
    <el-form>
      <el-form-item>
        <el-input v-model="discuss.title" placeholder="投票标题" prefix-icon="icon-barcode"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="discuss.describe" placeholder="投票描述" prefix-icon="icon-price-tag"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="discuss.choose1" placeholder="选项一" prefix-icon="icon-list"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="discuss.choose2" placeholder="选项二" prefix-icon="icon-list"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="discuss.choose3" placeholder="选项三" prefix-icon="icon-list"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="discuss.choose4" placeholder="选项四" prefix-icon="icon-list"></el-input>
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button @click="changeVoteReleaseVisible">取 消</el-button>
      <el-button type="primary" @click="changeVoteToReleaseVisible">发 起</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VoteRelease',
  props: ['vote_relaese_form_visible_prop', 'chooseCourseId_prop'],
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
    changeVoteReleaseVisible: function () {
      this.$emit('vote_release_visible_false', false)
    },
    changeVoteToReleaseVisible: function () {
      var _this = this
      this.$axios({
        method: 'POST',
        url: '/api/discuss',
        data: {title: _this.discuss.title, describe: _this.discuss.describe, vote: 1, choose1: _this.discuss.choose1, choose2: _this.discuss.choose2, choose3: _this.discuss.choose3, choose4: _this.discuss.choose4, chooseCourseId: _this.course.chooseCourseId}
      })
        .then(function (response) {
          if (response.data.title === _this.discuss.title) {
            _this.$message('投票发起成功')
          } else {
            _this.$message.error('投票发起失败')
          }
        })
      this.$emit('vote_release_visible_false', false)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
