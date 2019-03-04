<template>
  <div>
    <el-table :data="homeworkData" style="width: 100%" max-height="250">
      <el-table-column fixed prop="homeworkId" label="编号" width="150">
      </el-table-column>
      <el-table-column prop="homeworkName" label="作业名" width="150">
      </el-table-column>
      <el-table-column prop="attachment" label="文件名" width="150">
      </el-table-column>
      <el-table-column prop="describe" label="描述" width="150">
      </el-table-column>
      <el-table-column prop="batch" label="批次" width="150">
      </el-table-column>
      <el-table-column prop="endTime" label="截止时间" width="150">
      </el-table-column>
      <el-table-column prop="submitTime" label="提交时间" width="150">
      </el-table-column>
      <el-table-column prop="score" label="分数" width="150">
      </el-table-column>
      <el-table-column prop="range" label="状态" width="150">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">下载</el-button>
          <el-button @click="homeworkUpload(scope.row)" v-show="!user.own" type="text" size="small">上传</el-button>
          <el-button @click="homeworkGrade(scope.row)" v-show="user.own" type="text" size="small">评分</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="作业上传" :visible.sync="homework_upload_form_visible">
      <HomeworkUpload :homework_upload_form_visible_prop="homework_upload_form_visible" v-on:homework_upload_visible_false="changeHomeworkUploadVisibleFalse($event)"></HomeworkUpload>
    </el-dialog>
    <el-dialog title="作业评分" :visible.sync="homework_grade_form_visible">
      <HomeworkGrade :homework_grade_form_visible_prop="homework_grade_form_visible" v-on:homework_grade_visible_false="changeHomeworkGradeVisibleFalse($event)"></HomeworkGrade>
    </el-dialog>
  </div>
</template>

<script>
import HomeworkUpload from '../homework/HomeworkUpload'
import HomeworkGrade from '../homework/HomeworkGrade'

export default {
  name: 'HomeworkTable',
  components: {HomeworkUpload, HomeworkGrade},
  data () {
    return {
      user: {own: true},
      homework_upload_form_visible: false,
      homework_grade_form_visible: false,
      homeworkData: [
        {homeworkId: 1, homeworkName: 'Java', attachment: 'pom.xml', describe: 'Maven Homework', batch: 1, endTime: '2019-02-02 11:15:15', submitTime: '2019-02-02 11:15:14', score: 80, range: '按时提交'},
        {homeworkId: 1, homeworkName: 'Java', attachment: 'pom.xml', describe: 'Maven Homework', batch: 1, endTime: '2019-02-02 11:15:15', submitTime: '2019-02-02 11:15:14', score: 80, range: '按时提交'}
      ]
    }
  },
  methods: {
    handleClick (row) {
      console.log(row)
    },
    homeworkUpload (row) {
      console.log(row)
      this.homework_upload_form_visible = true
    },
    changeHomeworkUploadVisibleFalse (msg) {
      this.homework_upload_form_visible = msg
    },
    homeworkGrade (row) {
      console.log(row)
      this.homework_grade_form_visible = true
    },
    changeHomeworkGradeVisibleFalse (msg) {
      this.homework_grade_form_visible = msg
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
