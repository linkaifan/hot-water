<template>
  <div id="header">
    <nav class="nav">
      <ul class="left-ul">
				<li>
					<img class="icon" src="../../assets/imgs/phone.png" >
					800-988-0270
					<span class="line">|</span>
				</li>
				<li>
					<img class="icon" src="../../assets/imgs/phone2.png" >
					020-3104-1987
					<span class="line">|</span>
				</li>
				<li>
					<img class="icon" src="../../assets/imgs/email.png" >
					hostpring@163.com
					<span class="line">|</span>
				</li>
			</ul>
			<div class="loginBox" v-show="!user">
				欢迎来到 热泉港， 请
				<router-link to="login">[登录]</router-link>
				<router-link to="register">[注册]</router-link>
			</div>
      <div class="userBox" v-show="user">
				尊敬的 {{user}} , 欢迎来到 热泉港 
        <span @click="cancelUser">[注销]</span>
			</div>
			<ul class="right-ul">
				<li>
					账号中心
					<!-- <img src="../../assets/imgs/tri.png" class="icon"> -->
					<span class="line">|</span>
				</li>
				<li>
					<img src="../../assets/imgs/sm-logo.png" class="icon">
          <router-link to="/">hot-water官网</router-link>						
					<span class="line">|</span>		
				</li>
				<li>
					<img src="../../assets/imgs/flag.png" class="icon">
					关于我们
					
				</li>
			</ul>
    </nav>
		<div class="h30"></div>
		<div class="tabBox">
			<div class="logoBox">
				<img src="../../assets/imgs/LOGO.png" >
			</div>
			<div class="codeBox">
				<img src="../../assets/imgs/code.jpg">
			</div>
		</div>
		<div class="searchBox">
			<div class="menuBox" >
				<p class="menu-p">
					全部产品分类 
					<img src="../../assets/imgs/white-tri.png" class="white-tri">
				</p>
				<div class="show-menu">
					<ul class="first-menu" :class="{firstShow:isHome}">						
						<li v-for="(item,index) in items" :key="index"
						@mouseenter="changeDesItem(index)" class="firstLi">
							<span>{{item.cls}}</span>
						</li>
						<ul class="second-menu">
							<li v-for="(item,index) in desItem" :key="index">
								<p>{{item}}</p>
								<!-- <div class="des-menu"></div> -->
							</li>
						</ul>
					</ul>
				</div>				
			</div>
			<div class="secondBox">				
				<div class="search-icon-box">
					<img src="../../assets/imgs/search.png" class="icon search-icon">
				</div>
			</div>
			<form action="get">
				<div class="mid-search">
					<div class="bar-box">
						<div class="search-key">
							全部
						</div>
						<input type="text" v-model="searchData.all" 
						placeholder="请输入您要搜索的产品名次，型号" class="search-input">
						<div class="search-btn">搜索</div>
					</div>
					<div class="bar-box">
						<div class="search-key">
							名称搜索
						</div>
						<input type="text" v-model="searchData.name" 
						placeholder="请输入您要搜索的产品名称" class="search-input">
						<div class="search-btn" @click="searchByName">搜索</div>
					</div>
					<ul class="hot">
						<div class="icon p-hot">HOT</div>
						热门关键词：
						<li v-for="(item,index) in hots" :key="index">
							{{item}}
						</li>
					</ul>
				</div>
			</form>
		</div>
  </div>
</template>

<script>
import axios from "axios";
const url = require("../../url").url;
export default {
  props: {
    isHome: {
      default: false
    }
  },
  data() {
    return {
      //判断登陆
      user:'',
      //搜索数据，绑定input
      searchData: {
        all: "",
        name: "",
      },
      hots: ["灭菌器", "离心管", "手套", "ph", "活性口罩"],
      //产品分类，cls一级菜单，des二级菜单，接口跟后台协商再改
      items: [
        {
          cls: "容器",
          des: [
            "树脂容器",
            "树脂特殊容器",
            "玻璃容器",
            "金属容器",
            "保温/冷冻保存容器",
            "周转箱/大型容器"
          ]
        },
        {
          cls: "计量器具/试验器具/耗材",
          des: [
            "玻璃机器/器具类",
            "玻璃/树脂量器",
            "试管/离心管/漏斗",
            "分离用品/滤纸/过滤器",
            "塞子/盖子",
            "培养/检测机器/相关产品/试纸",
            "分注/移液器",
            "金属/树脂/陶瓷制实验室用品/镊子"
          ]
        },
        {
          cls: "实验用品/材料/试剂",
          des: [
            "管件零件（水管/软管/连接件）",
            "科研用素材/材料",
            "化学制品（油/润滑油/胶水等）",
            "实验室用品/环境用品",
            "文具",
            "刷子/洗涤剂/清洗辅助用品"
          ]
        },
        {
          cls: "通用仪器/实验仪器",
          des: ["培养箱系列", "二氧化碳培养箱"]
        },
        {
          cls: "理化前处理/分析仪器",
          des: ["有机样品前处理"]
        },
				{
					cls: "微生物检测",
					des:["样品制备及分析"]
				},
				{
					cls: "个人防护产品系列",
					des: ["手部/面部防护系列"]
				}
      ],
      desItem: []
    };
  },
  methods: {
    changeDesItem(index) {
      let old = this.desItem;
      let oldLen = old.length;
      let addItems = this.items[index].des;
      //响应式更改数组
      old.splice(0, oldLen, ...addItems);
    },
    searchByName(){
      let param = this.searchData.name
      console.log(param);     
      axios
        .get(url.searchByName, { params: { name: param,flag:1 } })
        .then(response => {
          let data = response.data.data;
          console.log(data);
        })
        .catch(error => {
          console.log(error);
          alert("网络错误，不能访问");
        });
    },
    toPage(value){
      this.$router.push(value)  
    },
    cancelUser(){
      this.user = ''
      sessionStorage.removeItem('user')
      alert('注销成功')
    }
  },
  mounted: function() {
    let user = sessionStorage.getItem('user')
    if (user) {
      this.user = user      
    }
  },
};
</script>

<style>
.h30 {
  height: 30px;
}
#header {
  position: relative;
  /* overflow: hidden; */
}
/* 头部固定nav条 */
.nav {
  font-size: 13px;
  overflow: hidden;
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  height: 30px;
  line-height: 30px;
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  background-color: #f7f7f7;
  border-bottom: 1px #ddd solid;
}
.userBox>span:hover{
  color: red;
}
.left-ul li,
.right-ul li {
  float: left;
}
.icon {
  display: inline-block;
}
.line {
  line-height: 29px;
  color: #c6c6c6;
  margin: 0 10px;
}
.loginBox a {
  color: #cd0010;
}

/* logo行 */
.tabBox {
  padding: 0 10%;
  height: 135px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logoBox,
.logoBox img {
  width: 500px;
  height: 80px;
}
.codeBox,
.codeBox img {
  width: 100px;
}

/* 搜索行 */
.searchBox {
  display: flex;
  padding: 0 10%;
  background-color: #e70012;
  height: 130px;
}
.mid-search{
  margin-top: 15px;
}
/* menu */
.menuBox {
  width: 230px;
}
.menuBox:hover .first-menu {
  display: block;
}
ul.firstShow {
  display: block;
}
.menu-p {
  width: 230px;
  height: 130px;
  line-height: 130px;
  background-color: #cd0010;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "\5FAE\8F6F\96C5\9ED1";
  font-weight: bold;
}
.white-tri {
  width: 9px;
  height: 4px;
}
.show-menu {
  position: relative;
  z-index: 1400;
}
.first-menu {
  position: relative;
  border: 1px #d4d4d4 solid;
  display: none;
	/* height: 340px; */
	padding-top: 10px;
	box-sizing: border-box;
	font-size: 14px;
}
.first-menu > li{
	padding-left: 15px;
	text-align: left; 
	height: 30px;
	line-height: 30px;
}
.first-menu > li:hover {
  background-color: #cd0010;
	color: white;
}
.first-menu:hover .second-menu {
  display: block;
}
.second-menu {
  display: none;
  position: absolute;
  left: 230px;
  top: 0;
  width: 990px;
  height: 430px;
  border: 2px #cd0010 solid;
  background-color: #ffffff;
	padding: 10px;
}
.second-menu>li{
	height: 18px;
  line-height: 18px;
	text-indent: 6px;
  color: #3c3c3c;
  font-size: 12px;
	text-align: left;
	margin-bottom: 5px;
}
/* 搜索icon */
.search-icon-box {
  width: 110px;
  line-height: 130px;
}
.search-icon {
  width: 35px;
}
.hot {
  display: flex;
  color: white;
  font-size: 14px;
  margin-top: 5px;
}
.hot li {
  margin-right: 10px;
}
.p-hot {
  color: red;
  background-color: #fff;
  font-size: 10px;
  line-height: 20px;
  height: 20px;
  padding: 0 5px;
  margin-right: 10px;
}
.bar-box {
  margin-top: 5px;
  display: flex;
  font-size: 12px;
  height: 30px;
  line-height: 30px;
}
.search-input {
  width: 500px;
  text-indent: 6px;
  font-size: 12px;
}
.search-key {
  background: #e4e4e4;
  width: 80px;
  text-indent: 2px;
}
.search-btn {
  color: white;
  font-weight: 600;
  width: 87px;
  background-color: #cd0010;
}
</style>
