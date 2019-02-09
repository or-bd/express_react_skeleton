module.exports = {
  "extends": "airbnb-base",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    }
  },
  "rules": {
    "no-plusplus": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    "no-unused-expressions": "off",
    "no-restricted-syntax": ["error", "ForInStatement", "LabeledStatement", "WithStatement"],
    "arrow-body-style": "off",
    "no-use-before-define": "off",
    "no-return-await": "off",
    "import/no-extraneous-dependencies": "off",
    "class-methods-use-this": "off",
    "object-curly-newline": "off"
  },
  "globals": {
    "_": true,
    "after": true,
    "afterEach": true,
    "before": true,
    "beforeEach": true,
    "describe": true,
    "it": true,
    "window": true,
    "document": true,
    "navigator": true
  }
};
