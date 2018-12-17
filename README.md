kayac-vue-starter
====
**Vue CLIベースの開発環境になります。**

## 事前に用意するもの
- node.js (version 10.14.2以上)

## 環境構築

開発に使うnpmパッケージをインストール
```
npm install
```

## ファイル構成

- `README.md`
  - このファイルです。
- `package.json`
  - 依存するnpmパッケージに関する設定ファイルです。
- `vue.config.js`
  - Vue CLIの設定をカスタマイズするファイルです。
  - loaderの追加, build先の指定などもここでやります。
- `.eslintrc.js`
  - ESLintの設定ファイル
  - `;`の有無等のルールの修正をしたい場合はこのファイルを修正してください。
- `.postcssrc.js`  
  - postcssの設定ファイル
  - デフォルトでautoprefixerが入っています。
- `.babel.config.js`  
  - babelの設定ファイル。
  - dynamic importなどのpluginを使う場合はこのファイルを修正してください。	
- `public`
  - テンプレートとなるHTMLファイルやfavicon、OGP画像などの静的ファイルを置きます。  
- `dist`
  - Web公開されるファイルの置き場所です。   
- `src/assets`
  - コンポーネント内で使用する画像、共通で使うscssファイル、meta情報などのjsonファイルはここに格納されています。
- `src/components`  
  - 単一ファイルコンポーネントを置く場所。
- `src/store`  
  - Vuex。
- `src/views`  
  - 各ページに該当するVueファイル。
- `src/App.vue`  
  - 全てページの親となる単一ファイルコンポーネント。
- `src/router.js`  
  - ルーティング
  - 遷移が増えた時に追加します。
## 開発手順

shellから以下のコマンドを実行することで、各種ビルド・タスク実行が可能です。

- `npm run start` / `npm start`
  - 開発用ブラウザを立ち上げ、その後ソースコードに修正があれば自動ビルド・自動ブラウザ更新します
  - 基本的には、このコマンドを実行しておくだけで開発が可能なはずです。
- `npm run build` 
  - ファイルをビルドします。vue-cli内部で動いている`webpack-dev-server`では、ビルドファイルはサーバー側で保持します。
    そのため、ファイルとして出力するには `npm run build` が必要になります。
- `npm run lint` 
  - Lintが走ります。  

## 使用言語

- HTMLテンプレート: [pug](https://pugjs.org/api/getting-started.html)
- CSSメタ言語: [Sass(scss)](http://sass-lang.com/)
- Javascript: [ES2015(ECMAScript 6)](https://babeljs.io/docs/learn-es2015/)

## 対応ブラウザ
- 各種モダンブラウザ最新バージョン・IE11以上
  - 対応ブラウザを変更する場合、`package.json`の`browserlist`を修正することをお忘れなく

## 依存ライブラリ

`npm install`でインストールされるライブラリ（一部）です。
全てを理解していなくても、開発は問題なく行えますが、挙動に問題がある場合・カスタマイズしたい場合などに参照してみてください。

- [Babel](https://babeljs.io/)
- [Reset CSS](http://meyerweb.com/eric/tools/css/reset/)
- [PostCSS](http://postcss.org/)
- [Vue.js](https://jp.vuejs.org/index.html)
- [VueCLI](https://cli.vuejs.org)
- [Vuex](https://vuex.vuejs.org/ja/)
- [Vue Router](https://router.vuejs.org/ja/)
- [Lodash](https://lodash.com/docs/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
