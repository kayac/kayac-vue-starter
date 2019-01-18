<template lang="pug">
.form-items
  .form-item
    label(for="name") 名前
    input(name="name" v-model.trim="formData.name" type="text")
    p.form-warning(v-if="warningState.isEmptyCheck.name") 名前を入力してください
    p.form-warning(v-else-if="warningState.isNameLengthCheck") 名前は５文字以上にしてください

  .form-item
    label(for="mail") メール
    input(name="mail" v-model.trim="formData.mail" type="email")
    p.form-warning(v-if="warningState.isEmptyCheck.mail") メールを入力してください
    p.form-warning(v-else-if="warningState.isMailTypeCheck") 正しいメールの形式にしてください

  .form-item
    label(for="password") パスワード
    input(name="password" v-model.trim="formData.password" type="password")
    p.form-warning(v-if="warningState.isEmptyCheck.password") パスワードを入力してください

  .form-item
  button(@click="submission") 送信
</template>

<script>
export default {
  name: "RegisterForm",
  data: () => {
    return {
      isValidation: true,
      formData: {
        name: "aaaaa",
        mail: "aa@aa.a",
        password: "a"
      },
      warningState: {
        isEmptyCheck: {
          name: false,
          mail: false,
          password: false
        },
        isNameLengthCheck: false,
        isMailTypeCheck: false
      }
    };
  },
  methods: {
    // 送信ボタンが押された時の処理
    submission: function() {
      if (this.checkEmpty() && this.checkNameLength() && this.checkMailType()) {
        // process in succeeded
      } else {
        this.isValidation = false;
      }
      console.log("result: " + (this.isValidation ? "success" : "failure"));
    },
    checkEmpty: function() {
      let result = true;
      Object.keys(this.formData).forEach(formDataItem => {
        this.warningState.isEmptyCheck[formDataItem] =
          this.formData[formDataItem].length === 0 ? true : false;
        result = !this.warningState.isEmptyCheck[formDataItem];
      });
      return result;
    },
    checkNameLength: function() {
      console.log("lengthCheck: " + !(this.formData.name.length <= 4));
      console.log("length: " + this.formData.name.length);
      this.warningState.isNameLengthCheck =
        this.formData.name.length <= 4 ? true : false;
      return !this.warningState.isNameLengthCheck;
    },
    checkMailType: function() {
      let type = new RegExp(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-]/);
      console.log(this.formData.mail);
      console.log(type);
      console.log("mailTypeCheck: " + type.test(this.formData.mail));
      this.warningState.isMailTypeCheck = !type.test(this.formData.mail)
        ? true
        : false;
      return !this.warningState.mailTypeCheck;
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
