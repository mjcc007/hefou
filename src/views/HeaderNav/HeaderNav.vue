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
                <li><a id="a1" href="index.html">个人主页</a></li>
                <li><a id="a2" href="#0">登录</a></li>
              </ul>
						</div>
						<div id="search">
							<el-input placeholder="请输入内容" v-model="input5" >
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
						</div>
					</div>
				</div>
				<div class="container" id="nav">
					<nav>
						<ul>
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

<style scoped>
.container{
	width: 1000px;
	margin: 0 auto;
}
div#logo{
	display:inline-block;
	width: 585px;
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
</style>
