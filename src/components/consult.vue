<template>
  <div id="consult">
    <myhead></myhead>
    <div class="bar">
      <router-link to="/">Hot spring首页</router-link>
      <span>></span>
      <router-link to="/consult">在线客服</router-link>
    </div>
    <div class="con">
      <div class="consult">
        <p>各种咨询：未登载商品、询价、订购、售后、技术咨询、客户登记</p>
        <p>&nbsp;&nbsp;&nbsp;请联系：<span class="f-weight">热全港 客服中心</span></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电话：800-988-0270</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;邮件：hostpring@163.com</p>
        <p>企业地址: 广州市海珠区广州大道南325号碧海商业大厦1202</p>
        <p class="slogan">我们将 <span class="f-red">迅速 准确 认真</span> 为宗旨</p>
        <p>营业时间：上午9点-下午6点(周六日,节假日,我公司停业日除外)</p>
      </div>      
    </div>
  </div>
</template>

<script>
import myhead from "./common/header.vue";
export default {
  name: "Consult",
  components: {
    myhead
  },
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bar{
  height: 30px;
  line-height: 30px;
  text-align: left;
  font-size: 14px;
  padding: 0 10%;
  margin: 20px 0;
}
.bar>span{
  margin: 0 10px;
}
.con{
  padding: 0 10%;
}
.consult{
  font-size: 15px;
  text-align: left;
  box-sizing: border-box;
  background: url("../assets/imgs/consult.png") no-repeat;
  background-position: top right;
  height: 350px;
  background-color: #eeeeee;
  padding: 50px 40px;
}
.consult>p{
  margin-bottom: 20px;
}
.f-weight{
  font-size: 16px;
  font-weight: 600;
}
.f-red{
  font-weight: 600;
  color: red; 
}
.slogan{
  margin-top: 30px;
}
</style>
