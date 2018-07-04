vue-cliのインストールから
```
npm install -g vue-cli # => version 2.9.x
npm install -g @vue/cli 3 => version 3
```
最初インストールした時、上の古い方をインストールしてしまったのだけど、その状態で`vue create app`したら、
```
vue create is a Vue CLI 3 only command and you are using Vue CLI 2.9.6.
  You may want to run the following to upgrade to Vue CLI 3:

  npm uninstall -g vue-cli
  npm install -g @vue/cli
```
ちゃんと新しいの入れろよ！って注意喚起をしてくれる。親切じゃ。


あとは、`vue ui`なるものがあって、terminalからでなく、ブラウザのGUIを利用していプロジェクトを作成できる。  

```
vue create app
# 最初、変なエラーで詰まったけど以下で解決
# https://github.com/vuejs-templates/webpack/issues/990#issuecomment-395787701

cd app
npm run serve
# もしくはcd app/src配下に言って、vue serveでも良さそう？
```

これでlocalhost:8080とかに行けば最初の画面が見れるはず

---------

### Components of the System
[公式のoverview](https://cli.vuejs.org/guide/#components-of-the-system)を見てみると
1. CLI: teminal環境に`vue`コマンドを提供してくれる @vue/cli
2. CLI Service: webpackとwebpack-dev-serverで構成されているnpmパッケージの依存を管理する
3. CLI Plugins: lintやらe2e testやら色々プラグインを追加したり管理してくれる

この3つが主なVueCLIの機能。
