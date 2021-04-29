<template>
  <div class="container">
    <vue-markdown :source="source" />
  </div>
</template>
<script>
import VueMarkdown from "vue-markdown";
import api from "@/api";
export default {
  components: {
    VueMarkdown,
  },
  data() {
    return {
      source: "",
    };
  },
  mounted() {
    this.getBlogInfo();
  },
  methods: {
    async getBlogInfo() {
      const res = await api.getBlogInfoById(1);
      this.source = res;
    },
  },
};
</script>
