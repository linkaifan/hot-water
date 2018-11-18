<template>
  <div id="foods">
    <myhead></myhead>
    <div class="contain w1200">
      <div class="title">
        {{item.title}}
      </div>
      <div class="content" v-html="item.incontent">
        <!-- <img :src="foods[0].image" class="img"> -->
      </div>
    </div>
  </div>
</template>

<script>
import myhead from "./common/header.vue";
import axios from "axios";
const url = require("../url").url;
export default {
  name: "Foods",
  components: {
    myhead
  },
  created() {
    let value = this.$route.params.value;
    let i = this.$route.params.i;
    if (value == "foods") {
      //获取食药资讯
      axios
        .get(url.food, { params: { is_index: 1 } })
        .then(response => {
          this.foods = response.data.data;
          this.item = response.data.data[i];
        })
        .catch(error => {
          console.log(error);
          alert("网络错误，不能获取食药咨询数据");
        });
    } else {
      //最新应用
      axios
        .get(url.newApp, { params: { is_index: 1 } })
        .then(response => {
          this.newApps = response.data.data;
          this.item = response.data.data[i];
        })
        .catch(error => {
          console.log(error);
          alert("网络错误，不能获取最新应用数据");
        });
    }
  },
  data() {
    return {
      foods: [],
      newApps: [],
      item: {}
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.w1200 {
  width: 80vw;
  margin: 0 auto;
  min-width: 1200px;
}
.contain {
  text-align: left;
}
.title {
  text-align: center;
  font-size: 24px;
  margin: 20px 0;
}
.content {
  padding: 30px;
  padding-top: 0;
  text-indent: 30px;
}
</style>
