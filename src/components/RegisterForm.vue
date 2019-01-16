<template lang="pug">
form.form-items(@submit.prevent="submission")
  .form-item
    label(for="name") 名前
    input(name="name" v-model.trim="formData.name.content")

  .form-item
    label(for="mail") メールアドレス
    input(name="mail" v-model.trim="formData.mail.content" type="email")

  .form-item
    label(for="password") パスワード
    input(name="password" v-model.trim="formData.password.content" type="password")

  .form-item
  button(type="submit") 送信
</template>

<script>
export default {
  name: "RegisterForm",
  data: () => {
    return {
      formData: {
        name: {
          content: "dely",
          require: true
        },
        mail: {
          content: "email@email.jp",
          require: true
        },
        password: {
          content: "password",
          require: true
        }
      }
    };
  },
  methods: {
    submission: function() {
      console.log("送られるJSON : " + this.formData);
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
