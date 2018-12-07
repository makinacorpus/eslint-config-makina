const error  = 'error';
const warn   = 'warn';
const off    = 'off';
const always = 'always';

module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    jest: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: false,
  },
  plugins: [
    'babel',
  ],
  rules: {
    'arrow-parens':                      [error, 'as-needed'],
    'camelcase':                         [warn],
    'no-param-reassign':                 [warn],
    'object-curly-newline':              [warn, { consistent: true }],
    'implicit-arrow-linebreak':          [off],
    'prefer-template':                   [warn],
    'space-before-function-paren':       [error, always],

    'import/extensions':                 [warn],
    'import/no-extraneous-dependencies': [warn, { devDependencies: ['**/*.test.js', '**/*.spec.js', '**/*.stories.js'] }],
    'import/no-named-as-default':        [off],
    'import/no-unresolved':              [warn],

    'jsx-a11y/anchor-is-valid':          [error, { specialLink: ['to'] }],
    'jsx-a11y/label-has-for':            [error, { required: { some: ['nesting', 'id'] } }],

    'react/jsx-filename-extension':      [warn, { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': [off],
    'react/no-unescaped-entities':       [off],
    'react/prefer-stateless-function':   [warn],
    'react/prop-types':                  [off],

    'key-spacing': [error, {
      singleLine: { mode: 'strict' },
      multiLine:  { mode: 'minimum' },
    }],

    'no-multi-spaces': [warn, {
      exceptions: {
        Property:           true,
        VariableDeclarator: true,
        ImportDeclaration:  true,
        BinaryExpression:   true,
      },
    }],

    'no-unused-expressions': [warn, {
      allowShortCircuit:    true,
      allowTernary:         true,
      allowTaggedTemplates: true,
    }],
  },
};
