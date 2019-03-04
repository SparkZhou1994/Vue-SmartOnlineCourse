<template>
  <el-table :data="signData" style="width: 100%" max-height="250">
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
  data () {
    return {
      signData: [
        {username: 'Spark', batch: 1, endTime: '2019-02-02 11:15:15', signTime: '2019-02-02 13:28:43', range: '超时签到'},
        {username: 'Spark', batch: 1, endTime: '2019-02-02 11:15:15', signTime: '2019-02-02 13:28:43', range: '超时签到'}
      ]
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
