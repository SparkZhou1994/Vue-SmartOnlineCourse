<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <CourseHeader></CourseHeader>
      <SignIn v-show="!user.own"></SignIn>
      <SignRelease v-show="user.own"></SignRelease>
      <SignTable></SignTable>
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
import SignRelease from './SignRelease'
import SignIn from './SignIn'
import SignTable from './SignTable'

export default {
  name: 'Sign',
  components: {SignTable, SignIn, SignRelease, Footer, CourseHeader, Header},
  data: function () {
    return {
      user: {own: false}
    }
  }
}
</script>

<style scoped>

</style>
