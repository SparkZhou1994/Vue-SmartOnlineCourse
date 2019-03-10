<template>
    <el-container>
      <el-header>
        <Header :user_prop="user"></Header>
      </el-header>
      <el-main>
        <el-row :gutter="2">
          <el-col>
            <el-input v-model="selectCourseName" placeholder="请输入课程名">
              <a slot="suffix" class="icon-search" style="font-size: 30px" @click="getSelectCourse"></a>
            </el-input>
          </el-col>
        </el-row>
        <el-row :gutter="2">
          <el-col>
            <img src="../../assets/image/course/course_package_logo.jpg" class="img-responseive img-thumbnail"/>
          </el-col>
        </el-row>
        <el-row :gutter="2">
          <el-col>
            <h3>优质课程</h3>
          </el-col>
        </el-row>
        <el-row :gutter="2">
          <el-col v-for="item in course" :key="item.index" :xs="12" :sm="6" :md="4">
            <el-card>
              <img :src="item.avatar" class="img-responsive img-thumbnail"/>
              <div>
                <h3>{{item.courseName}}</h3>
                <h5>{{item.ownerUsername}}</h5>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
</template>

<script>
import Footer from '../common/Footer'
import Header from '../common/Header'
export default {
  name: 'CoursePackage',
  components: {Header, Footer},
  data: function () {
    return {
      course: [
      ],
      user: this.$route.params.user,
      selectCourseName: ''
    }
  },
  watch: {
    course: function (val) {
      this.course = val
    }
  },
  mounted: function () {
    var _this = this
    _this.user = _this.$route.params.user
    this.getTopCourse()
  },
  methods: {
    getTopCourse: function () {
      var _this = this
      this.$axios({
        method: 'GET',
        url: '/api/course/0/6',
        data: {}
      })
        .then(function (response) {
          _this.course = response.data
        })
    },
    getSelectCourse: function () {
      console.log('1')
      var _this = this
      this.$axios({
        method: 'GET',
        url: '/api/course/' + this.selectCourseName + '/0/6',
        data: {}
      })
        .then(function (response) {
          if (response.data.length === 0) {
            _this.$message.error('查无此课')
          }
          _this.course = response.data
        })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
