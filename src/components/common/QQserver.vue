<template>
  <!-- <a class="box"  target="_blank" 
  href="http://wpa.qq.com/msgrd?v=3&uin=3447430671&site=qq&menu=yes">
  <img src="../../assets/imgs/qq.png" class="qq">
      <p>在</p>
      <p>线</p>
      <p>客</p>
      <p>服</p>
  </a>         -->
  <div class="box" @click="show">
    <div class="left">
      <div><img src="../../assets/imgs/qq.png" class="qq"></div>
      <p>在</p>
      <p>线</p>
      <p>客</p>
      <p>服</p>
      <div v-show="!toggle" class="btn">&lt;</div>
      <div v-show="toggle" @click.stop="hidden" class="btn">></div>
    </div>
    <div class="right" v-show="toggle">
      <p class="title">热泉港在线客服</p>
      <div class="a">
        客户客服
        <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=3447430671&site=qq&menu=yes">
        <img border="0" src="http://wpa.qq.com/pa?p=2:3447430671:51" alt="点击这里给我发消息"
         title="点击这里给我发消息"/></a>
      </div>
      <div class="phone">
        电话：020-310-41987
      </div>
      <div>
        <p class="email">邮箱：</p> 
        <p>information@yechine.com</p>       
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
			//点击客服展开[true]，收缩[false]
			toggle:false
		};
	},
	methods:{
    show(){
      this.toggle = true;
    },
    hidden(){
      this.toggle = false;
    }
	}
};
</script>
<style scoped>
.box {
  position: fixed;
  right: 0;
  top: 220px;
  z-index: 1500;
  display: flex;
  align-items: center;
  background-color: #29a7e2;
  border-radius: 6px 0 0 6px;
}
.left{
  text-align: center;
  width: 40px;
  box-sizing: border-box;
  padding-top: 30px;
  height: 200px;
  color: white;
}
.right{
  margin-right: 8px;
  text-align: left;
  width: 180px;
  height: 170px;
  box-sizing: border-box;
  background: #F7F7F7;
  border-radius: 6px;
  font-size: 13px;
  padding: 3px 2px;
  color: #777;
}
.right>div{
  padding-left: 15px;
}
.a{
  margin-top: 10px;
  display: flex;
  align-items: center;
}
.a>a{
  margin-left: 15px;
}
.title{
  margin-bottom: 10px;
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  color: #333;
}
.qq{
  width: 23px;
  height: 28px;
}
.phone{
  border-bottom: solid 1px #E6E4E4;
  border-top: solid 1px #E6E4E4;
  line-height: 40px;
  height: 40px;
  margin: 10px 0;
}
.btn{
  margin-top: 5px;
}
</style>
