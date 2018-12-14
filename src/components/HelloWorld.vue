<template lang="pug">
    .hello
      p.text Hello!World.
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.text {
  font-style: italic;
  font-weight: bold;
}
</style>
