<template>
	<div id="search">
		<myhead></myhead>
		<div class="bar">
      <router-link to="/">Yechine首页</router-link>
      <span>></span>
      <span v-show="NameOrType == 'name'">搜索关键词 <span class="search-content">
				{{byName.name}}</span> 的结果：</span>
      <span v-show="NameOrType == 'type'">
				<span>{{byType.second_type}} </span>	
				<span v-show="byType.third_type">
					&nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;
				</span>			
				<span v-show="byType.third_type" class="t-red">
					{{byType.third_type}} 
				</span>				
			</span>
    </div>
		<div class="result" v-if="!loading">
			<div class="content">
				<div class="search-nav" v-show="items.length">
					<div class="type">
						<div class="nav-cls">分类</div>
						<ul class="nav-ul">
							<li class="nav-name" v-for="(type,index) in types" :key="index"
							@click="byNameAndBrandOrType('',type)">
								{{type}}
							</li>
						</ul>
					</div>
					<div class="brand">
						<div class="nav-cls">品牌</div>
						<ul class="nav-ul">
							<li class="nav-name" @click="byNameAndBrandOrType('all','')">全部</li>
							<li class="nav-name" v-for="(brand,index) in brands" :key="index"
							@click="byNameAndBrandOrType(brand,'')">
								{{brand}}
							</li>
						</ul>
					</div>
					<div class="brand shape" v-show="NameOrType == 'type' && shapes.length">
						<div class="nav-cls">形状</div>
						<ul class="nav-ul">
							<li class="nav-name" @click="byNameAndBrandOrType('','','all')">全部</li>
							<li class="nav-name" v-for="(shape,index) in shapes" :key="index"
							@click="byNameAndBrandOrType('','',shape)">
								{{shape}}
							</li>
						</ul>
					</div>
					<div class="brand capacity" v-show="NameOrType == 'type' && capacitys.length">
						<div class="nav-cls">容量</div>
						<ul class="nav-ul">
							<li class="nav-name" @click="byNameAndBrandOrType('','','','all')">全部</li>
							<li class="nav-name" v-for="(capacity,index) in capacitys" :key="index"
							@click="byNameAndBrandOrType('','','',capacity)">
								{{capacity}}
							</li>
						</ul>
					</div>
					<div class="brand category" v-show="NameOrType == 'type' && categorys.length">
						<div class="nav-cls">类别</div>
						<ul class="nav-ul">
							<li class="nav-name" @click="byNameAndBrandOrType('','','','','all')">全部</li>
							<li class="nav-name" v-for="(category,index) in categorys" :key="index"
							@click="byNameAndBrandOrType('','','','',category)">
								{{category}}
							</li>
						</ul>
					</div>
				</div>
				<div class="null" v-show="!items.length">
					对不起，没有找到相关结果，请修改搜索条件！
				</div>
				<div class="items-box" v-show="items.length">
					<div class="item" v-for="(item,index) in items" :key="index"
					@click="detail(item.first_type,item.id)">
						<img :src="isHaveImg(item.img)" class="item-img">
						<p class="item-name">{{item.main}}</p>
						<!-- <p class="price">￥ <span>{{item.price || 6}} </span> 起</p> -->
					</div>
				</div>
				<div class="btn-box" v-show="maxPage > 1">
					<ul class="btn-ul">
						<li class="btn-n" @click="toPage(1)" v-show="curPage != 1">
							 &lt;&lt;
						</li>
						<li class="btn-n" v-for="n in maxPage" :key="n" 
						:class="curPage == n? 'btn-active':''" @click="toPage(n)">
							{{n}}
						</li>
						<li class="btn-n" @click="toPage(maxPage)" 
						v-show="curPage != maxPage">
							&gt;&gt;
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import myhead from "./common/header.vue";
import axios from "axios";
const url = require("../url").url
export default {
	name:'Search',
	components: {
    myhead
	},
	created(){
		this.init()
	},
  data() {
    return {
			NameOrType:'',
			loading:true,
			byName:{},
			curPage:0,
			items:[],
			maxPage:0,
			byType:{},
			//nav上的品牌和分类
			brands:[],
			types:[],
			capacitys:[],
			categorys:[],
			shapes:[],
    };
	},
	watch: {
    // 如果路由有变化，会再次执行该方法
    '$route'(){
			this.init()
		}
  },
	computed:{
	},
  methods: {
		//从url上取参数。name=xx,page=x,brand=xx,type=xxx
		searchByName(){		
			let query = this.$route.query
			this.byName = query		
			this.curPage = this.byName.page			
      axios
        .get(url.searchByName, { params: query })
        .then(response => {										
					let data = response.data.data;														
					this.items = data.data
					this.types = data.type
					this.brands = data.brand
					this.maxPage = data.total 
					this.loading = false
        })
        .catch(error => {
					this.items = []
          console.log(error);
          alert("网络错误，不能访问");
				});
			//恢复初始化
			this.byType = {}
			this.capacitys = []
			this.categorys = []
			this.shape = []
		},
		toPage(n){
			if (this.NameOrType == 'name') {
				this.$router.push({ path: 'search',query:{
					name:this.byName.name,
					page:n,
					brand:this.byName.brand,
					type:this.byName.type
				}}) 	
			}else if (this.NameOrType == 'type') {
				this.$router.push({ path: 'search',query:{
					flag:this.byType.flag,
					page:n,
					shape:this.byType.shape,
					brand:this.byType.brand,
					capacity:this.byType.capacity,
					category:this.byType.category,
					third_type:this.byType.third_type,
					second_type:this.byType.second_type 
				}}) 				
			}else{
				alert('错误操作')
			}		
		},
		byNameAndBrandOrType(brand,type,shape,capacity,category){
			if (this.NameOrType == 'name') {
				if (brand === 'all') {
					this.byName.brand = null
					brand = null
				}
				this.$router.push({ path: 'search',query:{
					name:this.byName.name,
					page:1,
					brand:brand || this.byName.brand,
					type:type || this.byName.type,
				}}) 				
			}else if (this.NameOrType == 'type') {
				//判断是否点击全部。
				if (brand === 'all') {
					this.byType.brand = null
					brand = null														
				}else if (shape === 'all') {
					this.byType.shape = null
					shape = null					
				}else if (capacity === 'all') {
					this.byType.capacity = null
					capacity = null
				}else if (category === 'all') {
					this.byType.category = null
					category = null					
				}
				this.$router.push({ path: 'search',query:{
					flag:this.byType.flag,
					page:1,
					shape:shape || this.byType.shape || '',
					brand:brand || this.byType.brand || '',
					capacity:capacity || this.byType.capacity || '',
					category:category || this.byType.category || '',
					third_type:type || this.byType.third_type,
					second_type:this.byType.second_type 
				}}) 
			}else{
				alert('错误操作')
			}
		},
		//从url上取参数。flag=x,second_type=y,third_type=z,page=a
		searchByType(){
			let query = this.$route.query
			this.byType = query
			this.curPage = this.byType.page					
			axios
        .get(url.classify, { params: query })
        .then(response => {					
					let data = response.data.data;	
									
					this.items = data.data	
					this.maxPage = data.total					
					this.loading = false
					if (this.byType.first) {
						this.types = data.third_type 
						this.brands = data.brand
						this.categorys = data.category
						this.shapes = data.shape
						this.capacitys = data.capacity	
					}
        })
        .catch(error => {
					this.items = []
          console.log(error);
          alert("网络错误，不能访问");
				});
				//恢复初始化
				this.byName = {}
		},
		init(){
			if (this.$route.query.name) {
				this.NameOrType = 'name'
				this.searchByName();		
			}else if (this.$route.query.flag) {
				this.NameOrType = 'type'
				this.searchByType()
			}else{
				alert('错误操作')
			}
		},
		/*判断商品是否有图片,有的返回[0],没有返回默认
		http://p810g4fh2.bkt.clouddn.com/image/noPhoto.jpg */
		isHaveImg(v){
			if (v) {
				return v[0]
			}else{
				return 'http://p810g4fh2.bkt.clouddn.com/image/noPhoto.jpg'
			}
		},
		detail(first_type,id){
			this.$router.push({ path: 'detail',query:{
				flag:first_type,
				id
			}}) 			
		}
	},
};
</script>
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
.search-content{
	font-weight: 600;
	font-size: 18px;
}
.t-red{
	color: #e70012;
}
.content{
	padding: 0 10%;
}
.items-box{
	display: flex;
	flex-wrap: wrap;
	padding-bottom: 30px;
	margin-bottom: 40px;
	/* justify-content: space-around; */
	border-bottom: 1px #bdbdbd dotted;
}
.item{
	width: 18%;
	text-align: center;
	font-size: 14px;
	margin-right: 20px;	
	margin-bottom: 30px;
}
.item:hover{
	color: #e70012;
}
.item-img{
	width: 140px;
	height: 140px;
	display: inline-block;
}
.item-name{
	font-size: 12px;
	margin: 7px 0;
}
.price{
	color: #aea49b;
}
.price>span{
	font-size: 18px;
	font-weight: 600;
	color: #e70012;
}
.search-nav{
	margin-bottom: 30px;
	border-top: 1px #ddd solid;
}
.type,.brand{
	display: flex;
	border: 1px #ddd solid;
	border-top: 0;
}
.nav-cls{
	color: #222;
	font-size: 16px;
	min-width: 120px;
	background-color: rgb(241, 241, 241);
	border-left: 1px #ddd solid;
	display: flex;
	align-items: center;
	padding-left: 20px;
}
.nav-ul{
	display: flex;
	flex-wrap: wrap;
	font-size: 14px;
	padding: 10px 20px;
	align-items: center;
}
.nav-ul>li{
	margin: 5px 15px;
	height: 20px;
	line-height: 20px;
}
.nav-name{
	margin-top: 5px;
}
.nav-name:hover{
	text-decoration: underline;
}
.null{
	margin-bottom: 50px;
}
.btn-ul{
	display: flex;
	justify-content: center;
}
.btn-n{
	line-height: 30px;
	margin: 0 5px;
	width: 30px;
	height: 30px;
	text-align: center;
	border: #ccc 1px solid;
	color: #666;
}
.btn-active{
	background-color: #ccc;
	font-weight: 600;
}
.btn-n:hover{
	background-color: #ccc;
}
</style>
