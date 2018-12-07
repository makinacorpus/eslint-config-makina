const error  = 'error';
const warn   = 'warn';
const off    = 'off';
const always = 'always';

module.exports = {
  extends: './index.js',
  rules: {
    'quote-props': [error, 'consistent-as-needed'],
  }
};
