<template>
  <el-container>
    <el-header>
      <Header></Header>
      <CourseHeader></CourseHeader>
    </el-header>
    <el-main>
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
import ReleaseSign from './ReleaseSign'
import SignIn from './SignIn'
export default {
  name: 'Sign',
  components: {SignIn, ReleaseSign, Footer, CourseHeader, Header}
}
</script>

<style scoped>

</style>
