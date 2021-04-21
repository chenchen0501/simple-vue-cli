<template>
  <div class="container">
    测试express
    {{ JSON.stringify(msg) }}
  </div>
</template>
<script>
import api from "@/api";

export default {
  data() {
    return {
      msg: ''
    };
  },
  mounted() {
    this.doTestExpressGet();
  },
  methods: {
    doTestExpressGet() {
      api.testExpressGet().then((res) => {
        this.msg = res
        // console.log("express res", res);
      });
    },
  },
};
</script>
