<template>
  <div class="container">
    <h1>测试图片懒加载</h1>
    <div>
      <img data-src="../assets/img/test-lazy-img/1.jpg">
      <img data-src="../assets/img/test-lazy-img/timg.jpg">
      <img data-src="../assets/img/test-lazy-img/1.jpg">
      <img data-src="../assets/img/test-lazy-img/2.jpg">
      <img data-src="../assets/img/test-lazy-img/3.jpg">
      <img data-src="../assets/img/test-lazy-img/4.jpg">
      <img data-src="../assets/img/test-lazy-img/5.jpg">
      <img data-src="../assets/img/test-lazy-img/6.jpg">
      <img data-src="../assets/img/test-lazy-img/7.jpg">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.doLoad();
  },
  methods: {
    doLoad() {
      const imgs = document.querySelectorAll("img"); //获取所有待观察的目标元素
      var options = {};
      function lazyLoad(target) {
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach((entrie) => {
            if (entrie.isIntersecting) {
              const img = entrie.target;
              const src = img.getAttribute("data-src");
              img.setAttribute("src", src);
              observer.unobserve(img); // 停止监听已开始加载的图片
            }
          });
        }, options);
        observer.observe(target);
      }

      imgs.forEach(lazyLoad);
    },
  },
};
</script>
<style lang="scss" scoped>
img {
  width: 100px;
  height: 100px;
  display: block;
  margin: 6px;
}
</style>
