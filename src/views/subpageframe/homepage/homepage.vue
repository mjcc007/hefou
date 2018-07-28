<template>
  <div class="bodycontent">
    <el-row>
      <el-col :span="24">
          <div class="home_show1">
            <el-carousel height="430px">
              <el-carousel-item v-for="item in CooperationShowList" :key="item">
                <div class="textcontainer">
                   <h3>{{ item.title }}</h3>
                </div>
                <div class="imageshow">
                   <img :src="item.image">
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
      </el-col>
     </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      CooperationShowList: [
        {
          title: '【漫画 悬崖累马】',
          image: require('../../../assets/images/CooperationShow/1.jpg')
        },
        {
          title: '【2222222】',
          image: require('../../../assets/images/CooperationShow/2.jpg')
        },
         {
          title: '【3333333】',
          image: require('../../../assets/images/CooperationShow/3.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped>
.home_show1{
  margin-top: 30px;
  width: 1100px;
  /* background-color: #b8dcd2; */
  margin-left: 220px;
}
.textcontainer{
  width: 200px;
  height: 30px;
  position: relative;
  margin-right: auto;
  margin-left: auto;
}
.home_show1 img{

}
</style>
