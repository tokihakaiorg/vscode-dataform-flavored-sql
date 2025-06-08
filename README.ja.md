# Dataform flavored SQL VSCode extension

[![Version](https://vsmarketplacebadges.dev/version/tokihakaiorg.dataform-flavored-sql.svg?&colorB=tan)](https://marketplace.visualstudio.com/items?itemName=tokihakaiorg.dataform-flavored-sql) [![Installs](https://vsmarketplacebadges.dev/installs/tokihakaiorg.dataform-flavored-sql.svg)](https://marketplace.visualstudio.com/items?itemName=tokihakaiorg.dataform-flavored-sql) [![Downloads](https://vsmarketplacebadges.dev/downloads/tokihakaiorg.dataform-flavored-sql.svg)](https://marketplace.visualstudio.com/items?itemName=tokihakaiorg.dataform-flavored-sql) [![Rating Short](https://vsmarketplacebadges.dev/rating-short/tokihakaiorg.dataform-flavored-sql.svg)](https://marketplace.visualstudio.com/items?itemName=tokihakaiorg.dataform-flavored-sql) [![Rating Star](https://vsmarketplacebadges.dev/rating-star/tokihakaiorg.dataform-flavored-sql.svg)](https://marketplace.visualstudio.com/items?itemName=tokihakaiorg.dataform-flavored-sql)

[![TrendingDaily](https://vsmarketplacebadges.dev/trending-daily/tokihakaiorg.dataform-flavored-sql.svg?&colorB=blue)](https://marketplace.visualstudio.com/items?itemName=tokihakaiorg.dataform-flavored-sql) [![TrendingWeekly](https://vsmarketplacebadges.dev/trending-weekly/tokihakaiorg.dataform-flavored-sql.svg?&colorB=blue)](https://marketplace.visualstudio.com/items?itemName=tokihakaiorg.dataform-flavored-sql) [![TrendingMonthly](https://vsmarketplacebadges.dev/trending-monthly/tokihakaiorg.dataform-flavored-sql.svg?&colorB=blue)](https://marketplace.visualstudio.com/items?itemName=tokihakaiorg.dataform-flavored-sql)

## 概要

JavaScript および TypeScript のテンプレートリテラルタグ内に書かれた Dataform-flavored な SQL にシンタックスハイライトを提供する [VSCode 拡張](https://marketplace.visualstudio.com/items?itemName=tokihakaiorg.dataform-flavored-sql)です。

![example.png](https://github.com/tokihakaiorg/vscode-dataform-flavored-sql/raw/5bfb4791eb6e629dd1472657e5a2a1a28dc9ae06/docs/example.png)

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
