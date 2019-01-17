<template lang="pug">
form.form-items(@submit.prevent="submission")
  .form-item
    label(for="name") {{ formItemName.name }}
    input(name="name" v-model.trim="formData.name")
    p.form-warning(v-if="warningText.name") {{ warningText.name }}

  .form-item
    label(for="mail")  {{ formItemName.mail }}
    input(name="mail" v-model.trim="formData.mail" type="email")
    p.form-warning(v-if="warningText.mail") {{ warningText.mail }}

  .form-item
    label(for="password")  {{ formItemName.password }}
    input(name="password" v-model.trim="formData.password" type="password")
    p.form-warning(v-if="warningText.password") {{ warningText.password }}

  .form-item
  button(type="submit") 送信
</template>

<script>
export default {
  name: "RegisterForm",
  data: () => {
    return {
      formItemName: {
        name: "名前",
        mail: "メールアドレス",
        password: "パスワード"
      },
      formData: {
        name: "dely",
        mail: "email@email.jp",
        password: "password"
      },
      warningText: {
        name: null,
        mail: null,
        password: null
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
          this.warningText[formDataItem] = this.formItemName[formDataItem] + "を入力してください"
        } else {
          this.warningText[formDataItem] = null;
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
  &-item {
    padding-bottom: 20px;
  }
  &-warning {
    font-size: 80%;
  }
}
</style>
