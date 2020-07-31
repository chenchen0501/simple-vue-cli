// 显示区域

<template>
  <div class="container">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.container {
  margin: 10px 10px 10px 10px;
  height: calc(100% - 90px);
  width: calc(100% - 40px);
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
}
</style>
