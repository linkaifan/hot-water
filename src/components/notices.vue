<template>
    <div id="notices">
      <myhead></myhead>
      <div class="bar">
	  		<router-link to="/">Yechine首页</router-link>
      		<span>></span>
      		<router-link to="/notices">Yechine公告</router-link>
	    </div>
      <div class="box">
        <div class="content">
          <ul>
            <li v-for="(item,index) in notices" :key="index" class="notice">
              > {{item.updated_at | time}}
              <a :href="item.url" class="to">{{item.name}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
import axios from "axios";
import myhead from "./common/header.vue";
const url = require("../url").url;
export default {
  name: "Notices",
  components: {
    myhead
  },
  data() {
    return {
      notices:[]
    };
  },
  filters: {
    time(value){
      return value.split(' ')[0]
    }
  },
  created(){
    //获取全部公告
    axios
      .get(url.notices)
      .then(response => {        
        this.notices = response.data.data;             
      })
      .catch(error => {
        console.log(error);
        alert("网络错误，不能获取公告数据");
      });
  },
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
  margin-top: 20px;
  margin-bottom: 5px;
}
.bar > span {
  margin: 0 10px;
}
.box{
  min-width: 1200px;
  width: 80vw;
  margin: 0 auto;
  border-top: 1px #ccc dotted;
}
.content{
  font-size: 14px;
  margin: auto;  
  padding: 25px 0;
}
.notice{
  text-align: left;
  width: 880px;
  margin: 10px auto;
  border-bottom: 1px #ccc dotted;
  padding-bottom: 8px;
}
</style>
