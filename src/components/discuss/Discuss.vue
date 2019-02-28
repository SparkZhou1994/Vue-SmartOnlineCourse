<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <CourseHeader></CourseHeader>
      <el-row>
        <el-col>
          <el-button type="primary" @click="discuss_release_form_visible = true">发布讨论</el-button>
          <el-button type="primary" @click="vote_release_form_visible = true">发起投票</el-button>
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
export default {
  name: 'Discuss'
}
</script>

<style scoped>

</style>
