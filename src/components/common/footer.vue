<template>
  <footer> 
      <div class="h40"></div>
      <div class="wrap">
          <div class="imgBox">
              <img src="../../assets/imgs/fw.jpg" alt="">
          </div>
          <p class="first-p">版权所有@2015-2018 asonline.cn 沪ICP备15005493号-1</p>
          <p class="foot-p"><a href="#">泸公网安备 311500505号</a></p>
          <div class="policeImgBox">
              <img src="../../assets/imgs/bottom.jpg" alt="">
          </div>
      </div>
  </footer>
</template>

<script>
export default {
  
}
</script>
<style scoped>
    .h40{
        height: 40px;
        background-color: #F7F7F7;
    }
    .wrap{
        width: 1000px;
        height: 275px;
        margin: 0 auto;
        padding-bottom: 35px;
        font-size: 12px;
    }
    .imgBox{
        height: 60px;
        padding: 30px 0 20px 0;
        border-bottom: 1px #ddd solid;
        color: #666666;
        margin-bottom: 20px;
    }
    .imgBox>img{
        width: 752px;
        height: 43px;
    }
    .policeImgBox{
        margin-top: 40px;
    }
    .policeImgBox>img{
        width: 123px;
        height: 49px;
    }
    .first-p{
        color: #666666;
        font-size: 12px;
    }
    .foot-p{
        margin-top: 20px;
    }
    .foot-p>a{
        
        font-size: 12px;
        color: #939393;
    }
</style>
