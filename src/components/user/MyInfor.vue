<template>
  <el-container>
    <el-header>
      <Header :user_prop="user"></Header>
    </el-header>
    <el-main>
      <el-form>
        <el-form-item>
          <el-input :placeholder="user.username" v-model="user.username" prefix-icon="icon-user"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input :placeholder="user.telphone" v-model="user.telphone" prefix-icon="icon-phone"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input :placeholder="user.email" v-model="user.email" prefix-icon="icon-envelop"></el-input>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-col :xs="12" :sm="12">
              <img src="../../assets/image/user/default.png" class="img-responseive img-thumbnail"/>
            </el-col>
            <el-col :xs="12" :sm="12">
              <el-upload class="text-left" :before-upload="beforeUpload" :file-list="fileList" :limit="1" :data="message">
                <el-button size="small" type="primary">点击上传封面图片</el-button>
              </el-upload>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
      <div class="dialog-footer">
        <el-button>取 消</el-button>
        <el-button type="primary">保 存</el-button>
      </div>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script>
import Header from '../common/Header'
import Footer from '../common/Footer'
export default {
  name: 'MyInfor',
  components: {Footer, Header},
  data: function () {
    return {
      user: this.$route.params.user,
      message: {
        message: ''
      }
    }
  },
  mounted: function () {
    var _this = this
    _this.user = _this.$route.params.user
    console.log(_this.user)
  },
  methods: {
    beforeUpload: function () {

    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
