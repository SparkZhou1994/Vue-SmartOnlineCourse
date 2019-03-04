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
        <el-input placeholder="讨论内容" prefix-icon="icon-list"></el-input>
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button @click="changeDiscussContentReleaseVisible">取 消</el-button>
      <el-button type="primary" @click="changeDiscussContentReleaseVisible">发 布</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiscussContentRelease',
  props: ['discuss_content_relaese_form_visible_prop'],
  data: function () {
    return {
      discuss: {title: 'Java入门容易吗', lastPublishTime: '2019-02-02 10:16:24', describe: 'Java作为一门面向对象的语言，是否容易入门', username: 'Spark'}
    }
  },
  methods: {
    changeDiscussContentReleaseVisible: function () {
      this.$emit('discuss_content_release_visible_false', false)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
