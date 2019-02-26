<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <el-form>
        <el-form-item>
          <el-input :placeholder="user.username" prefix-icon="icon-user"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input :placeholder="user.telphone" prefix-icon="icon-phone"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input :placeholder="user.email" prefix-icon="icon-envelop"></el-input>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-col :xs="12" :sm="12">
              <img src="../../assets/image/user/default.png" class="img-responseive img-thumbnail"/>
            </el-col>
            <el-col :xs="12" :sm="12">
              <el-upload class="text-left">
                <el-button size="small" type="primary">点击上传封面图片</el-button>
              </el-upload>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
      <div class="dialog-footer">
        <el-button @click="changeAddVisible">取 消</el-button>
        <el-button type="primary" @click="changeAddVisible">保 存</el-button>
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
      user: {username: 'Spark', telphone: '13127945312', email: 'zhoujuhui@qq.com'}
    }
  }
}
</script>

<style scoped>

</style>
