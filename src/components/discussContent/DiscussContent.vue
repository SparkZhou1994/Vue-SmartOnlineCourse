<template>
  <el-container>
    <el-header>
      <Header :userId_prop="user.userId"></Header>
    </el-header>
    <el-main>
      <CourseHeader :courseId_prop="course.courseId" :chooseCourseId_prop="course.chooseCourseId" :userId_prop="user.userId"></CourseHeader>
      <div v-show="discuss.vote === '讨论'">
        <el-row :gutter="2">
          <el-col>
            <el-button type="primary" @click="discuss_content_release_form_visible = true">发布讨论</el-button>
          </el-col>
        </el-row>
        <el-row v-if="discussContentList != null" :gutter="2">
          <el-col v-for="item in discussContentList" :key="item.index" :xs="12" :sm="6" :md="4">
            <el-card>
              <div>
                <h6>{{item.publishTime}}</h6>
                <h5>{{item.content}}</h5>
                <h6>{{item.username}}</h6>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div v-show="discuss.vote === '投票'">
        <el-row :gutter="2">
          <el-col>
            <el-button type="primary" @click="vote_content_release_form_visible = true">投票</el-button>
          </el-col>
        </el-row>
        <el-row v-if="result" :gutter="2">
          <el-col :xs="12" :sm="6" :md="4">
            <div>
              <h5>共{{voteResult.total}}人投票</h5>
              <h6>其中{{voteResult.choose1}}投了{{discuss.choose1}}</h6>
              <h6 v-show="discuss.choose2 != null">{{voteResult.choose2}}投了{{discuss.choose2}}</h6>
              <h6 v-show="discuss.choose3 != null">{{voteResult.choose3}}投了{{discuss.choose3}}</h6>
              <h6 v-show="discuss.choose4 != null">{{voteResult.choose4}}投了{{discuss.choose4}}</h6>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
    <el-dialog title="发布讨论" :visible.sync="discuss_content_release_form_visible">
      <DiscussContentRelease :userId_prop="user.userId" :discussId_prop="discuss.discussId" :discuss_content_release_form_visible_prop="discuss_content_release_form_visible" v-on:discuss_content_release_visible_false="changeDiscussContentReleaseVisibleFalse($event)"></DiscussContentRelease>
    </el-dialog>
    <el-dialog title="投票" :visible.sync="vote_content_release_form_visible">
      <VoteContentRelease :userId_prop="user.userId" :discussId_prop="discuss.discussId" :vote_content_release_form_visible_prop="vote_content_release_form_visible" v-on:vote_content_release_visible_false="changeVoteContentReleaseVisibleFalse($event)" @message="voteMessage"></VoteContentRelease>
    </el-dialog>
  </el-container>
</template>

<script>
import Header from '../common/Header'
import CourseHeader from '../course/CourseHeader'
import Footer from '../common/Footer'
import DiscussContentRelease from './DiscussContentRelease'
import VoteContentRelease from './VoteContentRelease'
export default {
  name: 'DiscussContent',
  components: {VoteContentRelease, DiscussContentRelease, Header, CourseHeader, Footer},
  data: function () {
    return {
      discuss_content_release_form_visible: false,
      vote_content_release_form_visible: false,
      user: {userId: this.$route.query.userId},
      course: {courseId: this.$route.query.courseId, chooseCourseId: this.$route.query.chooseCourseId},
      discuss: {discussId: this.$route.query.discussId},
      result: false,
      voteResult: {},
      discussContentList: []
    }
  },
  created: function () {
    var _this = this
    _this.user.userId = _this.$route.query.userId
    _this.course.courseId = _this.$route.query.courseId
    _this.course.chooseCourseId = _this.$route.query.chooseCourseId
    _this.discuss.discussId = _this.$route.query.discussId
    this.$axios({
      method: 'GET',
      url: '/api/user/' + _this.user.userId,
      data: {}
    })
      .then(function (response) {
        _this.user = response.data
      })
    this.$axios({
      method: 'GET',
      url: '/api/chooseCourse/userId/' + _this.user.userId,
      data: {}
    })
      .then(function (response) {
        _this.course = response.data
      })
    this.$axios({
      method: 'GET',
      url: '/api/discuss/' + _this.discuss.discussId,
      data: {}
    })
      .then(function (response) {
        _this.discuss = response.data
      })
    _this.getDiscussContentList(_this.$route.query.discussId)
  },
  methods: {
    changeDiscussContentReleaseVisibleFalse (msg) {
      this.discuss_content_release_form_visible = msg
    },
    changeVoteContentReleaseVisibleFalse (msg) {
      this.vote_content_release_form_visible = msg
    },
    getDiscussContentList: function (discussId) {
      var _this = this
      this.$axios({
        method: 'GET',
        url: '/api/discussContent/' + discussId + '/0/5',
        data: {}
      })
        .then(function (response) {
          _this.discussContentList = response.data
        })
    },
    voteMessage: function (msg) {
      var _this = this
      this.$axios({
        method: 'GET',
        url: '/api/discussContent/discussId/' + _this.discussId,
        data: {}
      })
        .then(function (response) {
          _this.voteResult = response.data
        })
      _this.result = msg
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
