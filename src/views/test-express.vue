<template>
  <div class="container">
    测试express
    {{ JSON.stringify(msg) }}

    <h3>文件上传：</h3>
    选择一个文件上传: <br>
    <form
      action="/api/blog"
      method="post"
      enctype="multipart/form-data"
    >
      <input
        type="file"
        name="content"
      >
      <br>
      <input
        type="submit"
        value="上传文件"
      >
    </form>
  </div>
</template>
<script>
import api from "@/api";

export default {
  data() {
    return {
      msg: "",
    };
  },
  mounted() {
    this.doTestExpressGet();
  },
  methods: {
    doTestExpressGet() {
      api.testExpressGet().then((res) => {
        this.msg = res;
        // console.log("express res", res);
      });
    },
  },
};
</script>
