module.exports = {
  root: true,
  "env": {
    "es6": true
  },
  "plugins": [
    "@typescript-eslint",
    "react",
    // "promise"
  ],

  // Наборы правил
  "extends": [
    // Базовый набор правил eslint
    "eslint:recommended",
    "plugin:react/recommended",
    // "plugin:promise/recommended",

    "@react-native-community",
    // Отключаем правила из базового набора
    "plugin:@typescript-eslint/eslint-recommended",
    // Базовые правила для TypeScript
    "plugin:@typescript-eslint/recommended",
    // Правила TS, требующие инфо о типах
    "plugin:@typescript-eslint/recommended-requiring-type-checking",

    // "airbnb"
  ],
  // Движок парсинга
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    // Движку нужен проект TS для правил с типами
    "project": "./tsconfig.json",
    "tsconfigRootDir": ".",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 6
  },
  "settings": {
    "import/extensions": [
      ".js",
      ".jsx",
      ".ts",
      ".tsx"
    ],
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    }
  },
  "rules": {
    "no-var": "error",
    "semi": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "quotes": [
      "error",
      "single",
      {
        "allowTemplateLiterals": true
      }
    ],
    "prettier/prettier": 0,
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        "allowTypedFunctionExpressions": true
      }
    ],

    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "react/state-in-constructor": "off",
    "react/jsx-filename-extension": "off",
    "arrow-body-style": [
      "warn",
      "as-needed"
    ],
    "comma-dangle": "off",
    "no-use-before-define": "off",
    "object-curly-newline": "off",
    "no-confusing-arrow": ["error", {"allowParens": true}],
    "arrow-parens": "off",
    "implicit-arrow-linebreak": "off",
    "function-paren-newline": "off",
    "import/prefer-default-export": "off",
    "react/prop-types": "off"
  }
};
