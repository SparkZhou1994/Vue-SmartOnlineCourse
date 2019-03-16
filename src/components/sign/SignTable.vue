<template>
  <el-table :data="signList" style="width: 100%" max-height="250">
    <el-table-column fixed prop="username" label="学生姓名" width="150">
    </el-table-column>
    <el-table-column prop="batch" label="批次" width="150">
    </el-table-column>
    <el-table-column prop="endTime" label="结束时间" width="150">
    </el-table-column>
    <el-table-column prop="signTime" label="签到时间" width="150">
    </el-table-column>
    <el-table-column prop="range" label="状态" width="150">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'SignTable',
  props: ['sign_list_prop'],
  data () {
    return {
      signList: this.sign_list_prop
    }
  },
  mounted: function () {
    var _this = this
    console.log(_this.sign_list_prop)
    _this.signList = _this.sign_list_prop
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
