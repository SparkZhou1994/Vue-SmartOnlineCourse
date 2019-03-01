<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <CourseHeader></CourseHeader>
      <div v-show="!discuss.vote">
        <el-row :gutter="2">
          <el-col>
            <el-button type="primary" @click="discuss_content_release_form_visible = true">发布讨论</el-button>
          </el-col>
        </el-row>
        <el-row :gutter="2">
          <el-col :xs="12" :sm="6" :md="4">
            <el-card>
              <div>
                <h6>{{discuss_content.publishTime}}</h6>
                <h5>{{discuss_content.content}}</h5>
                <h6>{{discuss_content.username}}</h6>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div v-show="discuss.vote">
        <el-row :gutter="2">
          <el-col>
            <el-button type="primary" @click="vote_content_release_form_visible = true">投票</el-button>
          </el-col>
        </el-row>
        <el-row :gutter="2">
          <el-col :xs="12" :sm="6" :md="4">
            <div>
              <h5>共{{vote_content.voteAmount}}人投票</h5>
              <h6>其中{{vote_content.voteChoose1}}投了{{discuss.choose1}}</h6>
              <h6>{{vote_content.voteChoose2}}投了{{discuss.choose2}}</h6>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
    <el-dialog title="发布讨论" :visible.sync="discuss_content_release_form_visible">
      <DiscussContentRelease :discuss_content_release_form_visible_prop="discuss_content_release_form_visible" v-on:discuss_content_release_visible_false="changeDiscussContentReleaseVisibleFalse($event)"></DiscussContentRelease>
    </el-dialog>
    <el-dialog title="投票" :visible.sync="vote_content_release_form_visible">
      <VoteContentRelease :vote_content_release_form_visible_prop="vote_content_release_form_visible" v-on:vote_content_release_visible_false="changeVoteContentReleaseVisibleFalse($event)"></VoteContentRelease>
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
      discuss: {vote: true, choose1: 'Think in Java', choose2: 'Agile Java'},
      discuss_content: {username: 'Spark', content: '不难', publishTime: '2019-02-02 10:16:24'},
      vote_content: {voteAmount: 4, voteChoose1: 1, voteChoose2: 2}
    }
  },
  methods: {
    changeDiscussContentReleaseVisibleFalse (msg) {
      this.discuss_content_release_form_visible = msg
    },
    changeVoteContentReleaseVisibleFalse (msg) {
      this.vote_content_release_form_visible = msg
    }
  }
}
</script>

<style scoped>

</style>
