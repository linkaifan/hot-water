<template>
    <div id="skill">
      <myhead></myhead>
      <div class="bar">
	  		<router-link to="/">Hot spring首页</router-link>
      		<span>></span>
      		<router-link to="/apply">合作登记申请</router-link>
	  </div>
	  <div class="box">
			<p class="title">技术咨询</p>
			<div class="content">
				<div class="h">
					首先感谢您对我司的依赖与支持，请留下您的联系方式，
					以便我们及时对应回复，非常感谢。
				</div>
				<form action="post" name="bForm">
					<div class="inputBox">
						<p>公司名称</p>
						<input type="text" name="company_name"
						v-model="updata.company_name">
					</div>
					<div class="inputBox">
						<p>联系人姓名</p>
						<input type="text" name="contact_name"
						v-model="updata.contact_name">
					</div>
					<div class="inputBox">
						<p>联系人电话</p>
						<input type="text" name="phone"
						v-model="updata.phone">
					</div>
					<div class="inputBox">
						<p>邮箱</p>
						<input type="text" name="email"
						v-model="updata.email">
					</div>
					<div class="inputBox">
						<p>产品名</p>
						<input type="text" name="product_name"
						v-model="updata.product_name">
					</div>
					<div class="inputBox">
						<p>内容</p>
						<input type="text" name="content"
						v-model="updata.content">
					</div>	
					<div class="inputBox">
						<p>指定邮箱</p>
						<input type="text" name="spec_email"
						v-model="updata.spec_email">
					</div>				
				</form>
				<div class="btn" @click="skill">提交申请</div>
		    </div>
	  </div>
    </div>
</template>

<script>
import axios from "axios";
import myhead from "./common/header.vue";
const url = require("../url").url;
export default {
  name: "Skill",
  components: {
    myhead
  },
  data() {
    return {
      updata: {
        company_name: "",
        contact_name: "",
        phone: "",
        email: "",
        product_name: "",
        content: "",
        spec_email: ""
      }
    };
  },
  methods: {
    skill() {
      let self = this;
      if (
        !this.updata.company_name ||
        !this.updata.contact_name ||
        !this.updata.phone ||
        !this.updata.email ||
        !this.updata.product_name ||
        !this.updata.content ||
        !this.updata.spec_email
      ) {
        alert("请完善信息");
      } else {
        let formData = new FormData();
        formData.append("company_name", this.updata.company_name);
        formData.append("contact_name", this.updata.contact_name);
        formData.append("email", this.updata.email);
        formData.append("phone", this.updata.phone);
        formData.append("product_name", this.updata.product_name);
        formData.append("spec_email", this.updata.spec_email);
        formData.append("content", this.updata.content);
        axios
          .post(url.skill, formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(function(res) {
            // alert("申请成功，请耐心等待回复")
            console.log(res);
            self.$router.push("/");
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  },
  created() {
    if (this.$route.query.name) {
      this.updata.product_name = this.$route.query.name
    }
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
  height: 600px;
  padding: 30px 50px;
}
.h {
  border-bottom: 1px #ccc dotted;
  line-height: 40px;
  height: 40px;
  margin-bottom: 50px;
  text-align: left;
  font-size: 14px;
}
.inputBox > p {
  width: 200px;
  text-align: left;
}
.inputBox > input {
  width: 420px;
  height: 32px;
  box-sizing: border-box;
}
.inputBox {
  box-sizing: border-box;
  display: flex;
  margin: 20px 0;
  align-items: center;
  padding-left: 100px;
}
.btn {
  margin: 50px auto;
  width: 156px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  background-color: #cd000f;
}
</style>
