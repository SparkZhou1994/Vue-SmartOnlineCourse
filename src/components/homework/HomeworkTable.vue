<template>
  <el-table :data="homeworkData" style="width: 100%" max-height="250">
    <el-table-column fixed prop="homeworkId" label="编号" width="150">
    </el-table-column>
    <el-table-column prop="homeworkName" label="作业名" width="150">
    </el-table-column>
    <el-table-column prop="attachment" label="文件名" width="150">
    </el-table-column>
    <el-table-column prop="describe" label="描述" width="150">
    </el-table-column>
    <el-table-column prop="batch" label="批次" width="150">
    </el-table-column>
    <el-table-column prop="endTime" label="截止时间" width="150">
    </el-table-column>
    <el-table-column prop="submitTime" label="提交时间" width="150">
    </el-table-column>
    <el-table-column prop="score" label="分数" width="150">
    </el-table-column>
    <el-table-column prop="range" label="状态" width="150">
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">下载</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'HomeworkTable',
  methods: {
    handleClick (row) {
      console.log(row)
    }
  },
  data () {
    return {
      homeworkData: [
        {homeworkId: 1, homeworkName: 'Java', attachment: 'pom.xml', describe: 'Maven Homework', batch: 1, endTime: '2019-02-02 11:15:15', submitTime: '2019-02-02 11:15:14', score: 80, range: '按时提交'},
        {homeworkId: 1, homeworkName: 'Java', attachment: 'pom.xml', describe: 'Maven Homework', batch: 1, endTime: '2019-02-02 11:15:15', submitTime: '2019-02-02 11:15:14', score: 80, range: '按时提交'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
