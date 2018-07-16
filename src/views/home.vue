<template>
  <div class="header_wrapper">
			<header>
				<div class="container">
					<div id="logo">
					  <a href="index.html"><img src="../assets/images/logo.jpg" alt="网站首页"></a>
					</div>
					<div id="contain1">
						<div id="child_nav">
              <ul>
                <li><a id="personhomepage" href="#0">个人主页</a></li>
                <li><a id="login" href="#0">登录</a></li>
              </ul>
						</div>
						<div id="search">
							<el-input placeholder="请输入内容" v-model="input5" >
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
						</div>
            <div class="userinfo">
              <el-dropdown trigger="hover">
                <span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" />{{sysUserName}}</span>
                <el-dropdown-menu slot="dropdown" divided="false">
                  <el-dropdown-item divided @click.native="logout">帮助</el-dropdown-item>
                  <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                   <el-dropdown-item divided @click.native="logout">哈哈哈哈</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
					</div>
				</div>
				<div class="container" id="nav">
					<nav>
						<ul>
              <li><a href="index.html">首页</a></li>
							<li><a href="index.html">故事</a></li>
							<li><a href="index.html">音乐</a></li>
							<li><a href="index.html">漫画</a></li>
							<li><a href="index.html">点子</a></li>
							<li><a href="index.html">视频</a></li>
						</ul>
					</nav>
				</div>
		  </header>
	</div>
</template>

<script>
import HeaderNav from '../components/HeaderNav.vue'
export default {
  components: {
    HeaderNav
  },
  data() {
    return {
      sysUserName: '张晓',
			sysUserAvatar: '',
    }
  },
  mounted () {
    this.sysUserAvatar = require('../assets/user.png');
  }
}
</script>

<style scoped>
.container{
	width: 1000px;
	margin: 0 auto;
}
div#logo{
	display:inline-block;
	width: 460px;
	vertical-align: top;
  margin: 0px;
  padding: 0px;

}
div#contain1{
	display: inline-block;
	margin-bottom: 40px;
	text-align: right;
	width: 402;
	background: #b8dcd2;
}
div#search{
	display: inline-block;
	background: #b8dcd2;
	vertical-align: top;
  width: 237px;
  height: 38px;
}
div#child_nav{
	display: inline-block;
	margin-left: 15px;
	margin-right: 15px;
	margin-top: 5px;
}
#logo a{
  display: inline-block;
  width: 83px;
  height: 73px;
  margin-right: 520px;
}
div#child_nav li{
	display: inline-block;
	color: #fff;
	vertical-align: top;
	font-size: 18px;
	text-decoration: none;
}

input[type="text"]{
	background: #f3f3f3;
	border:solid 1px #ccc;
	height: 36px;
	font-size: 15px;
	font-family: "微软雅黑";
	padding-left: 10px;
	width: 165px;
	display: inline-block;
	vertical-align: top;
}
input[type="submit"]{
	background: #b8dcd2;
	color: #fff;
	border: solid 1px #b8dcd2;
	height: 38px;
	width: 72px;
	display: inline-block;
	vertical-align: top;
	font-size: 18px;
	padding: 0 10px;
}
div#nav{
	background: #b8dcd2;
	height: 50px;
  /* border:1px solid; */
  border-radius:25px;
}
div#nav li{
	display: inline-block;
	line-height: 50px;
	padding:0 40px;

}
div#nav a{
	color: #fff;
	text-decoration: none;
	font-size: 16px;
}

.userinfo {
  width: 120px;
  text-align: right;
  margin-left: 0px;
	padding-right: 10px;
  float: right;
  background-color: #b8dcd2;
}
.userinfo img {
	width: 30px;
  height: 30px;
	border-radius: 20px;
	margin: 4px 0px 3px 20px;
	float: right;
}
.userinfo-inner {
  display: inline-block;
  text-align: center;
  height: 37px;
  line-height: 37px;
	cursor: pointer;
  color:rgb(15, 130, 165);
}
</style>

