<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <CourseHeader></CourseHeader>
      <el-row :gutter="2">
        <el-col>
          <el-button type="primary" @click="discuss_release_form_visible = true">发布讨论</el-button>
          <el-button type="primary" @click="vote_release_form_visible = true">发起投票</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="2">
        <el-col v-for="item in discuss" :key="item.index" :xs="12" :sm="6" :md="4">
          <el-card>
            <div>
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
    <el-dialog title="发布讨论" :visible.sync="discuss_release_form_visible">
      <DiscussRelease :discuss_release_form_visible_prop="discuss_release_form_visible" v-on:discuss_release_visible_false="changeDiscussReleaseVisibleFalse($event)"></DiscussRelease>
    </el-dialog>
    <el-dialog title="发起投票" :visible.sync="vote_release_form_visible">
      <VoteRelease :vote_release_form_visible_prop="vote_release_form_visible" v-on:vote_release_visible_false="changeVoteReleaseVisibleFalse($event)"></VoteRelease>
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
      discuss: [
        {title: 'Java入门容易吗', lastPublishTime: '2019-02-02 10:16:24', describe: 'Java作为一门面向对象的语言，是否容易入门', username: 'Spark'},
        {title: 'Java入门容易吗', lastPublishTime: '2019-02-02 10:16:24', describe: 'Java作为一门面向对象的语言，是否容易入门', username: 'Spark'},
        {title: 'Java入门容易吗', lastPublishTime: '2019-02-02 10:16:24', describe: 'Java作为一门面向对象的语言，是否容易入门', username: 'Spark'},
        {title: 'Java入门容易吗', lastPublishTime: '2019-02-02 10:16:24', describe: 'Java作为一门面向对象的语言，是否容易入门', username: 'Spark'}
      ]
    }
  },
  methods: {
    changeDiscussReleaseVisibleFalse (msg) {
      this.discuss_release_form_visible = msg
    },
    changeVoteReleaseVisibleFalse (msg) {
      this.vote_release_form_visible = msg
    }
  }
}
</script>

<style scoped>

</style>
