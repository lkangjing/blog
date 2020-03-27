<template>
  <div>
      <div class="articles">
        <h2>博客列表</h2>
          <div class="item" v-for="(item,index) in blogList" :key="index">
            <!-- <router-link :id="item._id"  class="title" to="/article">{{item.title}}</router-link> -->
            <router-link  class="title" :to="`/article/${item._id}`">{{item.title}}</router-link>
            <!-- <div class="status">发布于:2020.3.1 | 阅读:2000 | 标签:# vue.js # node.js</div> -->
            <!-- <div class="content">
              {{item.content}}
            </div> -->
          </div>
        
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogList:[]
    }
  },
  methods: {
    async getList(){
      const blogs = await this.$http.get('/bloglist')
      console.log('blogs:'+ blogs.data);
      
      this.blogList = blogs.data
    }
  },
  created() {
  
    
    this.getList()
  },
}
</script>

<style scoped>
.content{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
  .articles{
  background: white;
  padding: 20px 30px;
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.2);
  
}
.articles .item {
  margin-bottom: 25px;
  border-bottom: 1px solid #454545;
}
.articles .item .title{
  color: #454545;
  font-size: 20px;
  font-weight: 700;
}

.articles .item .status{
  font-size: 13px;
  color: #ccc;
}
.articles .item > *{
  margin: 10px 0;
}
</style>