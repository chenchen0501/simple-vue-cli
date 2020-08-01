// 显示区域

<template>
  <div class="container">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.container {
  margin: 10px 10px 10px 10px;
  height: calc(100% - 130px);
  width: calc(100% - 80px);
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
}
</style>
