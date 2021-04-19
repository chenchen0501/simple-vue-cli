<template>
  <div class="container">
    a1
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";

const { mapState } = createNamespacedHelpers("global");

export default {
  data() {
    return {};
  },
  computed: {
    // ...mapState({
    //   userInfo: (state) => {
    //     console.log("state", state);
    //     return state.user.userInfo;
    //   },
    // }),
    // ...mapState("user", ["userInfo"]),
    ...mapState(["sideBarWidth"]),
    // ...mapState({ test1: "test1" }),
  },
  created() {
    this.initData();
  },
  methods: {
    // ...mapMutations("user", ["setUserInfo"]),
    initData() {
      console.log("test store", this.userInfo, this.sideBarWidth, this.test1);
    },
  },
};
</script>
