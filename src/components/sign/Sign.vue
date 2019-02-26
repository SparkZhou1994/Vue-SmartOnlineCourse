<template>
  <el-container>
    <el-header>
      <Header></Header>
      <CourseHeader></CourseHeader>
    </el-header>
    <el-main></el-main>
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
  name: 'Sign',
  components: {Footer, CourseHeader, Header}
}
</script>

<style scoped>

</style>
