<template>
  <el-container>
    <el-header>
      <IndexHeader></IndexHeader>
    </el-header>
    <el-carousel :interval="4000" arrow="always" :height="carousel_height">
      <el-carousel-item v-for="item in carousel_img_src_list" :key="item.index">
        <img class="carousel-image" :src="item.url"/>
      </el-carousel-item>
    </el-carousel>
    <el-main>
      <h3 id="feature">关键特征</h3>
      <el-row :gutter="2">
        <el-col v-for="item in feature_small" :key="item.index" :xs="24" :sm="8">
          <img :src="item.url" class="img-responsive img-thumbnail"/>
          <p>{{item.intro}}</p>
        </el-col>
      </el-row>
      <el-row :gutter="2">
        <el-col v-for="item in feature_large" :key="item.index" :xs="24" :sm="12" >
          <img :src="item.url" class="img-responsive img-thumbnail"/>
          <p>{{item.intro}}</p>
        </el-col>
      </el-row>
      <h3 id="guide">如何使用</h3>
      <el-row :gutter="2">
        <el-col :xs="24" :sm="12" :md="10">
          <p>老师，同学们，我们已经跨入互联网时代，电脑已经在我们身边普及。我们还用苦恼教室没有开展课堂互动反馈的设施吗？我们是否想实现即时的沟通分享，但又不愿受到非教学的干扰呢？我们是否想让我们的教、学更轻松、自由、有趣呢？智能班课，专门为PC环境下的教、学而设计。打开PC，开启您的全新教学体验吧！</p>
        </el-col>
        <el-col :xs="24" :sm="12" :md="14">
          <video width="320" height="240" controls="controls" src="../../assets/media/intro.mp4"></video>
        </el-col>
      </el-row>
      <el-row :gutter="2" id="service">
        <el-col v-for="item in guide" :key="item.index" :xs="24" :sm="12">
          <el-card>
            <img :src="item.image_url"/>
            <div>
              <img :src="item.intro_url"/>
              <h3>{{item.intro}}</h3>
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
import IndexHeader from './IndexHeader'
import Footer from '../common/Footer'
export default {
  name: 'Index',
  components: {Footer, IndexHeader},
  data: function () {
    return {
      screen_width: document.body.clientWidth,
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
      ],
      guide: [
        {image_url: require('../../assets/image/index/index_server_1.png'), index: 1, intro_url: require('../../assets/image/index/index_server_3.png'), intro: '为学校提供学习中心定制服务。'},
        {image_url: require('../../assets/image/index/index_server_2.png'), index: 1, intro_url: require('../../assets/image/index/index_server_4.png'), intro: '欢迎您对我们的应用提供改进意见和建议'}
      ]
    }
  },
  mounted: function () {
    this.alter()
  },
  methods: {
    alter: function () {
      this.$axios({
        method: 'GET',
        url: '/api/user/1',
        data: {}
      })
        .then(function (response) {
          console.log(response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  computed: {
    carousel_height: function () {
      return 316 / 936 * this.screen_width - 50
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .carousel-image
    display: inline-block
    max-width: 100%
  .el-main
    background url("../../assets/image/index/index.png") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
</style>
