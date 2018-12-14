<template lang="pug">
  .home
    img(src="../assets/logo.png" alt="Vue logo" @click="addCount")
    p {{ count }}
    HelloWorld(msg="Welcome to Your Vue.js App")
</template>

<script>
import { mapState, mapActions } from "vuex";
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  computed: {
    ...mapState(["count"])
  },
  methods: {
    ...mapActions(["increment"]),
    addCount() {
      this.increment();
    }
  }
};
</script>
