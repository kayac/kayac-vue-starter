<template lang="pug">
form.form-items(@submit.prevent="submission")
  .form-item
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
      Object.keys(this.formData).forEach((formDataItem) => {
        if( this.formData[formDataItem].length === 0) {
          result = false;
        }
      });
      console.log(result);
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
