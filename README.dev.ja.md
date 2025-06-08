# 開発情報

本稿では、開発の方法と技術的な詳細を記述します。

## 開発環境構築

このプロジェクトは mise の利用を仮定しています。
mise をインストールしてください。

## ビルドとインストール

### ビルド

対応言語などは、[build/languages.js](build/languages.js) に定義されており、
主にこのファイルを手動で管理します。

「ビルド」の実行によって、 `languages.js` などから実際の文法定義等が生成されます。

ビルドは以下のコマンドで行います。

```sh
npm run build
```

### VSIX のビルド

拡張を VSIX ファイルとしてビルドするには、以下のコマンドを実行してください。

```sh
npm run vsce:package
```

VSIX ファイルは `dist` ディレクトリに出力されます。

VSCode の `Extensions: install from VSIX...` コマンドで VSIX ファイルをインストールできます。（VSCode のコマンドは `Ctrl+Shift+P`（Windows）または `Cmd+Shift+P`（Mac）で開くコマンドパレットから実行できます。）

NOTE: 動作確認をするだけであれば、後掲のデバッグ起動でも可能です。

## 動作確認方法

拡張機能が有効になっている状態で、以下を順に実行してください。

- VSCode の `File: New Untitled Text File` コマンドを実行
- VSCode の `Change Language Mode` コマンドを実行し、 `javascript` または `typescript` に変更してください。
- テンプレートリテラルタグのシンタックスハイライトを試します。

また、言語を `df-sql` に変更して、 `df-sql` 自体のシンタックスハイライト等を直接試すこともできます。

## デバッグ起動

`.vscode/launch.shared.json` を参考に `.vscode/launch.json` を作成してください。（[swellaby.workspace-config-plus](https://marketplace.visualstudio.com/items?itemName=swellaby.workspace-config-plus) を有効にしていれば、自動的に作成されます。）

`Run and Debug` パネルを開き、`Launch extension` を実行してください。拡張機能が有効な状態で VSCode が起動されます。

## 仕組み

この VSCode 拡張は、以下の 2 つの部分で構成されています。

- Dataform Tools を参考に、 SQL のハイライト部分を `df-sql` という言語 ID で定義します。
- `/* df-sql */` とコメントされたテンプレートリテラルタグ内は `df-sql` として扱われるように設定します。

## （参考） DF-SQL

SQLX には、 config や js のブロックと、それに含まれない SQL の部分があります。この SQL 部分は JS 風のテンプレート埋め込みができる、拡張された SQL です。そこで、この拡張された SQL を DF-SQL と呼ぶことにします。（SQLTT と呼ぼうとしたんだけど、[優秀な先行者](https://github.com/bitifet/sqltt)がいて紛らわしいのでひとまず DF-SQL にしました。 sqltt 自体も大変興味深いです。）

現在は DF-SQL を [TextMate grammar](https://markdown-all-in-one.github.io/docs/contributing/textmate-language-grammar.html#introduction) を用いて簡易にシンタックスハイライトさせています。また実装は [ashish10alex/vscode-dataform-tools](https://github.com/ashish10alex/vscode-dataform-tools) と [mjbvz/vscode-comment-tagged-templates](https://github.com/mjbvz/vscode-comment-tagged-templates) を参考にしています。

## （参考） 配布されている VSCode 拡張をダウンロードする方法

インストール前のパッケージであれば [VSCode 上から GUI でダウンロードできます](https://kuranabe.hatenablog.com/entry/2025/03/11/201224)。

例として、 [comment-tagged-templates](https://marketplace.visualstudio.com/items?itemName=bierner.comment-tagged-templates) をダウンロードする方法を説明します。

comment-tagged-templates は publisher が bierner なので、識別子は `bierner.comment-tagged-templates` となります。

利用可能なバージョンは以下のコマンドで一覧できます。

```sh
pnpm dlx vsce show bierner.comment-tagged-templates --json | jq
```

例として version 0.3.3 をダウンロードするには以下のコマンドを実行します。

```sh
curl -L -o bierner.comment-tagged-templates.0.3.3.zip 'https://marketplace.visualstudio.com/_apis/public/gallery/publishers/bierner/vsextensions/comment-tagged-templates/0.3.3/vspackage'
```

## （参考） シンタックスハイライト機能の開発詳細

一般に、独自言語に対して、コードジャンプやシンタックスハイライトを提供するには、IDE（エディタ）ごとに独自の方法を提供する必要がありました。

それらの問題を解決するため LSP（Language Server Protocol）が提案されました。
共通プロトコルである LSP に準拠したサーバーさえ実装しておけば、各 IDE がコードジャンプなどを自動で提供してくれる仕組みで、現在はこれがデファクトスタンダードとなっています。

シンタックスハイライトは少し複雑です。LSP には semantic tokens という仕組みがあり、どのトークンがどの種類のトークンであるかを示すことができます。IDE 側は現在のテーマに合わせて、どの種類のトークンをどの色やスタイルで表示するかを決定できます。ただし、VSCode 拡張として提供されているものの実装の大半はこの方法をとっておらず、TextMate Grammar を用いてシンタックスハイライトを提供しています。（もともと VSCode が TextMate Grammar のみに対応していたことと、実装が手軽なことが理由ではないかと思います。）

TextMate Grammar は、 TextMate というエディタがシンタックスハイライトを提供するために独自に定義していた文法ファイルでしたが、多くの IDE は TextMate Grammar に対応しており、VSCode もその 1 つです。シンタックスハイライトの標準的な仕様がなかったため、TextMate Grammar が利用されてきました。

[VSCode は TextMate Grammar と LSP の両方に対応しています。](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide)

TextMate Grammar と LSP の特徴は以下の通りです。

|名前|特徴|
|---|---|
|TextMate Grammar|シンタックスハイライト機能を VSCode 拡張として手軽に実装できます。複雑な文法には対応できないですが、 TextMate Grammar で十分な場合もあります。|
|LSP|複雑な文法にも対応できます。サーバーの実装が必要です。 LSP に対応した IDE が必ずしも semantic tokens によるシンタックスハイライトにも対応しているわけではないので、確認が必要です。|

LSP による実装は、一般にはサーバーの実装が必要になりますが、TypeScript ではより簡易的な実装が可能です。 TypeScript には [Standalone Server (tsserver)](https://github.com/microsoft/TypeScript/wiki/Standalone-Server-%28tsserver%29) という仕組みがあり、LSP の TypeScript 特化版のようなものとなっています。この tsserver には plugin の仕組みがあり、 plugin を実装するだけで、TypeScript の言語処理を拡張できます。（TypeScript のカスタムテンプレートリテラルタグの内部で独自シンタックスハイライトを提供することも可能です。）さらに、[VSCode 拡張では tsserver plugin の導入を簡易に実装できます](https://github.com/Microsoft/vscode/issues/41113)（特に[このコメント](https://github.com/microsoft/vscode/issues/5961#issuecomment-360890376)で明確に言及されています。）。
