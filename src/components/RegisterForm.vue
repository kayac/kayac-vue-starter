<template lang="pug">
form.form-elm
  div
    label(for="name") 名前
    input(name="name" v-model="name")

  div
    label(for="mail") メールアドレス
    input(name="mail" v-model="mail" type="email")

  div
    label(for="password") パスワード
    input(name="password" v-model="password" type="password")

  button(type="submit") 送信
</template>

<script>
export default {
  name: "RegisterForm",
  data: () => {
    return {
      name: "",
      mail: "",
      password: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.form {
  &-require {
    font-weight: bold;
  }
}
</style>
