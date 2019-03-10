<template>
  <div>
    <el-form>
      <el-form-item>
        <el-input v-model="sign.code" placeholder="请输入签到验证码" prefix-icon="icon-barcode"></el-input>
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button type="primary" @click="changeSignInVisible">签 到</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  props: ['course_prop'],
  data () {
    return {
      course: this.course_prop,
      sign: {}
    }
  },
  mounted: function () {
    var _this = this
    _this.course = _this.course_prop
  },
  methods: {
    changeSignInVisible: function () {
      var _this = this
      this.$axios({
        method: 'PUT',
        url: '/api/sign',
        data: {chooseCourseId: _this.course.chooseCourseId, code: _this.sign.code}
      })
        .then(function (response) {
          if (response.data.code === _this.sign.code) {
            _this.$message('签到成功')
          } else {
            _this.$message.error('签到失败')
          }
        })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
