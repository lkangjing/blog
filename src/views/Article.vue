<template>
  <div class="article">
    <h1 class="title">{{blog.title}}</h1>
    <!-- <div class="status">发布于:2020.3.1 | 阅读:2000 | 标签:# vue.js # node.js</div> -->
    <div class="content" v-html="blog.content"></div>

    <!-- <button class="btn2" @click="editor">编辑</button> -->
    <router-link  :to="`/editor/${id}`">
      <button class="btn2" >编辑</button>
    </router-link>
    
    <button class="btn1" @click="del">删除</button>
  </div>
</template>

<script>
export default {
  // props:{
  //   id:{required:true}
  // },
  data() {
    return {
      blog: {},
      id: this.$route.params.id
    };
  },
  methods: {
    // editor() {
    //   this.$router.push({
    //     name: 'addblog', //这个name就是你刚刚配置在router里边的name
    //     params: {
    //       id: this.id
    //     }
    //   });
    // },
    async getBlog() {
      const singleBlog = await this.$http.get(`/bloglist/${this.id}`);
      this.blog = singleBlog.data;
    },
    async del() {
      const blogId = this.$route.params.id;
      const r = confirm("确定删除吗?");
      if (r) {
        const result = await this.$http.delete(`/blog/${blogId}`);
        console.log("删除成功" + result);
        this.$router.push("/");
      }
    }
  },
  created() {
    console.log("id:" + this.id);
    this.getBlog();
  }
};
</script>

<style scoped>
.btn1 {
  margin-top: 50px;
  width: 100px;
  height: 30px;
  background: red;
  border: none;
}
.btn2 {
  margin-top: 50px;
  width: 100px;
  height: 30px;
  border: none;
}
.article {
  /* margin-right: 30%; */
  background: white;
  padding: 20px 30px;
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.2);
  min-height: 300px;
}

.article .title {
  color: #454545;
  font-size: 20px;
  /* color: black; */
  font-weight: 700;
}

.article .status {
  font-size: 13px;
  color: #ccc;
}

.article > * {
  margin: 10px 0;
}
</style>