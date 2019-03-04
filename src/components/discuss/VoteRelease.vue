<template>
  <div>
    <el-form>
      <el-form-item>
        <el-input placeholder="投票标题" prefix-icon="icon-barcode"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="投票描述" prefix-icon="icon-price-tag"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="选项一" prefix-icon="icon-list"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="选项二" prefix-icon="icon-list"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="选项三" prefix-icon="icon-list"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="选项四" prefix-icon="icon-list"></el-input>
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button @click="changeVoteReleaseVisible">取 消</el-button>
      <el-button type="primary" @click="changeVoteReleaseVisible">发 起</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VoteRelease',
  props: ['vote_relaese_form_visible_prop'],
  data: function () {
  },
  methods: {
    changeVoteReleaseVisible: function () {
      this.$emit('vote_release_visible_false', false)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
