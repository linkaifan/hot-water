<template>
    <div id="detail">
      <myhead></myhead>
      <div class="itemBox" id="pdfDom">
				<div class="img-text">
					<div class="left">
						<img :src="curImg"  class="big-img">
						<div class="sm-box">
							<img class="sm-img" :class="curImg == img?'active':''"
              v-for="(img,index) in item.img" :key="index"
              :src="img" @click="changeCurImg(index)">
						</div>
					</div>
					<div class="right">
						<p class="name weight">{{item.name}}</p>
						<p class="weight pad">品牌：{{item.brand}}</p>
						<ul class="weight">
							特点:
							<li v-show="item.character1">● {{item.character1}}</li>
							<li v-show="item.character2">● {{item.character2}}</li>
							<li v-show="item.character3">● {{item.character3}}</li>
							<li v-show="item.character4">● {{item.character4}}</li>
							<li v-show="item.character5">● {{item.character5}}</li>
							<li v-show="item.character6">● {{item.character6}}</li>
						</ul>
						<ul class="weight pad">
							规格:
							<li v-show="item.size1">● {{item.size1}}</li>
							<li v-show="item.size2">● {{item.size2}}</li>
							<li v-show="item.size3">● {{item.size3}}</li>
							<li v-show="item.size4">● {{item.size4}}</li>
							<li v-show="item.size5">● {{item.size5}}</li>
							<li v-show="item.size6">● {{item.size6}}</li>
						</ul>
						<button class="pdf-btn" @click="getPdf(item.name)">
							导出PDF
						</button>
						<button class="skill-btn" @click="toSkill">
							<img src="../assets/imgs/buy.png" class="left-icon">
							<div href="#">商品 / 技术</div>
						</button>
					</div>
				</div>
				<div class="info" v-if="!(table == [1])">
					<ul class="info-key">
            <li v-show="table[0].col1">{{table[0].col1}}</li>
            <li v-show="table[0].col2">{{table[0].col2}}</li>
            <li v-show="table[0].col3">{{table[0].col3}}</li>
            <li v-show="table[0].col4">{{table[0].col4}}</li>
            <li v-show="table[0].col5">{{table[0].col5}}</li>
            <li v-show="table[0].col6">{{table[0].col6}}</li>
					</ul>
          <ul class="info-value" v-for="(item,index) in table" :key="index">
            <li v-show="item.value1">{{item.value1}}</li>
            <li v-show="item.value2">{{item.value2}}</li>
            <li v-show="item.value3">{{item.value3}}</li>
            <li v-show="item.value4">{{item.value4}}</li>
            <li v-show="item.value5">{{item.value5}}</li>
            <li v-show="item.value6">{{item.value6}}</li>
          </ul>
				</div>
      </div>			
    </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
import myhead from "./common/header.vue";
const url = require("../url").url;
export default {
  name: "Detail",
  components: {
    myhead
  },
  data() {
    return {
      item: {},
      curImg: "",
      table:[1]
    };
  },
  methods: {
    changeCurImg(index) {
      this.curImg = this.item.img[index]
    },
    toSkill() {
      let session = sessionStorage.getItem("user");
      if (!session) {
        alert('请先登录')
      }else{
        this.$router.push({ path: "skill", query: { name: this.item.name } });
      }       
    }
  },
  created() {
		//获取单个商品信息
    let query = this.$route.query
    axios
      .get(url.getSingleInfo, { params: { flag: query.flag, id: query.id } })
      .then(response => {
        let data = response.data.data;
        this.item = data;
        if (data.img) {
          this.curImg = data.img[0]            
        }else{
          this.curImg = 'http://p810g4fh2.bkt.clouddn.com/image/noPhoto.jpg'
        }      
      })
      .catch(error => {
        console.log(error);
        alert("网络错误，不能访问");
      });
		//获取单个商品的table信息
		axios
      .get(url.goodTable, { params: { type:query.flag, id: query.id } })
      .then(response => {
        let data = response.data.data;
        if (data.length) {
          this.table = data
        }                  
      })
      .catch(error => {
        console.log(error);
        alert("网络错误，不能访问");
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.itemBox {
  padding: 50px 10%;
  font-size: 16px;
}
.img-text {
  display: flex;
  text-align: left;
}
.right {
  margin-left: 35px;
}
.pad {
  margin: 20px 0;
}
.name {
  font-size: 18px;
  padding-bottom: 20px;
  border-bottom: 1px #e0e0e0 solid;
}
.weight {
  font-weight: 600;
}
ul.weight > li {
  font-weight: 500;
  font-size: 15px;
  padding-left: 15px;
  margin: 10px;
}
.active {
  border: 2px solid #cd000f;
}
.big-img {
  display: block;
  width: 424px;
  height: 424px;
}
.sm-box {
  margin: 30px 15px;
}
.sm-img {
  width: 64px;
  height: 64px;
  display: inline-block;
  margin-right: 10px;
}
.pdf-btn {
  border: 0;
  height: 40px;
  width: 150px;
  box-sizing: border-box;
  background-color: #cd000f;
  color: #fff;
  font-size: 18px;
}
.skill-btn {
  margin-top: 30px;
  color: #cd000f;
  border: 2px solid #cd000f;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  height: 40px;
  width: 180px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}
.left-icon {
  margin-right: 15px;
  width: 20px;
  height: 20px;
}
.info{
  border: 1px #e0e0e0 solid; 
  /* margin-top: 50px; */
  display: inline-block;
  margin: 50px auto;
}
.info-value{
  border-top: 1px #e0e0e0 solid;
}
.info-value,.info-key{
  display: flex;
}
.info-value>li,.info-key>li{
  padding: 10px;
  /* width: 15%; */
  /* flex-grow: 1; */
  min-width: 12vw;
  text-align: center;
}
</style>
