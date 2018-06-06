<template>
  <div id="header">
    <nav class="nav">
      <ul class="left-ul">
				<li>
					<img class="icon" src="../../assets/imgs/apply.png" >
					<router-link to="/jobs">招贤纳士</router-link>	
					<span class="line">|</span>
				</li>
				<li>
					<img class="icon" src="../../assets/imgs/phone2.png" >
					020-310-41987
					<span class="line">|</span>
				</li>
				<li>
					<img class="icon" src="../../assets/imgs/email.png" >
					information@yechine.com
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
				<li id="user" v-show="user">
          <img src="../../assets/imgs/me.png" class="icon">
					<router-link to="/me">基础信息</router-link>						
					<!-- <img src="../../assets/imgs/tri.png" class="icon"> -->
					<span class="line">|</span>
				</li>
				<li>
					<img src="../../assets/imgs/sm-logo2.png" class="icon">
          <router-link to="/">Yechine官网</router-link>						
					<span class="line">|</span>		
				</li>
				<li>
					<img src="../../assets/imgs/flag.png" class="icon">
					<router-link to="/about">【公司简介】</router-link>			
				</li>
			</ul>
    </nav>
		<div class="h30"></div>
		<div class="tabBox">
			<div class="logoBox" @click="toPage('/')">
				<img src="../../assets/imgs/LOGO.png" >
			</div>
			<div class="codeBox">
				<img src="../../assets/imgs/code.png">
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
							<li v-for="(item2,index2) in desItem" :key="index2" class="second-content">
                <span class="second-t" @click="searchByType(desIndex+1,item2)">{{item2}}</span>
                <span class="line2">|</span>	
                <span class="third-t" @click="searchByType(desIndex+1,item2,item3)"
                v-for="(item3,index3) in  thirdItem[index2]" :key="index3">
                  {{item3}}
                  <span class="line2" v-show="index3 != (thirdItem[index2].length-1)">|</span>
                </span> 
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
						<div class="search-btn" @click="searchByName(searchData.all)">搜索</div>
					</div>
					<div class="bar-box">
						<div class="search-key">
							名称搜索
						</div>
						<input type="text" v-model="searchData.name" 
						placeholder="请输入您要搜索的产品名称" class="search-input">
						<div class="search-btn" @click="searchByName(searchData.name)">搜索</div>
					</div>
					<ul class="hot">
						<div class="icon p-hot">HOT</div>
						热门关键词：
						<li v-for="(item,index) in hots" 
            :key="index" @click="searchByName(item)">
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
        name: "",
        all:""
      },
      hots: ["灭菌器", "离心管", "手套", "pH计", "活性口罩"],
      //产品分类，cls一级菜单，des二级菜单，third三级菜单
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
          ],
          third:[
            ["PP容器","PE容器","氟树脂容器","其他树脂容器"],
            ["密封盒","密封罐/水桶","盆/托盘","小盒","清洗瓶/手压泵试剂瓶/喷雾器"],
            ["螺口瓶/试剂瓶","标准瓶/滴瓶","样品瓶","微量瓶/安瓿瓶"],
            ["不锈钢盆/托盘","不锈钢罐/小型容器/不锈钢烧杯","不锈钢桶","搪瓷/铝容器/其他容器"],
            ["冷冻盒","保温/报冷容器","大型容器/水箱"],
            ["周转箱","折叠周转箱","大型容器/水箱"]         
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
          ],
          third:[
            ["烧瓶类","可分离式烧瓶 ","萃取器/冷凝器","玻璃管/连接管", 
            "分液漏斗","过滤器具","保存瓶/容器 ","玻璃皿/清洗瓶"],
            ["烧杯/量杯","一次性烧杯 ","量瓶 ","量筒 ","量杯 ","滴定管","吸移管","吸液管"],
            ["试管","离心管","试管架","漏斗"],
            ["定性滤纸/定量滤纸 ","滤膜","过滤器架/过滤装置 ","分注器过滤"],
            ["橡胶塞","硅胶塞 ","瓶塞/铝盖 ","橡胶带","胶头"],
            ["培养皿/培养容器 ","微型管/培养板 ","比色皿","pH试纸/其他试纸 ","载玻片/盖玻片 ",
            "微生物检查用品 ","包埋/色层分析","染色盘"],
            ["移液器/吸头 ","移液槽","分注器（瓶型）","微量进样器","微量进样泵"],
            ["座架/夹具/千斤顶 ","镊子/剪刃 ","勺子 ","抹刀/刮刀/搅拌棒","铲子/钳子 ","钨芯记号笔 ",
            "燃烧器/丝网/三脚架 ","实验器具保管/烧瓶垫/漏斗架","坩埚/蒸发皿 ","乳钵/粉碎球"]
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
          ],
          third:[
            ["氟树脂管","树脂管 ","硅胶管 ","排气管/真空软管 ",
            "氟树脂接头 ","各种树脂接头","管用配件"],
            ["金属材料/无机材料","玻璃材料","树脂材料","橡胶材料"],
            ["胶粘剂","润滑剂"] ,
            ["防护用品 ","胶带 ","吸液管 ","洗净/清扫用品 ",
            "秒表/计时器","其他常用品 ","收纳/保管 ","台车"],
            ["电子文具","办公用品","切割刀"],
            ["刷子","海绵刷","毛刷","清洗剂","网筐"]                        
          ],

        },
        {
          cls: "通用仪器/实验仪器",
          des: [
            "培养箱系列",
            "二氧化碳培养箱",
            "光照培养箱/人工气候箱",
            "恒温恒湿箱/温控产品",
            "振荡器/振荡培养箱系列",
            "干燥箱系列",
            "真空干燥系列",
            "水槽/水浴锅/恒温循环槽系列",
            "药品稳定性试验箱系列",
            "试验箱系列",
            "移液产品",
            "蒸馏混合",
            "离心系列",
            "纯水机系列",
            "净化工作台/生物安全柜系列",
            "灭菌锅系列",
            "显微镜"
          ],
          third:[
            ["霉菌/生化培养箱 ","低温培养箱（保存箱） ","电热恒温培养箱","隔水恒温培养箱 ",
            "微生物培养箱（自然对流）"],
            ["小型CO2培养箱","CO2培养箱","普及型CO2培养箱","CO2培养箱（触摸屏）"],
            ["光照培养箱（可编程）","人工气候培养箱（可编程）","光照培养箱（强光）",
            "人工气候培养箱（强光）"],
            ["简易型","高档型（触摸屏）","专业型"],
            ["回旋/加热回旋振荡器","恒温培养摇床","恒温振荡器（液晶屏）",
            "大型恒温振荡器（液晶屏）","落地振荡器（液晶屏）","摇瓶机"],
            ["精密型鼓风干燥箱,","高温鼓风/自然对流干燥箱,","鼓风干燥箱,","干培两用箱"],
            ["台式真空干燥箱","立式真空干燥箱","真空度数显并控制真空干燥箱","多箱真空干燥箱"],
            ["加热循环槽","制冷和加热循环槽","电热恒温水槽","恒温/低温振荡水槽/油浴锅",
            "水浴锅/精密恒温水槽","恒温水槽水浴锅"],
            ["药品稳定性试验箱","综合药品稳定性试验箱","大型综合药品稳定性试验箱","多箱综合药品稳定性试验箱",
            "带紫外光检测与控制药品稳定性试验箱","步入式药品稳定试验箱"],
            ["老化试验箱","高低温（交变）试验箱","高低温（交变）湿热试验箱","氙灯耐气候试验箱","紫外光耐气候试验箱","盐雾腐蚀试验箱"],
            ["电动移液器","手动移液器","大容量电动移液器","大容量手动移液器和助吸器","连续分配器","电子滴定器","电子瓶口分液器"],
            ["旋转蒸发仪","加热型磁力搅拌器","加热板","磁力搅拌器","顶置式电子搅拌器","混匀仪","96孔板混匀仪","旋转混匀仪","滚轴混匀仪","摇床","均质分散机"],
            ["掌上离心机","高速微量离心机","低速离心机"],
            ["纯水/超纯水系统（触控）","中央纯水系统","纯水输送系统","纯水拓展组件"],
            ["垂直流型净化工作台","水平流型净化工作台","Ⅱ级A2型生物安全柜","Ⅱ级型B2型生物安全柜"],
            ["手提式压力蒸汽灭菌锅","立式压力灭菌锅","卧式压力蒸汽灭菌锅高压灭菌锅除臭剂"],
            ["实体/金属显微镜","生物显微镜","数字显微镜","冷光源"]

          ],
          brand:["上海一恒","DLAB/大龙兴创","BOXUN/上海博讯","上海比目","ASONE亚速旺"]
        },
        {
          cls: "理化前处理/分析仪器",
          des: [
            "有机样品前处理",
            "无机样品前处理",
            "分析仪器",
            "实验室设备",
            "配件及耗材",
          ],
          third:[
            ["HPSE高效快速溶剂萃取系统","全自动均质系统","全自动固相萃取系统",
            "手动固相萃取","全自动浓缩产品","凝胶净化系统"],
            ["微波消解萃取系统","超级微波化学平台","微波灰化","微波合成",
            "激光剥蚀固体进样系统","ICP/ICP-MS专业雾化系统","ICP/ICP-MS专业自动进样器"],
            ["紫外/可见分光光度计","高效液相色谱系统","全自动测汞仪","lsotopx同位素质谱仪"],
            ["循环水冷冷却器","微控数显电热板","微波消解赶酸器","光波加热仪",
            "智能防腐振荡水浴","磁力加热搅拌器","DigBlock消解仪","AutoDigBlock全自动消解仪",
            "尿碘消解仪","水质消解仪","智能旋转蒸发仪","数字真空控制器","真空泵","静音罩",
            "自动酸纯化系统和超痕量容器清洗系统"],
            ["ICP耗材与配件","SPE萃取盘","SPE萃取柱","AA耗材","其他配件"]
          ],
          brand:["LABTECH/莱伯泰科"]
        },
				{
					cls: "微生物检测",
					des:[
            "样品制备及分析",
            "药品微生物检验（2015版）",
            "化妆品检验系列",
            "诊断血清",
            "质谱鉴定",
            "生化鉴定"
          ],
          third:[
            ["干粉培养基","微生物合成培养基","预灌装培养基"],
            ["无菌检查法","控制菌检查法","抑菌剂效力检查法","微生物计数法"],
            ["样品制备、增菌及细菌总数测定","金黄色葡萄球菌","粪大肠菌群","绿脓杆菌","霉菌"],
            ["国产诊断血清","泰国S&A公司诊断血清"],
            ["全自动微生物质谱检测系统"],
            ["生化鉴定套装产品","行业标准系列"],
          ],
          brand:["安图生物","LAND BRIGGE/北京陆桥","interscience"],
        },
				{
					cls: "个人防护产品系列",
					des: [
            "手部系列",
            "面部防护系列",
            "服装类",
            "药灾/防灾对策用品",
            "胶带/包装/各种袋",
            "无尘环境相关产品",
            "防静电相关产品",
            "清扫/卫生关联产品",
            "收纳/搬运相关产品",
            "电子器件/零件"
          ],
          third:[
            ["乳胶手套 ","丁腈手套 ","聚氯乙烯手套 ","聚乙烯手套 ","耐药/耐溶剂/耐油手套","手套箱手套 ","耐热/防割裂手套","作业用手套"],
            ["一次性口罩","防尘面罩","防毒面罩","防护镜 ","防护镜用备件"],
            ["白大衣","防护服/一次性作业服 ","围裙 ","帽/袖套/鞋套 ","安全帽 ","耳塞/耳罩/安全带","长筒皮靴/安全靴"],
            ["药品托盘/防护网 ","吸收用品","洗眼器 ","其他防灾用品"],
            ["实验室用胶带/标签","氟树脂胶带","结合胶带","遮蔽胶带","密封胶带","绝缘/导电胶带","铝胶带","封口机","塑料袋","缠绕膜",""],
            ["过滤装置","微粒子计数器 ","无尘衣","无尘室用手套 ","无尘靴"],
            ["静电测定器 ","离子发生器","防静电袋","除静电刷"],
            ["灭菌/消毒保管箱","导电垫/薄膜"],
            ["手推车","托盘/托盘车","保管箱/台车","收纳盒"],
            ["晶圆盒","真空镊子","精密镊子","特殊镊子 ","塑料镊子","喷枪/空气枪"],
          ],
          brand:["3M ","AS ONE/亚速旺 ","CRECIA pig/纽匹格、","SAFEWARE/安赛瑞","Medicom麦迪康"]
        }
      ],
      desItem: [],
      thirdItem:[],
      desIndex:-1,
    };
  },
  methods: {
    changeDesItem(index) {
      this.desIndex = index
      //响应式更改数组->二级菜单
      this.desItem = this.items[index].des
      //更新三级菜单
      this.thirdItem = this.items[index].third
    },
    searchByName(value){
      let query = {
        name:value,
        page:1
      }  
      this.$router.push({ path: 'search', query})
    },
    //参数为1，2，3级分类
    searchByType(cls1,cls2,cls3){     
      let query = {
        flag:cls1,
        second_type:cls2,
        third_type:cls3,
        page:1,
        first:true
      }
      this.$router.push({ path: 'search', query})     
    },
    toPage(value){
      this.$router.push(value)  
    },
    cancelUser(){
      this.user = ''
      sessionStorage.removeItem('user')
      alert('注销成功')
    },
    
  },
  created(){   
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
  z-index: 1500;
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
  height: 115px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logoBox,
.logoBox img {
  width: 500px;
}
.codeBox,
.codeBox img {
  width: 88px;
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
  background: #fff;
  position: relative;
  border: 1px #d4d4d4 solid;
  display: none;
	padding: 10px 0;
	box-sizing: border-box;
	font-size: 14px;
  height: 345px;
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
  cursor: pointer;
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
  min-height: 430px;
  border: 2px #cd0010 solid;
  background-color: #ffffff;
	padding: 10px;
}
.second-menu>li{
	/* height: 18px; */
  line-height: 18px;
	text-indent: 6px;
  color: #3c3c3c;
  font-size: 12px;
	text-align: left;
	/* margin-bottom: 5px; */
}
.line2{
  color: #c6c6c6;
  margin:0 5px;
}
.second-t{
  color: #555;
  font-weight: 600;
  margin-right: 5px;
  margin-bottom: 5px;
}
.third-t{
  color: #333;
  margin-right:5px;
  display: block;
}
.second-t:hover,.third-t:hover{
  text-decoration:underline;
  cursor: pointer;
}
.second-content{
  display: flex;
  flex-wrap: wrap;
  font-size: 13px;
  padding: 5px;
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
  margin-top: 10px;
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
.hot>li:hover{
  text-decoration: underline;
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
