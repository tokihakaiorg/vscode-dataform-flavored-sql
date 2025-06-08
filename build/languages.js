/**
 * List of languages
 *
 * name: Human readable indentifier for the langauge
 *
 * language: vscode language identifier
 *
 * identifiers: Strings used in comments to identify language
 *
 * source: Name of the toplevel textmate scope for the language
 */
const languages = [
    // The syntax of languages listed earlier in this array takes precedence over those listed later.
    // Therefore, the order of languages in the `languages` array is important for correct syntax highlighting.
    { name: 'js', language: 'javascript', identifiers: ['js', 'jsx', 'javascript', 'es6', 'mjs'], source: 'source.js' },
    { name: 'js_regexp', identifiers: ['regexp'], source: 'source.js.regexp' },
    { name: 'ts', language: 'typescript', identifiers: ['typescript', 'ts'], source: 'source.ts' },
    { name: 'tsx', language: 'typescriptreact', identifiers: ['tsx'], source: 'source.tsx' },
    { name: 'df_sql', language: 'df-sql', identifiers: ['df-sql'], source: 'source.df-sql' },
];
exports.languages = languages;
