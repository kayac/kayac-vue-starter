<template lang="pug">
form.form-items(@submit.prevent="submission")
  .form-item
    label(for="name") 名前
    input(name="name" v-model="formData.names")

  .form-item
    label(for="mail") メールアドレス
    input(name="mail" v-model="formData.mail" type="email")

  .form-item
    label(for="password") パスワード
    input(name="password" v-model.trim="formData.password" type="password")

  .form-item
  button(type="submit") 送信
</template>

<script>
export default {
  name: "RegisterForm",
  data: () => {
    return {
      formData: {
        names: "f",
        mail: "ee@mm.ll",
        password: "pass"
      }
    };
  },
  methods: {
    submission: function (){
      console.log(this.formData);
    }
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
