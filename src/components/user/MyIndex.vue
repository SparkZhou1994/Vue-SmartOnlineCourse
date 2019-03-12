<template>
  <el-container>
    <el-header>
      <Header :user_prop="user"></Header>
    </el-header>
    <el-main>
      <el-row>
        <el-col :xs="4" :sm="2">
          <el-popover placement="top" v-model="visible">
            <div>
              <a size="mini" type="text" @click="createCourse">创建班课</a>
            </div>
            <div>
              <a size="mini" type="text" @click="joinCourse">加入班课</a>
            </div>
            <a slot="reference" class="icon-plus"></a>
          </el-popover>
        </el-col>
        <el-col :xs="20" :sm="22">
          <h4 class="text-right text-info">{{course.length}}个进行中的班课</h4>
        </el-col>
      </el-row>
      <el-row :gutter="2">
        <el-col v-for="item in course" :key="item.index" :xs="12" :sm="6" :md="4">
          <a @click="signPage(item)">
            <el-card>
              <img src="item.avatar" class="img-responsive img-thumbnail"/>
              <div>
                <h3>{{item.courseName}}</h3>
                <h5>{{item.ownerUsername}}</h5>
              </div>
            </el-card>
          </a>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
    <el-dialog title="创建班课" :visible.sync="add_visible">
      <create-course :user_prop="user" :add_visible_prop="add_visible" v-on:add_visible_false="changeAddVisibleFalse($event)"></create-course>
    </el-dialog>
    <el-dialog title="加入班课" :visible.sync="join_visible">
      <join-course :user_prop="user" :join_visible_prop="join_visible" v-on:join_visible_false="changeJoinVisibleFalse($event)"></join-course>
    </el-dialog>
  </el-container>
</template>

<script>
import Header from '../common/Header'
import Footer from '../common/Footer'
import CreateCourse from '../course/CreateCourse'
import JoinCourse from '../course/JoinCourse'
export default {
  name: 'MyIndex',
  components: {JoinCourse, CreateCourse, Footer, Header},
  data: function () {
    return {
      user: this.$route.params.user,
      visible: false,
      add_visible: false,
      join_visible: false,
      course: [
      ]
    }
  },
  mounted: function () {
    var _this = this
    _this.user = _this.$route.params.user
    _this.getCourseList()
  },
  methods: {
    getCourseList () {
      var _this = this
      this.$axios({
        method: 'GET',
        url: '/api/chooseCourse/userId/' + _this.user.userId,
        data: {}
      })
        .then(function (response) {
          _this.course = response.data
        })
    },
    signPage (courseItem) {
      var _this = this
      _this.$router.push({name: 'Sign', params: {user: _this.user, course: courseItem}})
    },
    createCourse () {
      this.add_visible = true
    },
    joinCourse () {
      this.join_visible = true
    },
    changeAddVisibleFalse (msg) {
      this.add_visible = msg
    },
    changeJoinVisibleFalse (msg) {
      this.join_visible = msg
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .icon-plus
    font-size 30px
    color #00BBDD
  a
    text-decoration none
</style>
