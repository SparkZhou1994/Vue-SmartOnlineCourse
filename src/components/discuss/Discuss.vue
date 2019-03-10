<template>
  <el-container>
    <el-header>
      <Header :user_prop="user"></Header>
    </el-header>
    <el-main>
      <CourseHeader :course_prop="course" :user_prop="user"></CourseHeader>
      <el-row :gutter="2">
        <el-col>
          <el-button type="primary" @click="discuss_release_form_visible = true">发布讨论</el-button>
          <el-button type="primary" @click="vote_release_form_visible = true">发起投票</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="2">
        <el-col v-for="item in discussList" :key="item.index" :xs="12" :sm="6" :md="4">
          <el-card>
            <div>
              <h5>[{{item.vote}}]</h5>
              <h5>{{item.title}}</h5>
              <h6>{{item.username}}</h6>
              <h6>{{item.describe}}</h6>
              <h6>{{item.lastPublishTime}}</h6>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
    <el-dialog title="创建讨论" :visible.sync="discuss_release_form_visible">
      <DiscussRelease :course_prop="course" :discuss_release_form_visible_prop="discuss_release_form_visible" v-on:discuss_release_visible_false="changeDiscussReleaseVisibleFalse($event)"></DiscussRelease>
    </el-dialog>
    <el-dialog title="发起投票" :visible.sync="vote_release_form_visible">
      <VoteRelease :course_prop="course" :vote_release_form_visible_prop="vote_release_form_visible" v-on:vote_release_visible_false="changeVoteReleaseVisibleFalse($event)"></VoteRelease>
    </el-dialog>
  </el-container>
</template>

<script>
import Header from '../common/Header'
import CourseHeader from '../course/CourseHeader'
import Footer from '../common/Footer'
import DiscussRelease from './DiscussRelease'
import VoteRelease from './VoteRelease'
export default {
  name: 'Discuss',
  components: {DiscussRelease, VoteRelease, Header, CourseHeader, Footer},
  data: function () {
    return {
      discuss_release_form_visible: false,
      vote_release_form_visible: false,
      discussList: [
      ],
      user: this.$route.params.user,
      course: this.$route.params.course
    }
  },
  mounted: function () {
    var _this = this
    _this.user = _this.$route.params.user
    _this.course = _this.$route.params.course
    _this.getDiscussList(_this.course.chooseCourseId)
  },
  methods: {
    changeDiscussReleaseVisibleFalse: function (msg) {
      this.discuss_release_form_visible = msg
    },
    changeVoteReleaseVisibleFalse: function (msg) {
      this.vote_release_form_visible = msg
    },
    getDiscussList: function (chooseCourseId) {
      var _this = this
      this.$axios({
        method: 'GET',
        url: '/api/discuss/' + chooseCourseId + '/0/6',
        data: {}
      })
        .then(function (response) {
          _this.discussList = response.data
        })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
