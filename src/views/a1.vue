<template>
  <div class="container">
    a1
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
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
    ...mapState("user", ["userInfo"]),
    ...mapState("global", ["sideBarWidth"]),
  },
  created() {
    this.initData();
  },
  methods: {
    ...mapMutations("user", ["setUserInfo"]),
    initData() {
      // console.log("test store", this.userInfo, this.sideBarWidth);
    },
  },
};
</script>
