<template lang="pug">
form.form-items
  .form-item
    label(for="name") 名前
    input(name="name" v-model="name")

  .form-item
    label(for="mail") メールアドレス
    input(name="mail" v-model="mail" type="email")

  .form-item
    label(for="password") パスワード
    input(name="password" v-model.trim="password" type="password")

  .form-item
  button 送信
</template>

<script>
export default {
  name: "RegisterForm",
  data: () => {
    return {
      name: "f",
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
