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
        <el-radio-group v-model="choose">
          <el-radio v-show="discuss.choose1" :label="1">{{discuss.choose1}}</el-radio>
          <el-radio v-show="discuss.choose2" :label="2">{{discuss.choose2}}</el-radio>
          <el-radio v-show="discuss.choose3" :label="3">{{discuss.choose3}}</el-radio>
          <el-radio v-show="discuss.choose4" :label="4">{{discuss.choose4}}</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button @click="changeVoteContentReleaseVisible">取 消</el-button>
      <el-button type="primary" @click="changeVoteContentReleaseVisible">投 票</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VoteContentRelease',
  props: ['vote_content_relaese_form_visible_prop'],
  data: function () {
    return {
      discuss: {title: 'Java入门容易吗', lastPublishTime: '2019-02-02 10:16:24', describe: 'Java作为一门面向对象的语言，是否容易入门', username: 'Spark', choose1: 'Think in Java', choose2: 'Agile Java'},
      choose: 1
    }
  },
  methods: {
    changeVoteContentReleaseVisible: function () {
      this.$emit('vote_content_release_visible_false', false)
    }
  }
}
</script>

<style scoped>

</style>
