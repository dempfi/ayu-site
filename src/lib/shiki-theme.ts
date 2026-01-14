import type { ThemeRegistration } from 'shiki'

const syntaxVar = (name: string) => `var(--syntax-${name})`

export const ayuShiki: ThemeRegistration = {
  name: 'ayu',
  colors: {
    'editor.background': 'var(--editor-bg)',
    'editor.foreground': 'var(--editor-fg)',
    'editor.lineHighlightBackground': 'var(--editor-line)',
    'editorLineNumber.foreground': 'var(--editor-line-number)',
  },
  tokenColors: [
    {
      settings: { foreground: 'var(--editor-fg)' },
    },
    {
      name: 'Comment',
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { fontStyle: 'italic', foreground: syntaxVar('comment') },
    },
    {
      name: 'String',
      scope: ['string', 'constant.other.symbol'],
      settings: { foreground: syntaxVar('string') },
    },
    {
      name: 'Regular Expressions and Escape Characters',
      scope: ['string.regexp', 'constant.character', 'constant.other'],
      settings: { foreground: syntaxVar('regexp') },
    },
    {
      name: 'Number',
      scope: ['constant.numeric'],
      settings: { foreground: syntaxVar('constant') },
    },
    {
      name: 'Built-in constants',
      scope: ['constant.language'],
      settings: { foreground: syntaxVar('constant') },
    },
    {
      name: 'Variable',
      scope: ['variable', 'variable.parameter.function-call'],
      settings: { foreground: 'var(--editor-fg)' },
    },
    {
      name: 'Member Variable',
      scope: ['variable.member', 'variable.other.property'],
      settings: { foreground: syntaxVar('markup') },
    },
    {
      name: 'Language variable',
      scope: ['variable.language'],
      settings: { fontStyle: 'italic', foreground: syntaxVar('tag') },
    },
    {
      name: 'Storage',
      scope: ['storage'],
      settings: { foreground: syntaxVar('keyword') },
    },
    {
      name: 'Keyword',
      scope: ['keyword'],
      settings: { foreground: syntaxVar('keyword') },
    },
    {
      name: 'Operators',
      scope: ['keyword.operator'],
      settings: { foreground: syntaxVar('operator') },
    },
    {
      name: 'Separators',
      scope: ['punctuation.separator', 'punctuation.terminator'],
      settings: { foreground: 'var(--editor-fg-70a)' },
    },
    {
      name: 'Punctuation',
      scope: ['punctuation.section', 'punctuation.bracket'],
      settings: { foreground: 'var(--editor-fg)' },
    },
    {
      name: 'Accessor',
      scope: ['punctuation.accessor'],
      settings: { foreground: syntaxVar('operator') },
    },
    {
      name: 'Template expression',
      scope: ['punctuation.definition.template-expression'],
      settings: { foreground: syntaxVar('keyword') },
    },
    {
      name: 'Types',
      scope: ['entity.name.type', 'entity.name.class', 'support.type', 'support.class'],
      settings: { foreground: syntaxVar('entity') },
    },
    {
      name: 'Inherited class',
      scope: ['entity.other.inherited-class'],
      settings: { foreground: syntaxVar('tag') },
    },
    {
      name: 'Function name',
      scope: ['entity.name.function', 'meta.function-call.generic'],
      settings: { foreground: syntaxVar('func') },
    },
    {
      name: 'Function arguments',
      scope: ['variable.parameter', 'meta.parameter'],
      settings: { foreground: syntaxVar('constant') },
    },
    {
      name: 'Function call',
      scope: ['variable.function', 'support.function.go'],
      settings: { foreground: syntaxVar('func') },
    },
    {
      name: 'Library function',
      scope: ['support.function', 'support.macro'],
      settings: { foreground: syntaxVar('markup') },
    },
    {
      name: 'Imports and packages',
      scope: ['entity.name.import', 'entity.name.package'],
      settings: { foreground: syntaxVar('string') },
    },
    {
      name: 'Entity name',
      scope: ['entity.name'],
      settings: { foreground: syntaxVar('entity') },
    },
    {
      name: 'Tag',
      scope: ['entity.name.tag', 'meta.tag.sgml'],
      settings: { foreground: syntaxVar('tag') },
    },
    {
      name: 'JSX Component',
      scope: ['support.class.component'],
      settings: { foreground: syntaxVar('entity') },
    },
    {
      name: 'Tag punctuation',
      scope: ['punctuation.definition.tag.end', 'punctuation.definition.tag.begin', 'punctuation.definition.tag'],
      settings: { foreground: 'var(--syntax-tag-50a)' },
    },
    {
      name: 'Tag attribute',
      scope: ['entity.other.attribute-name'],
      settings: { foreground: syntaxVar('func') },
    },
    {
      name: 'Library type',
      scope: ['support.type', 'support.class', 'source.go storage.type'],
      settings: { foreground: syntaxVar('tag') },
    },
    {
      name: 'Decorators',
      scope: [
        'meta.decorator variable.other',
        'meta.decorator punctuation.decorator',
        'storage.type.annotation',
        'entity.name.function.decorator',
      ],
      settings: { foreground: syntaxVar('special') },
    },
    {
      name: 'Invalid',
      scope: ['invalid'],
      settings: { foreground: 'var(--error)' },
    },
    {
      name: 'Markup heading',
      scope: ['markup.heading', 'markup.heading entity.name'],
      settings: { fontStyle: 'bold', foreground: syntaxVar('string') },
    },
    {
      name: 'Markup links',
      scope: ['markup.underline.link', 'string.other.link'],
      settings: { foreground: syntaxVar('tag') },
    },
    {
      name: 'Markup italic',
      scope: ['markup.italic'],
      settings: { fontStyle: 'italic', foreground: syntaxVar('markup') },
    },
    {
      name: 'Markup bold',
      scope: ['markup.bold'],
      settings: { fontStyle: 'bold', foreground: syntaxVar('markup') },
    },
    {
      name: 'Markup code',
      scope: ['markup.raw', 'markup.inline.raw'],
      settings: { foreground: syntaxVar('operator') },
    },
    {
      name: 'Markup list',
      scope: ['markup.list punctuation.definition.list.begin'],
      settings: { foreground: syntaxVar('func') },
    },
  ],
}
