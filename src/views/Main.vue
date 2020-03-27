<template>
  <div class="container">
    <div class="header">
      <a href="#" class="logo">刘康靖</a>
      <div class="info">The best or nothing!!!</div>
    </div>
    <div id="line"></div>
    <div class="content">
      <div class="side-bar">
        <div class="nav">
          <router-link class="item" to="/">我的博客</router-link>
          <router-link class="item" to="/addblog">添加博客</router-link>
          <router-link class="item" to="/myself">关于我</router-link>
          <router-link class="item" to="/rewardme">打钱</router-link>
        </div>
        <div class="tags">
          <a href="#" class="item"># Node.js</a>
          <a href="#" class="item"># Vue.js</a>
          <a href="#" class="item"># React</a>
        </div>
      </div>
      <div class="main">
        <router-view :key="$route.path"></router-view>
      </div>
      <div class="leftNav"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
  data() {
    return {};
  }
};
</script>

<style scoped>
#line {
  width: 0;
  border: 0.5px solid #888;
  margin-top: 61px;
  transition: width 1s;
}
.header {
  background: #555;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  z-index: 99;
  justify-content: flex-start;
}
.header .info {
  font-size: 30px;
  /* margin-left: 130px; */
  line-height: 60px;
  padding-left: 130px;
}
.header .logo {
  line-height: 1;
  border: 5px solid #eee;
  padding: 10px 20px;
  font-size: 30px;
  display: inline-block;
}
.content {
  display: flex;
}
.side-bar {
  position: fixed;
  width: 20%;
  top: 150px;
}
.main {
  width: 70%;
  color: #555;
  margin-left: 262px;
  margin-top: 90px;
}
.leftNav {
  width: 10%;
}

.side-bar > * {
  padding: 10px 15px;
}
.side-bar .nav a,
.side-bar .tags a {
  display: block;
  padding: 5px;
  color: #888;
  font-size: 20px;
}
.side-bar .nav a:hover,
.side-bar .tags a:hover {
  color: #eee;
  transition: color 200ms;
}
.side-bar .nav a {
  font-weight: bold;
}

.clearfix:before,
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
</style>