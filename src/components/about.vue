<template>
	<div id="about">
		<myhead></myhead>
    <div class="bar">
	  	<router-link to="/">Hot spring首页</router-link>
      	<span>></span>
      <router-link to="/about">关于我们</router-link>
		</div>
		<div class="main">
      <div class="left">
        <p class="left-p" @click="changeCurIndex(0)"
         :class="curIndex == 0?'left-active':''">公司简介</p>
        <p @click="changeCurIndex(1)" :class="curIndex == 1?'left-active':''">配送范围</p>
      </div>
      <div class="division">
        <img src="../assets/imgs/division.png">
      </div>
      <div class="right">
        <div class="h">
          <div class="redtri"></div>
          <span v-show="curIndex == 0">公司简介</span>
          <span v-show="curIndex == 1">配送范围</span>
        </div>
        <div class="content">
          <div class="intro" v-show="curIndex == 0">
            <p class="big-title">
              我们拥有许多专业优势！
            </p>
            <p class="intro-p">
              热泉港全体员工秉持着为生命，为科学理念，怀抱最大的诚意，与客户携手前行。
            </p>
            <p class="intro-title">
              价格低廉
            </p>
            <p class="intro-p">热泉港与国内外 100 家多的品牌供应商保持着非常牢固的合作关系，因此可以为用户提供很有竞争力的价格，
              根据客户要求将对应提出多种厂家的产品方案，并进行比对选择，力求最合适的产品配最优的价格。
            </p>
            <p class="intro-title">
              快捷配送、货期短
            </p>
            <p class="intro-p">
              便捷快速的响应和物流配送更是帮助中国广大的研究人员、技术人员及采购人员节省了大量的调查、
              下单、货期等待的时间，专人负责，专业跟进，提高双方工作效率。
            </p>
            <p class="intro-title">
              预备测试、准确定位
            </p>
            <p class="intro-p">
              为了帮助用户寻找最适用的商品，对于使用频次较高的消耗品，
              热泉港无偿提供试用样品作为客户购买前的参考；对于机器，
              亦可提供样机现场测试或用户寄样品远程样机测试服务，
              让客户能对产品的功能、操作性等进行充分的确认。
            </p>
            <p class="intro-title">
              最小起定量  
            </p>
            <p class="intro-p">
              支持单个起订，货期也非常短，即使是一个烧杯，也是热泉港尊贵的客户。
            </p>       
            <p class="intro-title">
              技术支持 
            </p>
            <p class="intro-p">
              交货时提供产品的说明和技术上的支援，
              如安装培训、使用培训等。在确保客户能完全独自使用前，热泉港不敢有丝毫松懈。
            </p>   
            <p class="intro-title">
              包退包换 
            </p>
            <p class="intro-p">
             如发现有质量或功能如声称的不一致，以及运输过程中产生的破损，
             我们将在一个星期之内进行退换处理，除非是定制及进口产品，则时间待定。
            </p>   
            <div class="box">
              <p class="box-title">
                <img src="../assets/imgs/sm-logo.png">
                YECHINE CORPORATION
              </p>  
              <div class="box-intro">
                <!-- <img src="" alt=""> -->
                <div class="box-img">
                  <img src="../assets/imgs/about.png">
                </div>
                <div class="box-t">
                  广州热泉港生物科技有限公司自 2015 年创业以来，从简单的实验设备耗材发展到理化检测、
                  智能分析系统等生命科学仪器，紧跟生命科学技术发展脚步，致力于为工业和科研提供必不可少的“设备、
                  试剂和消耗品”，促使实验结果更精准更快捷。<br/>涉及商品种类涉及到实验中的设备、
                  处理、耗材、检测、分析、防护等相关产品，涵盖了理化学、生命科学、食品检测、制药和化妆品等多个应用领域。
                </div>
              </div>
            </div>                                                    
          </div>
          <div class="range" v-show="curIndex == 1">
            <img src="../assets/imgs/range.jpg">
          </div>
        </div>
      </div>
    </div>


	</div>
</template>

<script>
import myhead from "./common/header.vue";
export default {
  name: "About",
  components: {
    myhead
  },
  data() {
    return {
      //控制tab切换，0->公司简介，1->配送范围
      curIndex:0
    };
  },
  methods: {
    changeCurIndex(i){
      this.curIndex = i;
    }
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
.main{
  padding: 0 10%;
  display: flex;
  text-align: left;
}
.left{
  border-top: 1px #ddd solid;
  font-size: 16px;
  width: 230px;
  min-height: 750px;
  text-align: right;
  padding-top: 50px;
  padding-right: 15px;
}
.left-p{
  margin-bottom: 43px;
}
.left>p:hover{
  text-decoration: underline;
  color: #cd000f;
}
.left-active{
  color: #cd000f;
  font-weight: 600;
}
.division{
  border-top: 1px #ddd solid;
}
.right{
  padding-top:50px; 
  border-top: 1px #ddd solid;
  width: 845px;
  padding-left: 100px;
}
.h{
  background-color: black;
  color: #ddd;
  font-size: 15px;
  height: 35px;
  line-height: 35px;
}
.big-title{
  color: #E60012;
  font-size: 21px;
  font-weight: bold;
  padding: 7px 10px;
}
.intro-title{
  color: #e70012;
  font-weight: 600;
  padding: 4px 20px;
  margin: 7px 0;
  border: 1px dashed #009845;
}
.intro-p{
  font-size: 14px;
  margin: 0 10px;
  line-height: 1.5;
}
.box{
  margin-top: 20px;
  background-color: #eaeaea;
  padding: 20px 20px;
}
.box-title{
  font-weight: 600;
  font-size: 18px;
}
.box-intro{
  display: flex;
  margin-top: 10px;
}
.box-img>img{
  width: 100px;
  height: 100px;
}
.box-t{
  font-size: 14px;
  width: 650px;
  padding-left: 20px;
  line-height: 1.5;
}
.range{
  padding: 20px 20px;
}
.range>img{
  width: 761px;
}
.redtri{
  float: left;
  margin-right: 15px;
  border-top-width: 14px;
  border-right-width: 12px;
  border-bottom-width: 20px;
  border-left-width: 14px;
  border-style:solid;
  border-color:#cd000f transparent transparent #cd000f;
}
</style>
