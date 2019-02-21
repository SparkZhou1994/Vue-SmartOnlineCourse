<template>
  <el-container>
    <el-header>
      <IndexHeader></IndexHeader>
    </el-header>
    <el-main>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in carousel_img_src_list" :key="item.index">
          <img :src="item.url"/>
        </el-carousel-item>
      </el-carousel>
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
      carousel_img_src_list: [
        {url: '../../assets/image/index/index_ad_01.jpg', index: 1},
        {url: '../../assets/image/index/index_ad_02.jpg', index: 2},
        {url: '../../assets/image/index/index_ad_03.jpg', index: 3}
      ]
    }
  }
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
