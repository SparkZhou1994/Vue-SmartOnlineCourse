<template>
  <el-table :data="courseWareData" style="width: 100%" max-height="250">
    <el-table-column fixed prop="courseWareId" label="编号" width="150">
    </el-table-column>
    <el-table-column prop="courseName" label="课程名" width="150">
    </el-table-column>
    <el-table-column prop="attachment" label="文件名" width="150">
    </el-table-column>
    <el-table-column prop="batch" label="批次" width="150">
    </el-table-column>
    <el-table-column label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">下载</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'CourseWareTable',
  methods: {
    handleClick (row) {
      console.log(row)
    }
  },
  data () {
    return {
      courseWareData: [
        {courseWareId: 1, batch: 1, courseName: 'Java', attachment: 'pom.xml', courseId: 1},
        {courseWareId: 1, batch: 1, courseName: 'Java', attachment: 'pom.xml', courseId: 1}
      ]
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
