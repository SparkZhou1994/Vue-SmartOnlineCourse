<template>
  <div>
    <el-form>
      <el-form-item>
        <el-input v-model="course.courseName" placeholder="请输入课程名" prefix-icon="icon-book"></el-input>
      </el-form-item>
      <el-form-item>
        <el-select v-model="course.catalog" placeholder="课程分类" prefix-icon="icon-list" style="width: 100%">
          <el-option
            v-for="item in catalog"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-upload action="/api/upload/course" :before-upload="beforeUpload" :on-success="getFileName" :limit="1" class="text-left">
          <el-button size="small" type="primary">点击上传封面图片</el-button>
        </el-upload>
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button @click="changeAddVisible">取 消</el-button>
      <el-button type="primary" @click="changeCreateVisible">创 建</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateCourse',
  props: ['add_visible_prop', 'user_prop'],
  data: function () {
    return {
      catalog: [
        {
          value: '信息',
          label: '信息'
        },
        {
          value: '电机',
          label: '电机'
        },
        {
          value: '新闻',
          label: '新闻'
        },
        {
          value: '经济',
          label: '经济'
        },
        {
          value: '艺术',
          label: '艺术t'
        },
        {
          value: '外语',
          label: '外语'
        },
        {
          value: '通识',
          label: '通识'
        }
      ],
      user: this.user_prop,
      course: {}
    }
  },
  mounted: function () {
    var _this = this
    _this.user = _this.user_prop
  },
  methods: {
    changeCreateVisible: function () {
      var _this = this
      this.$axios({
        method: 'POST',
        url: '/api/course',
        data: {courseName: _this.course.courseName, catalog: _this.course.catalog, avatar: 'http://101.132.163.86:8090/course/' + _this.course.avatar}
      })
        .then(function (response) {
          if (response.data.courseName === _this.course.courseName) {
            _this.$message('创建成功')
          } else {
            _this.$message.error('创建失败')
          }
        })
      _this.$emit('add_visible_false', false)
    },
    changeAddVisible: function () {
      this.$emit('add_visible_false', false)
    },
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
      this.course.avatar = response
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
