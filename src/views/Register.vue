<template lang="pug">
  RegisterForm
</template>

<script>
import { mapState, mapActions } from "vuex";
// @ is an alias to /srcd
import RegisterForm from "@/components/RegisterForm.vue";

export default {
  name: "register",
  components: {
    RegisterForm
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
