<template>
  <div>
    <el-form>
      <el-form-item>
        <el-input :placeholder="discuss.title" disabled="true" prefix-icon="icon-barcode"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input :placeholder="discuss.describe" disabled="true" prefix-icon="icon-price-tag"></el-input>
      </el-form-item>
      <el-form-item>
        <el-radio-group v-model="discussContent.choose">
          <el-radio v-show="discuss.choose1" :label="1">{{discuss.choose1}}</el-radio>
          <el-radio v-show="discuss.choose2" :label="2">{{discuss.choose2}}</el-radio>
          <el-radio v-show="discuss.choose3" :label="3">{{discuss.choose3}}</el-radio>
          <el-radio v-show="discuss.choose4" :label="4">{{discuss.choose4}}</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button @click="changeVoteContentReleaseVisible">取 消</el-button>
      <el-button type="primary" @click="changeVoteContentToReleaseVisible">投 票</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VoteContentRelease',
  props: ['discuss_content_relaese_form_visible_prop', 'userId_prop', 'discussId_prop'],
  data: function () {
    return {
      discuss: {discussId: this.discussId_prop},
      user: {userId: this.userId_prop},
      discussContent: {}
    }
  },
  created: function () {
    var _this = this
    _this.user.userId = _this.userId_prop
    _this.discuss.discussId = _this.discussId_prop
    this.$axios({
      method: 'GET',
      url: '/api/discuss/' + _this.discuss.discussId,
      data: {}
    })
      .then(function (response) {
        _this.discuss = response.data
      })
  },
  methods: {
    changeVoteContentReleaseVisible: function () {
      this.$emit('vote_content_release_visible_false', false)
    },
    changeVoteContentToReleaseVisible: function () {
      var _this = this
      _this.$axios({
        method: 'POST',
        url: '/api/discussContent',
        data: {discussId: _this.discuss.discussId, userId: _this.user.userId, choose: _this.discussContent.choose}
      })
        .then(function (response) {
          if (response.data.discussId === _this.discuss.discussId) {
            _this.$message('投票成功')
            _this.$emit('message', true)
          } else {
            _this.$message.error('投票失败')
          }
        })
      _this.$emit('vote_content_release_visible_false', false)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
