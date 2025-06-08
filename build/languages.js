/**
 * List of languages
 *
 * name: Human readable identifier for the language
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
    { name: 'js_regexp', identifiers: ['regexp'], source: 'source.js.regexp' },
    { name: 'json', language: 'json', identifiers: ['json', 'sublime-settings', 'sublime-menu', 'sublime-keymap', 'sublime-mousemap', 'sublime-theme', 'sublime-build', 'sublime-project', 'sublime-completions'], source: 'source.json' },
    { name: 'df_sql', language: 'df-sql', identifiers: ['df-sql'], source: 'source.df-sql' },
];
exports.languages = languages;
