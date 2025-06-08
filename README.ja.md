# Dataform flavored SQL VSCode extension

## 概要

<!-- TODO: Add extension links -->

JavaScript および TypeScript のテンプレートリテラルタグ内に書かれた Dataform-flavored な SQL にシンタックスハイライトを提供する VSCode 拡張です。

<!-- TODO: Fix image links -->
![example.png](docs/example.png)

## 使い方

JavaScript および TypeScript で以下のような記述をすると、テンプレートリテラルタグ内の SQL がシンタックスハイライトされます。

```js
const sqlString = /* df-sql */ `
  SELECT *
  FROM ${ref('my_schema', 'my_table')}
`;
```

テンプレートリテラルタグ内の SQL は `df-sql` という言語 ID が割り当てられており、おおよそ [ashish10alex/vscode-dataform-tools](https://github.com/ashish10alex/vscode-dataform-tools) と同様のシンタックスハイライトが適用されます。

## Thanks

- [ashish10alex/vscode-dataform-tools](https://github.com/ashish10alex/vscode-dataform-tools)
- [mjbvz/vscode-comment-tagged-templates](https://github.com/mjbvz/vscode-comment-tagged-templates)
