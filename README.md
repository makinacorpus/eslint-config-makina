# eslint-config-makina [![npm version][]][npm link]

This package provides [Makina Corpus][]'s `.eslintrc` as an extensible shared config.

## Install

```sh
npm install eslint-config-makina
```

Then, add this to your `.eslintrc` file:

```json
{
  "extends": "makina"
}
```

or `.eslintrc.js`:

```js
module.exports = {
  extends: 'standard',
};
```

[npm version]: https://badge.fury.io/js/eslint-config-makina.svg
[Makina Corpus]: https://makina-corpus.com "Experts en logiciels libres, portails web et cartographie"
[npm link]: https://www.npmjs.com/package/eslint-config-makina "npm package"