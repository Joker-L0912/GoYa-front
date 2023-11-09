module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    // 'eslint-config-ali/typescript/vue',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'no-param-reassign': ['error', { props: false }],
    // 代码风格
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', {
      allowSingleLine: true,
    }],
    'comma-spacing': [2, {
      before: false,
      after: true,
    }],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    // indent: ['off', 2],
    'key-spacing': [2, {
      beforeColon: false,
      afterColon: true,
    }],
    'keyword-spacing': [2, {
      before: true,
      after: true,
    }],
    'linebreak-style': 0,
    'multiline-ternary': [2, 'always-multiline'],
    'no-multiple-empty-lines': [2, {
      max: 1,
    }],
    'no-unneeded-ternary': [2, {
      defaultAssignment: false,
    }],
    quotes: [2, 'single'],
    // semi: ['error', 'never'],
    'space-before-blocks': [2, 'always'],
    '@typescript-eslint/space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, {
      words: true,
      nonwords: false,
    }],
    'spaced-comment': [2, 'always', {
      markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','],
    }],
    'switch-colon-spacing': [2, {
      after: true,
      before: false,
    }],
    'object-curly-spacing': [2, 'always'],
    // ES6
    'arrow-parens': [2, 'as-needed'],
    'arrow-spacing': [2, {
      before: true,
      after: true,
    }],
    // Vue - https://github.com/vuejs/eslint-plugin-vue
    'vue/multi-word-component-names': 0,
    'vue/no-v-html': 0,
    'vue/html-quotes': ['error', 'single'],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/require-default-prop': 0,
    'vue/singleline-html-element-content-newline': 0,

    'vue/require-explicit-emits': [2, {
      allowProps: true,
    }],
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'beside',
      multiline: 'beside',
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never',
    }],
    // 支持定义any类型
    '@typescript-eslint/no-explicit-any': ['off'],
    // 'vue/script-indent': [2, 4, {
    //   switchCase: 1
    // }]
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
};

// module.exports = {
//   overrides: [
//     {
//       files: ['*.vue'],
//       parser: 'vue-eslint-parser',
//       parserOptions: {
//         parser: '@typescript-eslint/parser',
//       },
//       rules: {
//         'no-unused-vars': 'off',
//         'no-undef': 'off',
//         '@typescript-eslint/no-unused-vars': 'off',
//       },
//     },
//   ],
//   extends: [
//     'plugin:vue/vue3-essential',
//     'eslint:recommended',
//     '@vue/typescript/recommended',
//     'plugin:vue/vue3-recommended',
//     '@mistjs/eslint-config-ts'],
//   rules: {
//     // JavaScript/ESLint 推荐的规则
//     'no-console': 'warn', // 不允许使用 console.log 等
//     'no-unused-vars': 'warn', // 不允许存在未使用的变量
//     'no-undef': 'error', // 不允许使用未定义的变量
//
//     // Vue/ESLint 推荐的规则
//     // 'vue/html-indent': ['error', 2], // HTML 缩进为 2 个空格
//     'indent': 'off',
//     '@typescript-eslint/indent': ['error'],
//     'vue/attribute-hyphenation': 'error', // 属性名使用连字符形式
//     'vue/html-self-closing': 'off', // 关闭自闭合标签要求，根据个人或团队喜好配置
//     'vue/max-attributes-per-line': ['error', {
//       singleline: {
//         max: 1,
//       },
//       multiline: {
//         max: 1,
//       },
//     }],
//     'vue/first-attribute-linebreak': ['error', {
//       singleline: 'beside',
//       multiline: 'beside',
//     }],
//     'vue/html-closing-bracket-newline': ['error', {
//       singleline: 'never',
//       multiline: 'never',
//     }],
//     'vue/no-v-html': 'off', // 允许使用 v-html 指令
//     'vue/no-unused-components': 'warn', // 不允许存在未使用的组件
//
//     // TypeScript/ESLint 推荐的规则
//     '@typescript-eslint/no-unused-vars': 'warn', // 不允许存在未使用的 TypeScript 变量
//     '@typescript-eslint/explicit-module-boundary-types': 'off', // 允许不显式指定导出函数的返回类型
//     '@typescript-eslint/no-explicit-any': 'off', // 允许使用 any 类型
//     'vue/require-prop-types': 'off',
//     'vue/require-default-prop': 'off',
//     'vue/multi-word-component-names': 'off',
//     'vue/prefer-import-from-vue': 'off',
//
//     // reactivity transform
//     'vue/no-setup-props-destructure': 'off',
//     'vue/component-tags-order': [
//       'error',
//       {
//         order: ['script', 'template', 'style'],
//       },
//     ],
//     'vue/block-tag-newline': [
//       'error',
//       {
//         singleline: 'always',
//         multiline: 'always',
//       },
//     ],
//     'vue/component-name-in-template-casing': ['error', 'PascalCase'],
//     'vue/component-options-name-casing': ['error', 'PascalCase'],
//     'vue/custom-event-name-casing': ['error', 'camelCase'],
//     'vue/define-macros-order': [
//       'error',
//       {
//         order: ['defineProps', 'defineEmits'],
//       },
//     ],
//     'vue/html-comment-content-spacing': [
//       'error',
//       'always',
//       {
//         exceptions: ['-'],
//       },
//     ],
//     'vue/no-restricted-v-bind': ['error', '/^v-/'],
//     'vue/no-useless-v-bind': 'error',
//     'vue/no-v-text-v-html-on-component': 'error',
//     'vue/padding-line-between-blocks': ['error', 'always'],
//     'vue/prefer-separate-static-class': 'error',
//
//     // extensions
//     'vue/array-bracket-spacing': ['error', 'never'],
//     'vue/arrow-spacing': ['error', {
//       before: true,
//       after: true,
//     }],
//     'vue/block-spacing': ['error', 'always'],
//     'vue/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
//     'vue/comma-dangle': ['error', 'always-multiline'],
//     'vue/comma-spacing': ['error', {
//       before: false,
//       after: true,
//     }],
//     'vue/comma-style': ['error', 'last'],
//     'vue/dot-location': ['error', 'property'],
//     'vue/dot-notation': ['error', { allowKeywords: true }],
//     'vue/eqeqeq': ['error', 'smart'],
//     // 'vue/func-call-spacing': ['off', 'never'],
//     'vue/key-spacing': ['error', {
//       beforeColon: false,
//       afterColon: true,
//     }],
//     'vue/keyword-spacing': ['error', {
//       before: true,
//       after: true,
//     }],
//     'vue/no-constant-condition': 'warn',
//     'vue/no-empty-pattern': 'error',
//     'vue/no-extra-parens': ['error', 'functions'],
//     'vue/no-irregular-whitespace': 'error',
//     'vue/no-loss-of-precision': 'error',
//     'vue/no-restricted-syntax': [
//       'error',
//       'DebuggerStatement',
//       'LabeledStatement',
//       'WithStatement',
//     ],
//     'vue/no-sparse-arrays': 'error',
//     'vue/object-curly-newline': [
//       'error',
//       {
//         multiline: true,
//         consistent: true,
//       },
//     ],
//     'vue/object-curly-spacing': ['error', 'always'],
//     'vue/object-property-newline': [
//       'error',
//       { allowMultiplePropertiesPerLine: true },
//     ],
//     'vue/object-shorthand': [
//       'error',
//       'always',
//       {
//         ignoreConstructors: false,
//         avoidQuotes: true,
//       },
//     ],
//     'vue/operator-linebreak': ['error', 'before'],
//     'vue/prefer-template': 'error',
//     'vue/quote-props': ['error', 'consistent-as-needed'],
//     'vue/space-in-parens': ['error', 'never'],
//     'vue/space-infix-ops': 'error',
//     'vue/space-unary-ops': ['error', {
//       words: true,
//       nonwords: false,
//     }],
//     'vue/template-curly-spacing': 'error',
//     'vue/html-quotes': ['error', 'single'],
//   },
// }
