<template>
  <div id="index">
      <myhead isHome='true'></myhead>
      <div class="content">
        <img class="con-middle" src="../assets/imgs/con-middle.png" alt="热泉">
        <div class="con-right">
          <ul class="ul-btn">
            <li class="con-btn1" @click="toPage('apply')">
              <img src="../assets/imgs/coo.png" class="left-icon">
              <div>品牌/合作</div>
              <img src="../assets/imgs/right.png" class="right-icon">
            </li>
            <li class="con-btn1" @click="toPage('skill')">
              <img src="../assets/imgs/goods.png" class="left-icon">
              <div>商品/技术</div>
              <img src="../assets/imgs/right.png" class="right-icon">
            </li>
            <li class="con-btn2" @click="toPage('apply')">
              <img src="../assets/imgs/client.png" class="left-icon">
              <div>客户登记</div>
              <div class="free">免费</div>
            </li>
            <li class="con-btn2" @click="toPage('consult')">
              <img src="../assets/imgs/buy.png" class="left-icon">
              <div href="#">报价 订购</div>
              <div class="free">免费</div>
            </li>
          </ul>
          <ul class="ul-notice">
            <div class="h-notice">              
              <div>
                <img src="../assets/imgs/notice.png" class="icon-notice">
                <span> 热泉港 公告</span>
              </div>
              <p class="notice-more">更多 ></p>
            </div>
            <li v-for="(item,index) in notices" :key="index" class="notice-item">
              <a :href="item.url" target="_blank">
                <img src="../assets/imgs/tri2.png" class="notice-icon">
                {{item.name}}
              </a>
              <div class="time">
                {{item.created_at  | time}}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="newRecommend w1200">
        <p>新品推荐</p>
        <div class="box">
          <ul class="tab">
            <li v-for="(item,index) in newItems"
            :key="index" :class=" index === curIndex ? 'activeTab' :'' "
            @click="changeCurIndex(index)">
              {{item.cls}}
            </li>
          </ul>
          <ul class="items">
            <li v-for="(item,index) in newItems[curIndex].items"
            :key="index" class="itemBox" @click="detail(curIndex+1,item.id)">
                <img :src="item.img[0]" class="itemImg disb">
                <p class="name">
                  {{item.main}}
                </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="sectionTab w1200">
        <ul class="sec-ul">
          <li v-for="(item,index) in sections"
          :key="index" :class=" index === secIndex ? 'sec-active' :'' "
          @mouseenter="changeSecIndex(index)">
          {{item}}
          </li>
        </ul>
        <div class="sec-con">
          <!-- 尖端科技 -->
          <div v-show="secIndex == 0">
            <div class="tech">
              <div class="tech-box" v-for="(item,index) in topTechs" :key="index">
                <div><img :src="item.image" class="tech-img"></div>               
                <div class="tech-text">
                  <p class="tech-intro">{{item.intro}}</p>
                  <a :href="item.url" class="sec-a tech-a">了解更多</a>
                </div>                
              </div>
            </div>
          </div>
          <!-- 网络研讨会 -->
          <div v-show="secIndex == 1">
            <div class="web">
              <div class="web-left">
                <img src="../assets/imgs/web.png" class="web-logo">
                <p class="web-title">近期网络讲座报名</p>
                <p>干细胞培养及基因编辑前沿应用联合研讨会</p>
                <p class="web-text">试剂对色谱、质谱检测结果的影响</p>
                <a href="#" class="sec-a">观看讲座</a>
              </div>
              <div class="web-right">
                <div class="web-box"  v-for="(item,index) in webs" :key="index">
                  <div class="web-t">
                    <p class="webRight-title tech-title">{{item.title}}</p>
                    <p class="web-text">{{item.intro}}</p>  
                    <a :href="item.url" class="sec-a">观看讲座</a>
                  </div>
                  <img :src="item.image" class="web-img">
                </div>
              </div>
            </div>
          </div>
          <!-- 食药资讯 -->
          <div v-show="secIndex == 2">
            <div class="food">
              <div class="food-box" v-for="(item,index) in foods" :key="index">
                <div><img :src="item.image" class="food-img"></div>
                <div class="food-t">
                  <p class="food-title">{{item.title}}</p>
                  <p class="food-text">{{item.subtitle}}</p>
                  <!-- <a href="#" class="sec-a tech-a">了解更多</a> -->
                </div>
              </div>
            </div>
          </div>
          <!-- 最新应用 排版跟食药一样-->
          <div v-show="secIndex == 3">
            <div class="newsApp food">
              <div class="food-box" v-for="(item,index) in newApps" :key="index">
                <div><img :src="item.image" class="food-img"></div>
                <div class="food-t">
                  <p class="food-title">{{item.title}}</p>
                  <p class="food-text">{{item.content}}</p>
                  <!-- <a href="#" class="sec-a tech-a">了解更多</a> -->
                </div>
              </div>
            </div>
          </div>
          <!-- 联系我们 -->
          <div v-show="secIndex == 4" class="sec-consult">
            <div class="consult">
              <p>各种咨询：未登载商品、询价、订购、售后、技术咨询、客户登记</p>
              <p>&nbsp;&nbsp;&nbsp;请联系：<span class="f-weight">热泉港 客服中心</span></p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电话：020-310-41987</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;邮件：information@yechine.com</p>
              <p>企业地址：广州市海珠区广州大道南325号碧海商业大厦1202</p>
              <p class="slogan">我们将 <span class="f-red">迅速 准确 认真</span> 为宗旨竭诚为您服务！</p>
              <p>营业时间：上午9点-下午6点(周六日,节假日,我公司停业日除外)</p>
            </div>
          </div>
        </div>
      </div>
  </div>

</template>

<script>
import myhead from "./common/header.vue";
import axios from "axios";
const url = require("../url").url;
export default {
  name: "Index",
  components: {
    myhead
  },
  created() {
    //获取新品推荐
    axios
      .get(url.newGoods, { params: { type: 1 } })
      .then(response => {       
        let data1 = response.data.data;       
        this.newItems[0].items = data1;      
      })
      .catch(error => {
        console.log(error);
        alert("网络错误，不能获取新品推荐数据");
      });
    //获取公告
    axios
      .get(url.notices, {params: { is_index: 1 } })
      .then(response => {        
        this.notices = response.data.data;             
      })
      .catch(error => {
      console.log(error);
      alert("网络错误，不能获取公告数据");
      });
    //获取尖端科技
    axios
      .get(url.topTech, {params: { is_index: 1 } })
      .then(response => {               
        this.topTechs = response.data.data;             
      })
      .catch(error => {
      console.log(error);
      alert("网络错误，不能获取尖端科技数据");
      });
    //获取网络研讨会
    axios
      .get(url.web, {params: { is_index: 1 } })
      .then(response => {               
        this.webs = response.data.data;             
      })
      .catch(error => {
      console.log(error);
      alert("网络错误，不能获取网络研讨会数据");
      });
    //获取食药资讯
    axios
      .get(url.food, {params: { is_index: 1 } })
      .then(response => {               
        this.foods = response.data.data;                    
      })
      .catch(error => {
      console.log(error);
      alert("网络错误，不能获取食药咨询数据");
      }); 
      //最新应用
      axios
        .get(url.newApp, {params: { is_index: 1 } })
        .then(response => {               
          this.newApps = response.data.data;            
        })
        .catch(error => {
        console.log(error);
        alert("网络错误，不能获取最新应用数据");
        });
  },
  data() {
    return {
      // 控制新品推荐显示的item。初始化为0
      curIndex: 0,
      // 控制tab板块显示的板块，初始化为4->联系我们
      secIndex:4,
      newItems: [
        {
          cls: "容器",
          items: []
        },
        {
          cls: "计量器具/试验器具/耗材",
          items: []
        },
        {
          cls: "实验用品/材料/试剂",
          items: []
        },
        {
          cls: "通用仪器/实验仪器",
          items: []
        },
        {
          cls: "理化前处理/分析仪器",
          items: []
        },
        {
          cls: "微生物检测",
          items: []
        },
        {
          cls: "个人防护产品系列",
          items: []
        }
      ],
      sections: [
        "尖端科技",
        "网络研讨会",
        "食药资讯",
        "最新应用",
        "联系我们"
      ],
      //公告，默认显示4条，点击更多获取更多
      notices:[],
      //尖端科技视频，默认显示4条
      topTechs:[],
      //网络研讨会
      webs:[],
      //食药咨询
      foods:[],
      //最新应用
      newApps:[]
    };
  },
  filters: {
    time(value){
      return value.split(' ')[0]
    }
  },
  methods: {
    toPage(value){
      let session = sessionStorage.getItem("user");
      if (!session) {
        alert('请先登录')
      }else{
        this.$router.push(value)
      }    
    },
    changeCurIndex(index) {
      this.curIndex = index;
      let i = index+1;
      axios
        .get(url.newGoods, { params: { type: i } })
        .then(response => {
          let data1 = response.data.data;
          this.newItems[index].items = data1;
        })
        .catch(error => {
          console.log(error);
          alert("网络错误，不能访问");
        });
    },
    changeSecIndex(index) {
      this.secIndex = index;     
    },
		detail(first_type,id){
			this.$router.push({ path: 'detail',query:{
				flag:first_type,
				id
			}}) 			
		}
  }
};
</script>

<style scoped>
.disb {
  display: block;
}
.w1200{
  width: 80vw;
  margin: 0 auto;
  min-width: 1200px;
}
/* 公告和主图 */
.content {
  display: flex;
  height: 340px;
  margin:5px auto;
  width: 80vw;
  min-width: 1200px;
}
.con-middle {
  margin-left: 237px;
  border: 1px #d5d5d5 solid;
  flex-grow: 1;
}
.con-right {
  min-width: 240px; 
  margin-left: 10px;
  padding: 5px 10px;
  border: 1px #d5d5d5 solid;
  flex-grow: 2;
}
/* 新品推荐 */
.newRecommend {
  margin: 20px auto;
  font-size: 12px;
}
.newRecommend > p {
  text-align: left;
  color: #e40011;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
}
.newRecommend .box {
  border: 1px solid #ddd;
}
.tab {
  text-align: left;
  border-top: 2px solid #e70012;
  overflow: hidden;
  display: flex;
}
.tab > li {
  text-align: center;
  line-height: 42px;
  height: 42px;
  border: 1px solid #ddd;
  background-color: #f4f4f4;
  flex-grow: 1;
}
.tab li.activeTab {
  border-bottom: none;
  color: #e70012;
  background-color: #fff;
}
.items {
  text-align: left;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
}
.itemBox {
  width: 194px;
  height: 200px;
  text-align: center;
  font-size: 12px;
}
.itemImg {
  width: 140px;
  height: 140px;
  margin: 10px 30px;
}
.name {
  margin: 15px 30px;
}
.name {
  font-weight: 600;
}
.name:hover {
  color: red;
}
/* 公告按钮部分 */
.left-icon,.right-icon{
  width: 20px;
  height: 20px;
}
.con-btn1{
  cursor:pointer;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  height: 56px;
  align-items: center;
  justify-content: space-around;
  color: #fff;
  background-color: #DB0111;
  margin-bottom: 5px;
}
.con-btn2{
  cursor:pointer;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 600;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  display: flex;
  border: 1px #d5d5d5 solid;
  margin-bottom: 5px;
  background: -webkit-linear-gradient(#fff 10%, #e4e4e4); 
  background: -o-linear-gradient(#fff 10%, #e4e4e4); 
  background: -moz-linear-gradient(#fff 10%, #e4e4e4); 
  background: linear-gradient(#fff 10%, #e4e4e4); 
}
.free{
  color: #fff;
  background-color: #DB0111;
  font-size: 12px;
  padding: 3px 5px;
}
.icon-notice{
  width: 15px;
  height: 15px;
}
.h-notice{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 2px;
  border-bottom: 1px dashed #ddd;
}
.notice-more{
  font-size: 12px;
}
.notice-item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin-top: 2px;
  margin-bottom: 3px;
}
.notice-icon{
  width: 5px;
  height: 5px;
}
.time{
  font-size: 12px;
  color: #808080;
}
/* tab板块 */
.sec-a{
  color: rgb(0, 119, 229);
  font-size: 14px;
  text-align: left;
}
/* 联系我们 */
.sectionTab{
  margin-bottom: 60px;
}
.sec-ul{
  margin-top: 30px;
  border: 1px solid #EE2D36;
  border-bottom: 0;
  display: flex;
  background-color: #EE2D36;
  height: 40px;
  line-height: 40px;
}
.sec-ul>li{
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  flex-grow: 1;
}
.sec-ul>.sec-active{
  color: black;
  background-color: #fff;
}
.sec-con{
  height: 470px;
  border: 1px solid #EE2D36;
  border-top: 0;
}
.sec-consult{
  padding: 45px 80px;
  height: 100%;
  box-sizing: border-box;
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
  font-size:18px;
  font-weight: 600;
}
.f-red{
  font-weight: 600;
  color: red; 
}
.slogan{
  font-size:18px;
  margin-top: 30px;
}
/* 尖端科技 */
.tech{
  display: flex;
  flex-wrap:wrap;
  padding: 50px;
}
.tech-box{
  text-align: left;
  width: 43%;
  display: flex;
  margin: 0 50px 50px 0;
}
.tech-a{
  position: absolute;
  bottom: 0;left: 0;
}
.tech-title,.web-title,.food-title{
  font-weight: 600;
  font-size: 16px;
  text-align: left;
}
.tech-text{
  position: relative;
  font-size: 15px;
  margin-left: 40px;
  max-width:290px;
}
.tech-img{
  width: 180px;
  height: 130px;
}
/* 网络研讨会 */
.web{
  text-align: left;
  display: flex;
  padding: 50px;
}
.web-box{
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.web-t{
  margin-right: 30px;
}
.web-title{
  margin: 15px 0;
}
.web-text{
  margin: 15px 0;
  max-width:530px;
}
.web-right{
  margin-left: 30px;
}
.web-img,.food-img{
  width: 140px;
  height: 110px;
}
/* 食药咨询  */
.food{
  padding: 30px 50px;
  text-align: left;
}
.food-box{
  display: flex;
  text-align: left;
  margin-bottom: 30px;
}
.food-t{
  margin-left: 30px;
  position: relative;
}
.food-text{
  margin: 5px 0;
  max-width:943px;
}
</style>
