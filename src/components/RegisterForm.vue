<template lang="pug">
form.form-items(@submit.prevent="submission")
  .form-item
    p.form-warning(v-if="isEmpty") 名前が入力されていません
    label(for="name") 名前
    input(name="name" v-model.trim="formData.name")

  .form-item
    label(for="mail") メールアドレス
    input(name="mail" v-model.trim="formData.mail" type="email")

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
        name: "dely",
        mail: "email@email.jp",
        password: "password"
      },
      validation: {
        name: true,
        mail: true,
        password: true
      }
    };
  },
  methods: {
    submission: function() {
      if ( this.isEmpty() ){
        console.log("success");
        console.log("送られるJSON : " + this.formData);
      }
      else {
        console.log("error");
      }
    },
    isEmpty: function() {
      let result = true;
      Object.keys(this.formData).forEach(function(formDataItem) {
        if( formDataItem.length === 0) {
          exit;
          result = false;
        }
      });
      return result;
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
