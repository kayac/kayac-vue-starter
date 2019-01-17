<template lang="pug">
.form-items
  .form-item
    label(for="name") 名前
    input(name="name" v-model.trim="formData.name" type="text")
    p.form-warning(v-if="warningState.isEmptyCheck.name") 名前を入力してください
    p.form-warning(v-if="warningState.isnameLength") 名前は５文字以上にしてください

  .form-item
    label(for="mail") メール
    input(name="mail" v-model.trim="formData.mail" type="email")
    p.form-warning(v-if="warningState.isEmptyCheck.name") メールを入力してください
    p.form-warning(v-if="warningState.emptyMail") 正しいメールの形式にしてください

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
      formData: {
        name: "名前５文字",
        mail: "email@email.jp",
        password: "password"
      },
      warningState: {
        isEmptyCheck: {
          name: false,
          mail: false,
          password: false,
        },
        isNameLengthCheck: false,
        isMailTypeCheck: false
      }
    };
  },
  methods: {
    // 送信ボタンが押された時の処理
    submission: function() {
      if (this.isEmpty() && this.nameLengthCheck() && this.mailTypeCheck()){
        console.log("result: success");
      } else {
        console.log("result: error");
      }
      
    },
    isEmpty: function() {
      let result = true;
      Object.keys(this.formData).forEach((formDataItem) => {
        result = (this.formData[formDataItem].length === 0) ? true : false;
        this.warningState.isEmptyCheck[formDataItem] = !result;
      });
      return result;
    },
    nameLengthCheck: function() {
      // console.log("lengthCheck:" + (this.formData.name.length <= 4));
      // console.log("length:" + this.formData.name.length);
      this.warningState.nameLengthCheck = (this.formData.name.length <= 4) ? true : false;
      return !this.warningState.nameLengthCheck;
    },
    mailTypeCheck: function() {
      let type = new RegExp(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-]/);
      // console.log(this.formData.mail);
      // console.log(type);
      // console.log("mailTypeCheck: " + type.test(this.formData.mail));
      this.warningState.isMailTypeCheck = type.test(this.formData.mail) ? true : false;
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
