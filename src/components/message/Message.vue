<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <CourseHeader></CourseHeader>
      <el-table :data="messageData" style="width: 100%" max-height="250">
        <el-table-column fixed prop="courseName" label="课程名" width="150">
        </el-table-column>
        <el-table-column prop="content" label="内容" width="150">
        </el-table-column>
        <el-table-column prop="publishDate" label="发布时间" width="150">
        </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script>
import Header from '../common/Header'
import CourseHeader from '../course/CourseHeader'
import Footer from '../common/Footer'
export default {
  name: 'Message',
  components: {Header, CourseHeader, Footer},
  data: function () {
    return {
      messageData: [
        {courseName: 'Java', content: '你有一个新课件', publishDate: '2019-02-02'},
        {courseName: 'Java', content: '你有一个新课件', publishDate: '2019-02-02'},
        {courseName: 'Java', content: '你有一个新课件', publishDate: '2019-02-02'}
      ]
    }
  },
  methods: {
    handleClick (row) {
      console.log(row)
    }
  }
}
</script>

<style scoped>

</style>
