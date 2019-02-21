<template>
  <el-container>
    <el-header>
      <IndexHeader></IndexHeader>
    </el-header>
    <el-main>
      <el-carousel :interval="4000" arrow="always" :height="316/936*screenWidth-50">
        <el-carousel-item v-for="item in carousel_img_src_list" :key="item.index">
          <img class="carousel-image" :src="item.url"/>
        </el-carousel-item>
      </el-carousel>
      <div class="container">
        <div id="main_char">
          <h3>关键特征</h3>
          <div class="row" v-for="item in feature_small" :key="item.index">
            <div class="col-md-3 col-xs-3 col-sm-3">
              <img :src="item.url" class="img-responsive img-thumbnail">
              <p>{{item.intro}}</p>
            </div>
          </div>
        </div>
        <div class="row" v-for="item in feature_large" :key="item.index" style="margin-top: 10px;">
          <div class="col-md-6 col-xs-6 col-sm-6">
            <img :src="item.url" class="img-responsive img-thumbnail">
            <p>{{item.intro}}</p>
          </div>
        </div>
      </div>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import IndexHeader from './IndexHeader'
export default {
  name: 'Index',
  components: {IndexHeader},
  data: function () {
    return {
      screenWidth: document.body.clientWidth,
      carousel_img_src_list: [
        {url: require('../../assets/image/index/index_ad_01.jpg'), index: 1},
        {url: require('../../assets/image/index/index_ad_02.jpg'), index: 2},
        {url: require('../../assets/image/index/index_ad_03.jpg'), index: 3}
      ],
      feature_small: [
        {url: require('../../assets/image/index/index_intro_1.png'), index: 1, intro: '您都可以轻松管理自己的班课，管理学生、发送通知、分享资源、布置批改作业、组织讨论答疑、开展教学互动。'},
        {url: require('../../assets/image/index/index_intro_2.png'), index: 2, intro: '任何普通教室的课堂现场或课外，您都可以随即开展投票问卷、头脑风暴、作品分享、计时答题等互动教学活动。即刻反馈，即刻点评。'},
        {url: require('../../assets/image/index/index_intro_3.png'), index: 3, intro: '您发布的所有课程信息、学习要求、课件、微视频等学习资源都可以即时传递到学生设备上，从而让学生设备从此变成学习工具，不再只是社交、游戏…'}
      ],
      feature_large: [
        {url: require('../../assets/image/index/index_intro_4.png'), index: 1, intro: '配套交互式数字教材,可以实现对每位学生学习进度跟踪和学习成效评价，学期末教师可以得到每位学生的数字教材学习评估报告。'},
        {url: require('../../assets/image/index/index_intro_5.png'), index: 2, intro: '对教师和学生全部免费。'}
      ]
    }
  },
  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    }
  },
  watch: {
    screenWidth (val) {
      if (!this.timer) {
        this.screenWidth = val
        this.timer = true
        let that = this
        setTimeout(function () {
          // that.screenWidth = that.$store.state.canvasWidth
          console.log(that.screenWidth)
          that.init()
          that.timer = false
        }, 400)
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .carousel-image
    display: inline-block
    max-width: 100%
  .el-row:before
    content: " "
    margin-top 2px
</style>
