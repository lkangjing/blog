<template>
  <div class="container">
    <h2>{{id ? '编辑博客' : '新建博客'}}</h2>
    <form class="form" action>
      <input type="text" v-model="blog.title" placeholder="请输入标题" />
      <br />
      <div class="edt">
        <vue-editor useCustomImageHandler @image-added="handleImageAdded" v-model="blog.content"></vue-editor>
      </div>
      <div id="checkboxes">
        <label for>
          vue.js
          <input type="checkbox" value="vue.js" />
        </label>
        <label for>
          react.js
          <input type="checkbox" value="react.js" />
        </label>
        <label for>
          react.js
          <input type="checkbox" value="react.js" />
        </label>
      </div>
    </form>
    <button @click="save">保存</button>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import axios from "axios";
export default {
  components: {
    VueEditor
  },
  data() {
    return {
      blog: {
        title: "",
        content: ""
      },
      id: this.$route.params.id
    };
  },
  methods: {
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
    
      const formData = new FormData();
      formData.append("file", file);

      const res = await this.$http.post('/blog/upload',formData);
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
      resetUploader();
    },
    save() {
      if (this.id) {
        this.$http.put(`/blog/${this.id}`, this.blog);
      } else {
        const result = this.$http.post("/blog", this.blog);
      }
      this.$router.push("/");
    },
    async fetch() {
      // console.log('ididid:'+ this.$route.params.id);

      const result = await this.$http.get(`/bloglist/${this.id}`);
      this.blog = result.data;
    }
  },
  created() {
    if (this.id) {
      this.fetch();
    }
  }
};
</script>

<style  scoped>
.container {
  /* margin-right: 30%; */
  background: white;
  padding: 20px 30px;
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.2);
  /* overflow: auto; */
}
#checkboxes label {
  display: inline-block;
  width: 150px;
  margin-top: 0;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
h2 {
  text-align: center;
}
.form > input {
  width: 100%;
  padding: 5px;
}
button {
  margin-top: 20px;
  border: none;
  width: 80px;
  height: 40px;
  background: #454545;
}
</style>