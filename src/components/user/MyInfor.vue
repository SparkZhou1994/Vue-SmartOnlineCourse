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
              <el-upload action="http://localhost:8090/upload/user" :before-upload="beforeUpload" :on-success="getFileName" :limit="1" class="text-left">
                <el-button size="small" type="primary">点击上传封面图片</el-button>
              </el-upload>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
      <div class="dialog-footer">
        <el-button>取 消</el-button>
        <el-button type="primary" @click="submitUpload">保 存</el-button>
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
  },
  methods: {
    beforeUpload: function (file) {
      const isJPG = file.type === 'image/jpeg'
      const isPNG = file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG && !isPNG) {
        this.$message.error('上传头像图片只能是 JPG 或 PNG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    getFileName: function (response) {
      this.user.avatar = response
    },
    submitUpload: function () {
      var _this = this
      _this.$axios({
        method: 'PUT',
        url: '/api/user',
        data: {userId: _this.user.userId, username: _this.user.username, telphone: _this.user.telphone, version: _this.user.version, email: _this.user.email, avatar: _this.user.avatar}
      })
        .then(function (response) {
          if (response.data.userId === _this.user.userId) {
            _this.$message('更新成功')
          } else {
            _this.$message.error('更新失败')
          }
        })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
