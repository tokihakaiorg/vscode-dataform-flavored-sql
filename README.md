# Dataform flavored SQL VSCode extension

[![Version](https://vsmarketplacebadges.dev/version/tokihakaiorg.dataform-flavored-sql.svg?&colorB=tan)](https://marketplace.visualstudio.com/items?itemName=tokihakaiorg.dataform-flavored-sql) [![Installs](https://vsmarketplacebadges.dev/installs/tokihakaiorg.dataform-flavored-sql.svg)](https://marketplace.visualstudio.com/items?itemName=tokihakaiorg.dataform-flavored-sql) [![Downloads](https://vsmarketplacebadges.dev/downloads/tokihakaiorg.dataform-flavored-sql.svg)](https://marketplace.visualstudio.com/items?itemName=tokihakaiorg.dataform-flavored-sql) [![Rating Short](https://vsmarketplacebadges.dev/rating-short/tokihakaiorg.dataform-flavored-sql.svg)](https://marketplace.visualstudio.com/items?itemName=tokihakaiorg.dataform-flavored-sql) [![Rating Star](https://vsmarketplacebadges.dev/rating-star/tokihakaiorg.dataform-flavored-sql.svg)](https://marketplace.visualstudio.com/items?itemName=tokihakaiorg.dataform-flavored-sql)

[![TrendingDaily](https://vsmarketplacebadges.dev/trending-daily/tokihakaiorg.dataform-flavored-sql.svg?&colorB=blue)](https://marketplace.visualstudio.com/items?itemName=tokihakaiorg.dataform-flavored-sql) [![TrendingWeekly](https://vsmarketplacebadges.dev/trending-weekly/tokihakaiorg.dataform-flavored-sql.svg?&colorB=blue)](https://marketplace.visualstudio.com/items?itemName=tokihakaiorg.dataform-flavored-sql) [![TrendingMonthly](https://vsmarketplacebadges.dev/trending-monthly/tokihakaiorg.dataform-flavored-sql.svg?&colorB=blue)](https://marketplace.visualstudio.com/items?itemName=tokihakaiorg.dataform-flavored-sql)

## Overview

This is a [VSCode extension](https://marketplace.visualstudio.com/items?itemName=tokihakaiorg.dataform-flavored-sql) that provides syntax highlighting for Dataform-flavored SQL written inside JavaScript and TypeScript template literal tags.

![example.png](https://github.com/tokihakaiorg/vscode-dataform-flavored-sql/raw/5bfb4791eb6e629dd1472657e5a2a1a28dc9ae06/docs/example.png)

## Usage

When you write code like the following in JavaScript or TypeScript, the SQL inside the template literal tag will be syntax highlighted:

```js
const sqlString = /* df-sql */ `
  SELECT *
  FROM ${ref('my_schema', 'my_table')}
`;
```

The SQL inside the template literal tag is assigned the language ID `df-sql`, and syntax highlighting similar to [ashish10alex/vscode-dataform-tools](https://github.com/ashish10alex/vscode-dataform-tools) is applied.

## Thanks

- [ashish10alex/vscode-dataform-tools](https://github.com/ashish10alex/vscode-dataform-tools)
- [mjbvz/vscode-comment-tagged-templates](https://github.com/mjbvz/vscode-comment-tagged-templates)
