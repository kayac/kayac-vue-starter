<template lang="pug">
.form-items
  .form-item
    label(for="name") {{ formItemName.name }}
    input(name="name" v-model.trim="formData.name" type="text")
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
  button(@click="submission") 送信
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
        name: "名前５文字",
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
    // 送信ボタンが押された時の処理
    submission: function() {
      // this.warningTextInitialize.clear(this.warningText);
      // 空白チェック
      if (this.isEmpty() && this.nameLengthCheck() && this.mailTypeCheck()){
        console.log("result: success");
      } else {
        console.log("result: error");
      }
      
    },
    isEmpty: function() {
      let result = true;
      Object.keys(this.formData).forEach((formDataItem) => {
        if(this.formData[formDataItem].length === 0) {
          result = false;
          this.warningText[formDataItem] = this.formItemName[formDataItem] + "を入力してください";
        }
      });
      return result;
    },
    nameLengthCheck: function() {
      // console.log("lengthCheck:" + (this.formData.name.length <= 4));
      // console.log("length:" + this.formData.name.length);
      if (this.formData.name.length <= 4) {
        this.warningText.name = "名前は５文字以上入力してください";
        return false;
      }
      return true;
    },
    mailTypeCheck: function() {
      let type = new RegExp(/*\@*\.*/);
        console.log(this.formData.mail);
      console.log("mailTypeCheck:" + this.formData.mail.exec(/*\@*\.*/));
      if (!type.exec(this.formData.mail)) {
        this.warningText.name = "正しいメールの形式を入力してください";
      }
      return true;
    },
    warningTextInitialize: function() {
      let defaultText = this.warningText;
      return {
        clear: (warningTextState) => {
          warningTextState = defaultText;
        }
      };
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
