<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <CourseHeader></CourseHeader>
      <el-row>
        <el-col>
          <el-button type="primary" v-show="user.own" @click="homework_create_form_visible = true">作业创建</el-button>
        </el-col>
      </el-row>
      <HomeworkTable></HomeworkTable>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
    <el-dialog title="作业创建" :visible.sync="homework_create_form_visible">
      <HomeworkCreate :homework_create_form_visible_prop="homework_create_form_visible" v-on:homework_create_visible_false="changeHomeworkCreateVisibleFalse($event)"></HomeworkCreate>
    </el-dialog>
  </el-container>
</template>

<script>
import Header from '../common/Header'
import CourseHeader from '../course/CourseHeader'
import Footer from '../common/Footer'
import HomeworkTable from '../homework/HomeworkTable'
import HomeworkCreate from '../homework/HomeworkCreate'

export default {
  name: 'Homework',
  components: {HomeworkCreate, HomeworkTable, Header, CourseHeader, Footer},
  data: function () {
    return {
      user: {own: true},
      homework_create_form_visible: false
    }
  },
  methods: {
    changeHomeworkCreateVisibleFalse (msg) {
      this.homework_create_form_visible = msg
    }
  }
}
</script>

<style scoped>

</style>
