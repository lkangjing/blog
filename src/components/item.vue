<template>
  <div class="article">
    <h1 class="title">学习vue.js</h1>
    <div class="status">发布于:2020.3.1 | 阅读:2000 | 标签:# vue.js # node.js</div>
    <div class="content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam libero, voluptatum possimus fuga asperiores praesentium et maiores doloribus odit aliquid fugit itaque soluta beatae amet quam in quaerat assumenda aliquam.
      Laudantium corporis excepturi debitis quia obcaecati voluptatum officiis pariatur eaque eius neque eveniet cum perspiciatis deleniti quas delectus ab impedit optio, dolorum error provident esse voluptates similique libero tenetur? Illum.
      Fuga consectetur aperiam sint? Tenetur possimus quod error inventore impedit ut quidem quibusdam aut dolorem nemo? Fuga, veniam, autem modi sit sapiente mollitia reiciendis quas animi inventore consequuntur, voluptatibus molestiae.
      Quae laborum accusantium ut corrupti, consequuntur voluptates laudantium? Nostrum necessitatibus officiis dicta, sapiente quae ipsam rem! Cum accusamus repellat similique esse nihil assumenda laboriosam nisi consectetur voluptatibus? Molestias, quod aliquid?
      Expedita autem obcaecati itaque commodi aspernatur tempore eveniet porro recusandae iusto, doloremque odio fugit sapiente ab animi! Ducimus mollitia enim quaerat nisi, nam eligendi esse doloremque, asperiores eaque tenetur fugit?
      Suscipit molestias cupiditate saepe iste id ullam quod illum tenetur eligendi necessitatibus eos, ratione molestiae, optio voluptatem autem corrupti? Odio illum quia, rem quas quasi similique aut tenetur soluta vitae.
      Nulla cumque vero reprehenderit saepe veniam esse iure quia ipsum ducimus eum laborum iusto alias beatae fuga porro at, iste quasi dicta expedita aperiam voluptatibus recusandae modi? Quam, dolores ipsa?
      Ad nesciunt dicta assumenda aperiam laborum inventore quaerat magnam amet, et maiores dolores architecto quo cupiditate, repellendus deleniti laboriosam ipsam a, excepturi voluptatem aliquam. Possimus provident et nesciunt! Illum, veniam.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.articles,
.article {
  margin-right: 30%;
  background: white;
  padding: 20px 30px;
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.2);
}
.articles .item {
  margin-bottom: 25px;
}
.articles .item .title,
.article .title {
  color: #454545;
  font-size: 20px;
  /* color: black; */
  font-weight: 700;
}

.articles .item .status,
.article .status {
  font-size: 13px;
  color: #ccc;
}
.articles .item > *,
.article > * {
  margin: 10px 0;
}

</style>