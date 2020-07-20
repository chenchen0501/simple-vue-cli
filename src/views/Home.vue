<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div>env: {{ env }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data() {
    return {
      env: ''
    }
  },
  mounted() {
    this.env = process.env
    console.log('env:', process.env)
  }
}
</script>
