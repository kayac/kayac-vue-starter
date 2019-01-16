<template lang="pug">
form.form-items
  div.form-item
    label(for="name") 名前
    input(name="name" v-model="name")

  div.form-item
    label(for="mail") メールアドレス
    input(name="mail" v-model="mail" type="email")

  div.form-item
    label(for="password") パスワード
    input(name="password" v-model.trim="password" type="password")

  button(@click="Submission()" @submit.prevent="onSubmit") 送信
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
