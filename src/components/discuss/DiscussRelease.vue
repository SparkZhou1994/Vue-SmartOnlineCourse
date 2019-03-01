<template>
  <div>
    <el-form>
      <el-form-item>
        <el-input placeholder="讨论标题" prefix-icon="icon-barcode"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="讨论描述" prefix-icon="icon-price-tag"></el-input>
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button @click="changeDiscussReleaseVisible">取 消</el-button>
      <el-button type="primary" @click="changeDiscussReleaseVisible">发 布</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiscussRelease',
  props: ['discuss_relaese_form_visible_prop'],
  data: function () {
  },
  methods: {
    changeDiscussReleaseVisible: function () {
      this.$emit('discuss_release_visible_false', false)
    }
  }
}
</script>

<style scoped>

</style>
