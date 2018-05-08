<template>

        <a class="box" 
        href="http://wpa.qq.com/msgrd?v=3&uin=3447430671&site=qq&menu=yes">
        <img src="../../assets/imgs/qq.png" class="qq">
            在 线 客 服
        </a>
</template>

<script>
export default {
  data() {
    return {
			//点击客服展开[true]，收缩[false]
			toggle:true
		};
	},
	methods:{

	}
};
</script>
<style scoped>
.box {
  box-sizing: border-box;
  padding-top: 50px;
  width: 36px;
  height: 264px;
  background-color: #29a7e2;
  border-radius: 6px 0px 0 6px;
  z-index: 1500;
  color: white;
  position: fixed;
  right: 0;
  top: 100px;
}
.qq{
  width: 30px;
  height: 30px;
}
</style>
