<template>
  <div>
    <el-form>
      <el-form-item>
        <el-input v-model="sign.code" placeholder="请输入签到验证码" prefix-icon="icon-barcode"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="sign.expireTime" placeholder="请输入签到有效时间（分钟）" prefix-icon="icon-clock"></el-input>
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button type="primary" @click="changeSignReleaseVisible">创 建</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReleaseSign',
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
    changeSignReleaseVisible: function () {
      var _this = this
      this.$axios({
        method: 'POST',
        url: '/api/sign',
        data: {chooseCourseId: _this.course.chooseCourseId, code: _this.sign.code, expireTime: _this.sign.expireTime}
      })
        .then(function (response) {
          if (response.data.length > 0) {
            _this.$message('签到创建成功')
          } else {
            _this.$message.error('签到创建失败')
          }
        })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
