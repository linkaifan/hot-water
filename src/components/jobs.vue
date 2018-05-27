<template>
  <div id="jobs">
    <myhead></myhead>
    <div class="bar">
      <router-link to="/">Hot spring首页</router-link>
      <span>></span>
      <router-link to="/jobs">人才招聘</router-link>
	  </div>
    <div class="box">
      <p class="title">人才招聘</p>
      <div class="content">
        <div class="h">
          以下为招聘职位信息:
        </div>
        <div class="job" v-for="(item,index) in jobs" :key="index">
          <div class="job-key">
            <p>职员名称: </p>    
            <p class="info">{{item.name}}</p>                        
          </div>
          <div class="job-key">
            <p> 职位责任: </p>
            <ul class="info">
              <li v-for="(res,index) in item.res" :key="index">
                {{index+1}}、{{res}}
              </li>
            </ul>
          </div>
          <div class="job-key">
            <p> 职位要求:</p>
            <ul class="info">
              <li v-for="(req,index) in item.req" :key="index">
                {{index+1}}、{{req}}
              </li>
            </ul>
          </div>
          <div class="job-key">
            <p>工作地点: </p>
            <p class="info">{{item.place}}</p>
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
  name: "Jobs",
  components: {
    myhead
  },
  created() {
    //获取招聘信息
    axios
      .get(url.employments)
      .then(response => {
        let data = response.data.data;
        this.jobs = data;       
      })
      .catch(error => {
        console.log(error);
        alert("网络错误，不能获取招聘信息数据");
      });
  },
  data() {
    return {
      jobs:[]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bar {
  height: 30px;
  line-height: 30px;
  text-align: left;
  font-size: 14px;
  padding: 0 10%;
  margin: 20px 0;
}
.bar > span {
  margin: 0 10px;
}
.box {
  padding: 0 10%;
  margin-bottom: 50px;
}
.title {
  height: 40px;
  color: #fff;
  line-height: 40px;
  background-color: #e70012;
}
.content {
  box-sizing: border-box;
  background-color: #eeeeee;
  padding: 50px 50px;
}
.h {
  border-bottom: 1px #ccc dotted;
  line-height: 40px;
  height: 40px;
  text-align: left;
  font-size: 14px;
  margin-bottom: 10px;
}
.job-key {
  display: flex;
  margin: 10px 0;
}
.job-key > p:first-child {
  width: 200px;
  text-align: right;
  margin-right: 20px;
}
.info > li {
  margin-bottom: 8px;
}
.job {
  border-bottom: 1px #ccc dotted;
  padding-bottom: 30px;
  padding-top: 30px;
  text-align: left;
  font-size: 15px;
}
</style>
