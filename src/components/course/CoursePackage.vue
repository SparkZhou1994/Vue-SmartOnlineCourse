<template>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <el-row :gutter="2">
          <el-col>
            <el-input :placeholder="请输入课程名">
              <a slot="suffix" class="icon-search" style="font-size: 30px"></a>
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
              <img :src="item.image_url" class="img-responsive img-thumbnail"/>
              <div>
                <h3>{{item.name}}</h3>
                <h5>{{item.username}}</h5>
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
        {name: 'Java', username: 'Spark', image_url: require('../../assets/image/course/default.png')},
        {name: 'Java', username: 'Spark', image_url: require('../../assets/image/course/default.png')},
        {name: 'Java', username: 'Spark', image_url: require('../../assets/image/course/default.png')},
        {name: 'Java', username: 'Spark', image_url: require('../../assets/image/course/default.png')},
        {name: 'Java', username: 'Spark', image_url: require('../../assets/image/course/default.png')},
        {name: 'Java', username: 'Spark', image_url: require('../../assets/image/course/default.png')}
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
